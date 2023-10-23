import { useEffect, useState } from 'react';
import { Container } from './Container/Container';
import { Section } from './Section/Section';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { Contacts } from './Contacts/Contacts';
import contactsData from './data/ContactsJson.json';
import { EmptyContacts } from './EmptyContacts/EmptyContacts';
import localforage from 'localforage';

function filterByCriteria(field, fieldValue) {
  return field.toLowerCase().trim().includes(fieldValue.toLowerCase().trim());
}

export const App = () => {
  const [contacts, setContacts] = useState(contactsData.contacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localforage.getItem('contacts').then(savedContacts => {
      if (savedContacts && savedContacts.length > 0) {
        setContacts(savedContacts);
      } else {
        setContacts(contactsData.contacts);
      }
    });
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formDeleteHandler = contactsId => {
    const updatedContacts = contacts.filter(contact => contact.id !== contactsId);
    setContacts(updatedContacts);
    localforage.setItem('contacts', updatedContacts);
  };

  const formAddHandler = newContact => {
    const updatedContacts = [...contacts, newContact];
    setContacts(updatedContacts);
    localforage.setItem('contacts', updatedContacts);
  };

  const onFilter = evt => {
    setFilter(evt.target.value);
  };

  const filteredContacts = contacts.filter(contact =>
    filterByCriteria(contact.name, filter) || filterByCriteria(contact.number, filter)
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
};
