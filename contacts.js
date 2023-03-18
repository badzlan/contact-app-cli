// Core Module
const fs = require("fs");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

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
  const file = fs.readFileSync("./data/contacts.json", "utf-8");
  const contacts = JSON.parse(file);

  contacts.push(contact);

  fs.writeFileSync("./data/contacts.json", JSON.stringify(contacts));

  console.log("Berhasil menambahkan data!");
  rl.close();
}

module.exports = {question: question, save: save};
