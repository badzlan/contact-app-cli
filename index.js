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
      }
   },
   handler(argv) {
      contacts.save(argv.nama, argv.noHP, argv.email);
   }
})

yargs.parse()