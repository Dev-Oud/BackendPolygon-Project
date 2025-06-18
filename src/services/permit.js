import { Contract, Wallet, providers, ethers } from 'ethers';
import { KYCverificationABI } from '../constants/KYCverificationABI.js';

// Polygon Amoy Minimum Requirements 
const AMOY_MIN_GAS = {
  priorityFee: ethers.utils.parseUnits("30", "gwei"),  // 30 Gwei MINIMUM
  maxFee: ethers.utils.parseUnits("60", "gwei"),      // 60 Gwei MINIMUM
  gasLimit: 500000                                   // Safe default
};

export const verify = async (req, res) => {
  try {
    const { address } = req.body;
    if (!address) return res.status(400).json({ message: "Address required" });

    const provider = new providers.JsonRpcProvider(process.env.RPC_PROVIDER_URL);
    const signer = new Wallet(process.env.WALLET_PRIVATE_KEY, provider);
    const contract = new Contract(process.env.CONTRACT_ADDRESS, KYCverificationABI, signer);

    // HARDCODED GAS VALUES THAT MEET AMOY'S MINIMUMS
    const tx = await contract.verifyUser(address, true, {
      maxPriorityFeePerGas: AMOY_MIN_GAS.priorityFee,
      maxFeePerGas: AMOY_MIN_GAS.maxFee,
      gasLimit: AMOY_MIN_GAS.gasLimit
    });

    console.log(`Transaction submitted with hash: ${tx.hash}`);
    const receipt = await tx.wait();

    return res.status(200).json({
      success: true,
      txHash: receipt.transactionHash,
      gasUsed: receipt.gasUsed.toString()
    });

  } catch (error) {
    console.error("Transaction Failed:", {
      errorCode: error.code,
      reason: error.reason,
      attemptedGas: {
        priority: "30 Gwei",
        max: "60 Gwei"
      }
    });

    return res.status(500).json({
      success: false,
      message: "Transaction failed - network requires higher gas fees",
      minimumRequired: {
        priorityFee: "30 Gwei",
        maxFee: "60 Gwei"
      }
    });
  }
};