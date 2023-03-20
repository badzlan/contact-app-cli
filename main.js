import { question, save } from "./contacts";

const main = async () => {
   const nama = await question("Masukkan nama anda : ");
   const noHP = await question("Masukkan no HP anda : ");
   const email = await question("Masukkan email anda : ");

   save(nama, noHP, email);
};

main();
