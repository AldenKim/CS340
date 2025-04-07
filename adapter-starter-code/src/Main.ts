import { Table } from "./table/Table";
import { ContactManager } from "./contact/ContactManager";
import { TableData } from "./table/TableData";
import { Adapter } from "./contact/Adapter";
import { Contact } from "./entity/Contact";
import { Hello } from "./Hello";
import { LyricsStringSource } from "./LyricsStringSource";
import { ReverseDecorator } from "./ReverseDecorator";
import { AddSpaceDecorator } from "./AddSpaceDecorator";
import { AddExclamationDecorator } from "./AddExclamationDecorator";

function Main() {
  const contactManager: ContactManager = new ContactManager();

  // TODO: Create and add contacts to the contact manager
  contactManager.addContact(new Contact("Alden", "Kim", "123-456-7890", "alden@example.com"));
  contactManager.addContact(new Contact("Aiden", "Johnson", "999-999-9999", "aiden@example.com"));
  contactManager.addContact(new Contact("Kenton", "Harris", "555-555-5555", "kenton@example.com"));

  const contactsTable: TableData = new Adapter(contactManager); //TODO: Instantiate the adapter that implements the TableData interface and adapts/wraps the ContactManager
  const table = new Table(contactsTable, (value: any) => process.stdout.write(value));

  table.display();

  console.log();
  console.log();

  const hello = new Hello();
  const lyrics = new LyricsStringSource();

  const reverseHello = new ReverseDecorator(hello);
  const addSpaceHello = new AddSpaceDecorator(hello);
  const addExlamationHello = new AddExclamationDecorator(hello);

  const reverselyrics = new ReverseDecorator(lyrics);
  const addSpaceLyrics = new AddSpaceDecorator(lyrics);
  const addExlamationlyrics = new AddExclamationDecorator(lyrics);

  console.log(hello.next());
  console.log(lyrics.next());
  console.log();

  console.log(reverseHello.next());
  console.log(addSpaceHello.next());
  console.log(addExlamationHello.next());
  console.log();

  console.log(reverselyrics.next());
  console.log(addSpaceLyrics.next());
  console.log(addExlamationlyrics.next());
}

Main();
