const hre = require("hardhat");
const fs = require("fs");
const path = require("path");

async function main() {
    console.log("Starting deployment...");

    const [deployer] = await hre.ethers.getSigners();
    console.log("Deployer:", deployer.address);

    const HealthInsurance = await hre.ethers.getContractFactory("HealthInsurance");
    console.log("Deploying contract...");

    const contract = await HealthInsurance.deploy();
    await contract.waitForDeployment();

    const address = await contract.getAddress();
    console.log("Contract deployed to:", address);

    // Fund contract
    const fundTx = await deployer.sendTransaction({
        to: address,
        value: hre.ethers.parseEther("10")
    });
    await fundTx.wait();
    console.log("Contract funded with 10 ETH");

    // Save config for frontend
    const configContent = `// Auto-generated config
const CONTRACT_ADDRESS = "${address}";
const INSURER_ADDRESS = "${deployer.address}";
`;

    const jsDir = path.join(__dirname, "..", "frontend", "js");
    if (!fs.existsSync(jsDir)) fs.mkdirSync(jsDir, { recursive: true });

    fs.writeFileSync(path.join(jsDir, "config.js"), configContent);
    console.log("Config saved!");

    console.log("\n=== DEPLOYMENT SUCCESS ===");
    console.log("Contract:", address);
    console.log("Admin:", deployer.address);
}

main().then(() => process.exit(0)).catch(err => {
    console.error("Error:", err);
    process.exit(1);
});
