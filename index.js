const contacts = require("./contacts");
const yargs = require("yargs");

yargs.command({
   command: "add",
   describe: "Menambahkan contact baru",
   builder: {
      nama: {
         describe: "Nama Lengkap",
         demandOption: true,
         type: 'string',
      },
      noHP: {
         describe: "No Handphone",
         demandOption: true,
         type: 'string',
      },
      email: {
         describe: "E-mail",
         demandOption: true,
         type: 'string',
      },
   },
   handler(argv) {
      contacts.saveContact(argv.nama, argv.noHP, argv.email);
   },
}).demandCommand();

yargs.command({
   command: "list",
   describe: "Menampilkan semua list contact",
   handler() {
      contacts.listContact();
   },
})

yargs.command({
   command: "detail",
   describe: "Menampilkan detail contact berdasarkan nama",
   builder: {
      nama: {
         describe: "Nama Lengkap",
         demandOption: true,
         type: 'string',
      },
   },
   handler(argv) {
      contacts.detailContact(argv.nama);
   },
})

yargs.command({
   command: "delete",
   describe: "Menghapus contact berdasarkan nama",
   builder: {
      nama: {
         describe: "Nama Lengkap",
         demandOption: true,
         type: 'string',
      },
   },
   handler(argv) {
      contacts.deleteContact(argv.nama);
   },
})

yargs.parse()