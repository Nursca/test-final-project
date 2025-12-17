const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contracts with:", deployer.address);

  const USDC_ADDRESS = "0x036CbD53842c5426634e7929541eC2318f3dCF7e";
  const Crowdfunding = await hre.ethers.getContractFactory("Crowdfunding");
  const crowdfunding = await Crowdfunding.deploy(USDC_ADDRESS);
  await crowdfunding.waitForDeployment();

  console.log("Crowdfunding deployed to:", await crowdfunding.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
