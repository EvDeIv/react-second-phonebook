import { Component } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import ContactList from "./ContactList/ContactList";

export default class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    name: "",
    number: "",
    filter: "",
  };

  setInput = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  createContact = (e) => {
    e.preventDefault();
    const newContact = {
      name: this.state.name,
      id: nanoid(),
      number: this.state.number,
    };
    this.setState((prevState) => {
      if (
        prevState.contacts.findIndex((el) => el.name === newContact.name) === -1
      ) {
        return {
          contacts: [...prevState.contacts, newContact],
          name: "",
          number: "",
        };
      }
      return alert(`${newContact.name} is already in contacts.`);
    });
  };

  filterContacts = () => {
    return this.state.contacts.filter(this.filterCallback);
  };

  filterCallback = (el) => {
    return el.name.toLowerCase().includes(this.state.filter);
  };

  deleteContact = (contact) => {
    return () => {
      this.setState((prevState) => {
        const filtered = prevState.contacts.filter((el) => el.name !== contact);
        return { contacts: [...filtered] };
      });
    };
  };

  render() {
    return (
      <>
        <h2>Phonebook</h2>
        <ContactForm
          name={this.state.name}
          number={this.state.number}
          setInput={this.setInput}
          createContact={this.createContact}
        />
        <h2>Contacts</h2>
        <Filter setInput={this.setInput} />
        <ContactList
          filterContacts={this.filterContacts}
          deleteContact={this.deleteContact}
        />
      </>
    );
  }
}
