import { Component } from 'react';
import { FormStyle } from './From.styled';
import { FormLabel } from './FormLabel.styled';
import { nanoid } from 'nanoid';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = evt => {
    const { name, value } = evt.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  formAddHandler = evt => {
    evt.preventDefault();

    const newContact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };

    if (this.addedContact(newContact)) {
      alert(
        `Contact: ${this.state.name} is already in contacts, Number: ${this.state.number}`
      );
    } else {
      this.props.onSubmit(newContact);
    }

    this.reset();
  };

  addedContact = newContact => {
    return this.props.contacts.some(
      contact =>
        contact.name.toLowerCase().trim() ===
          newContact.name.toLowerCase().trim() ||
        contact.number === newContact.number
    );
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <FormStyle onSubmit={this.formAddHandler}>
        <FormLabel>
          <label className="form__label" htmlFor="name">
            Name
            <input
              className="form__input"
              type="text"
              name="name"
              // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
          </label>
          <label className="form__label" htmlFor="number">
            Number
            <input
              className="form__input"
              type="tel"
              name="number"
              // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              value={this.state.number}
              onChange={this.handleChange}
              required
            />
          </label>
        </FormLabel>
        <button className="form__btn" type="submit">
          Add contact
        </button>
      </FormStyle>
    );
  }
}
