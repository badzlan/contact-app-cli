// Module
const fs = require("fs");
const chalk = require("chalk");
const validator = require("validator");

// Create Directory
const dir = "./data";
if (!fs.existsSync(dir)) {
   fs.mkdirSync(dir);
}

// Create File JSON
const data = "./data/contacts.json";
if (!fs.existsSync(data)) {
   fs.writeFileSync(data, "[]", "utf-8");
}

// Save Contact
const save = (nama, noHP, email) => {
   const contact = { nama: nama, noHP: noHP, email: email };
   const file = fs.readFileSync("./data/contacts.json", "utf-8");
   const contacts = JSON.parse(file);

   // Duplicate check
   const duplicate = contacts.find((contact) => contact.nama === nama);
   if(duplicate){
      console.log(chalk.red.inverse.bold("Contact sudah terdaftar, gunakan nama lain!"));
      return false;
   }

   // email check
   if(!validator.isEmail(email)){
      console.log(chalk.red.inverse.bold("E-mail tidak valid!"));
      return false;
   }

   // noHP check
   if(!validator.isMobilePhone(noHP, 'id-ID')){
      console.log(chalk.red.inverse.bold("Nomor Handphone tidak valid!"));
      return false;
   }

   contacts.push(contact);

   fs.writeFileSync("./data/contacts.json", JSON.stringify(contacts));

   console.log(chalk.green.inverse.bold("Berhasil menambahkan data!"));
};

module.exports = { save: save };