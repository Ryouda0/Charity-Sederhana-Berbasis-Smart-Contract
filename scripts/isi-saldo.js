import hre from "hardhat";

async function main() {
  const [pengirim] = await hre.ethers.getSigners();
  const alamatTujuan = "ALAMAT_METAMASK_KAMU"; // Ganti dengan alamat 0x6759... kamu

  console.log("Mengirim 100 ETH lokal...");
  const tx = await pengirim.sendTransaction({
    to: alamatTujuan,
    value: hre.ethers.parseEther("100.0"),
  });

  await tx.wait();
  console.log("Berhasil! Cek saldo MetaMask kamu.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});