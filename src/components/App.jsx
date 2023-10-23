import { Component } from 'react';
import { Container } from './Container/Container';
import { Section } from './Section/Section';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { Contacts } from './Contacts/Contacts';
import contacts from './data/ContactsJson.json';
import { EmptyContacts } from './EmptyContacts/EmptyContacts';

function filterByCriteria(field, fieldValue) {
  return field.toLowerCase().trim().includes(fieldValue.toLowerCase().trim());
}

export class App extends Component {
  state = {
    contacts: contacts.contacts,
    filter: '',
  };

  componentDidMount() {
    // Те що знаходиться в localeStorage будемо сетити в тому випадку якщо localData і її довжина більша ніж 0
    const localData = localStorage.getItem('contacts');
    const localeParse = JSON.parse(localData);
    if (localData && localeParse.length > 0)
      this.setState({ contacts: localeParse });
    else this.setState({ contacts: contacts.contacts });

    // Якщо результат парсингу в значенні null undefined, то запишуться наші контакти.
    // this.setState({
    //   contacts:
    //     JSON.parse(localStorage.getItem('contacts')) ?? contacts.contacts,
    // });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  formDeleteHandler = contactsId => {
    this.setState({
      contacts: this.state.contacts.filter(
        contact => contact.id !== contactsId
      ),
    });
  };

  formAddHandler = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  onFilter = evt => {
    this.setState({
      filter: evt.target.value,
    });
  };

  render() {
    const filteredContacts = this.state.contacts.filter(
      contact =>
        filterByCriteria(contact.name, this.state.filter) ||
        filterByCriteria(contact.number, this.state.filter)
    );
    return (
      <Container>
        <Section title={'Phonebook'}>
          <Form onSubmit={this.formAddHandler} contacts={this.state.contacts} />
        </Section>

        <Section title={'Filter'}>
          <Filter onFilter={this.onFilter} filter={this.state.filter} />
        </Section>

        <Section title={'Contacts'}>
          {filteredContacts.length === 0 ? (
            <EmptyContacts />
          ) : (
            <Contacts
              contacts={filteredContacts}
              formDeleteHandler={this.formDeleteHandler}
            />
          )}
        </Section>
      </Container>
    );
  }
}
