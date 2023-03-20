// Core Module
import { existsSync, mkdirSync, writeFileSync, readFileSync } from "fs";
import { createInterface } from "readline";
const rl = createInterface({
   input: process.stdin,
   output: process.stdout,
});

// Create Directory
const dir = "./data";
if (!existsSync(dir)) {
   mkdirSync(dir);
}

// Create File JSON
const data = "./data/contacts.json";
if (!existsSync(data)) {
   writeFileSync(data, "[]", "utf-8");
}

// Question Fuction
const question = (question) => {
   return new Promise((resolve, reject) => {
      rl.question(question, (answer) => {
         resolve(answer);
      });
   });
};

// Save Contact Function
const save = (nama, noHP, email) => {
   const contact = { nama: nama, noHP: noHP, email: email };
   const file = readFileSync("./data/contacts.json", "utf-8");
   const contacts = JSON.parse(file);

   contacts.push(contact);

   writeFileSync("./data/contacts.json", JSON.stringify(contacts));

   console.log("Berhasil menambahkan data!");
   rl.close();
};

export {question, save};
