const hre = require("hardhat");

async function main() {
  const KYC = await hre.ethers.getContractFactory("KYCVerification");
  const kyc = await KYC.deploy();
  

  await kyc.waitForDeployment();

  console.log("Contract deployed to:", await kyc.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
