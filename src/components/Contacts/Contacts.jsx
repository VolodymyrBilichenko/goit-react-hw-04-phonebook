import { ContactsStyle } from './Contacts.styled';

export const Contacts = ({ contacts, formDeleteHandler }) => {
  return (
    <ContactsStyle>
      {contacts.map(({ name, number, id }) => (
        <li className="contacts__item" key={id}>
          <h3 className="contacts__name">{name}</h3>
          <p className="contacts__number">: {number}</p>
          <button
            className="contacts__delete"
            onClick={() => formDeleteHandler(id)}
          >
            Delete &times;
          </button>
        </li>
      ))}
    </ContactsStyle>
  );
};
