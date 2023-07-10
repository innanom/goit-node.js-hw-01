import contactsList from "./db/contacts.js";
import yargs from "yargs";

const invokeAction = async ({ action, id, name, email, phone }) => {
  console.log(action);
  switch (action) {
    case "list":
      const allContacts = await contactsList.listContacts();
      return console.log(allContacts);
      break;

    case "get":
      const oneContact = await contactsList.getContactById(id);
      return console.log(oneContact);
      break;

    case "add":
      const newContact = await contactsList.addContact({ name, email, phone });
      return console.log(newContact);
      break;

    case "remove":
      const deleteContact = await contactsList.removeContact(id);
      return console.log(deleteContact);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
};

const { argv } = yargs(process.argv.slice(2));

invokeAction(argv);
