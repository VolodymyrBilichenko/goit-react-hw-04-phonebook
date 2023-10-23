import { Component, useEffect, useState } from 'react';
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

export const App = () => {
  // state = {
  //   contacts: contacts.contacts,
  //   filter: '',
  // };
  const [contacts, setContacts] = useState(contacts.contacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const localData = localStorage.getItem('contacts');
    const localeParse = JSON.parse(localData);

    if (localData && localeParse.length > 0) {
      setContacts(localeParse);
    } else {
      setContacts(contacts.contacts)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts])

  // componentDidMount() {
  //   // Те що знаходиться в localeStorage будемо сетити в тому випадку якщо localData і її довжина більша ніж 0

  //   const localData = localStorage.getItem('contacts');
  //   const localeParse = JSON.parse(localData);
  //   if (localData && localeParse.length > 0)
  //     this.setState({ contacts: localeParse });
  //   else this.setState({ contacts: contacts.contacts });

  //   // Якщо результат парсингу в значенні null undefined, то запишуться наші контакти.
  //   // this.setState({
  //   //   contacts:
  //   //     JSON.parse(localStorage.getItem('contacts')) ?? contacts.contacts,
  //   // });
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.contacts.length !== this.state.contacts.length) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }

  formDeleteHandler = contactsId => {
    // this.setState({
    //   contacts: this.state.contacts.filter(
    //     contact => contact.id !== contactsId
    //   ),
    // });
    setContacts(contacts.filter(contact => contact.id !== contactsId))
  };

  formAddHandler = newContact => {
    // this.setState(prevState => ({
      // }));
      setContacts([...contacts, newContact])
  };

  onFilter = evt => {
    // this.setState({
    // });
    setFilter(evt.target.value)
  };

  const filteredContacts = contacts.filter(contact =>
      filterByCriteria(contact.name, filter) ||
      filterByCriteria(contact.number, filter)
  );

  return (
    <Container>
      <Section title={'Phonebook'}>
        <Form onSubmit={formAddHandler} contacts={contacts} />
      </Section>

      <Section title={'Filter'}>
        <Filter onFilter={onFilter} filter={filter} />
      </Section>

      <Section title={'Contacts'}>
        {filteredContacts.length === 0 ? (
          <EmptyContacts />
        ) : (
          <Contacts
            contacts={filteredContacts}
            formDeleteHandler={formDeleteHandler}
          />
        )}
      </Section>
    </Container>
  );
}
