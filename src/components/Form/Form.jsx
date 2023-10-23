import { Component, useState } from 'react';
import { FormStyle } from './From.styled';
import { FormLabel } from './FormLabel.styled';
import { nanoid } from 'nanoid';

export const Form = () => {
  // state = {
  //   name: '',
  //   number: '',
  // };
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  handleChange = evt => {
    const { name, value } = evt.currentTarget;

    if (name === 'name') {
      setName(value)
    } else if (name === 'number') {
      setNumber(value)
    }

    // this.setState({
    //   [name]: value,
    // });
  };

  formAddHandler = evt => {
    evt.preventDefault();

    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    if (addedContact(newContact)) {
      alert(
        `Contact: ${name} is already in contacts, Number: ${number}`
      );
    } else {
      onSubmit(newContact)
    }

    reset();
  };

  addedContact = newContact => {
    return contacts.some(contact =>
        contact.name.toLowerCase().trim() ===
          newContact.name.toLowerCase().trim() ||
        contact.number === newContact.number
    );
  };

  reset = () => {
    setName('');
    setNumber('');
  };

  render() {
    return (
      <FormStyle onSubmit={formAddHandler}>
        <FormLabel>
          <label className="form__label" htmlFor="name">
            Name
            <input
              className="form__input"
              type="text"
              name="name"
              // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              value={name}
              onChange={handleChange}
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
              value={number}
              onChange={handleChange}
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
