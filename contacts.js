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

// Load Contact
const loadContact = () => {
   const file = fs.readFileSync("./data/contacts.json", "utf-8");
   const contacts = JSON.parse(file);
   return contacts;
}

// Save Contact
const saveContact = (nama, noHP, email) => {
   const contact = { nama: nama, noHP: noHP, email: email };
   const contacts = loadContact();

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

// List Contact
const listContact = () => {
   const contacts = loadContact();
   console.log(chalk.cyan.inverse.bold("Daftar kontak : "));
   contacts.forEach((contact, i) => {
      console.log(`${i+1}. ${contact.nama} - ${contact.email} - ${contact.noHP}`);
   });
};

// Detail Contact
const detailContact = (nama) => {
   const contacts = loadContact();

   const contact = contacts.find(
      (contact) => contact.nama.toLowerCase() === nama.toLowerCase()
   );

   if(!contact){
      console.log(chalk.red.inverse.bold(`${nama} tidak ditemukan!`));
      return false;
   }

   console.log(chalk.cyan.inverse.bold(contact.nama));
   console.log(contact.noHP);
   console.log(contact.email);
};

// Delete Contact
const deleteContact = () => {
   const contacts = loadContact();

   
}

module.exports = { saveContact, listContact, detailContact, deleteContact };