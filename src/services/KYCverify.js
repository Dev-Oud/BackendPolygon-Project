const { Contract, Wallet, providers, ethers } = require("ethers");
const { KYCverificationABI } = require("../constants/KYCverificationABI.js");

exports.verify = async (req, res) => {
  try {
    const userAddress = req.body.address;

    if (!userAddress) {
      return res.status(400).json({ message: "User address is required." });
    }

    const KYCAddress = process.env.KYC_CONTRACT_ADDRESS;

    const provider = new providers.JsonRpcProvider(process.env.RPC_PROVIDER_URL);

    // Admin signer
    const signer = new Wallet(process.env.ADMIN_PRIVATE_KEY, provider);

    // Contract instance
    const kycContract = new Contract(KYCAddress, KYCverificationABI, signer);

    // Call the verification function (assumed it's called `verifyUser`)
    const tx = await kycContract.verifyUser(userAddress, {
      maxFeePerGas: ethers.utils.parseUnits("1000", "gwei"),
      maxPriorityFeePerGas: ethers.utils.parseUnits("50", "gwei"),
    });

    // Wait for transaction to confirm
    const receipt = await tx.wait();

    return res.status(200).json({
      message: "User verified successfully",
      transactionHash: receipt.transactionHash,
      gasUsed: receipt.gasUsed.toString()
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.toString() });
  }
};
