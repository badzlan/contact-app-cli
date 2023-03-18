const contacts = require('./contacts');

const main = async () => {
  const nama = await contacts.question("Masukkan nama anda : ");
  const noHP = await contacts.question("Masukkan no HP anda : ");
  const email = await contacts.question("Masukkan email anda : ");

  contacts.save(nama, noHP, email);
};

main();
