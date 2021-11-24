import { Component } from "react";
import { nanoid } from "nanoid";

export default class App extends Component {
  state = {
    contacts: [],
    name: "",
  };

  setNameInput = (e) => {
    this.setState({ name: e.target.value });
  };

  createContact = (e) => {
    e.preventDefault();
    const newContact = { name: this.state.name, id: nanoid() };
    this.setState((prevState) => {
      return { contacts: [...prevState.contacts, newContact] };
    });
  };
  render() {
    return (
      <>
        <h2>Name</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            onChange={this.setNameInput}
            className=""
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </form>
        <button className="" onClick={this.createContact}>
          Add contact
        </button>

        {/* TODO: contacts */}
      </>
    );
  }
}
