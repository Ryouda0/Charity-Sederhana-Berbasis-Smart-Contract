import hre from "hardhat";

async function main() {
  console.log("Mendeploy kontrak Charity...");
  
  const Charity = await hre.ethers.getContractFactory("Charity");
  
  // Parameter: target 5 ETH, durasi 30 hari
  const targetEth = 5; 
  const durationDays = 30; 
  
  const charity = await Charity.deploy(targetEth, durationDays);
  
  await charity.waitForDeployment();
  const address = await charity.getAddress();
  
  console.log("\n✅ KONTRAK BERHASIL DIPASANG!");
  console.log("📌 Alamat Kontrak:", address);
  console.log("\n📝 COPY ALAMAT INI KE index.html:");
  console.log(`const contractAddress = "${address}";`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});