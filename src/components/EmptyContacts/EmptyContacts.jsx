import { EmptyContactsStyle } from './EmptyContacts.styled';

export const EmptyContacts = () => {
  return (
    <EmptyContactsStyle>
      <p className="empty__notify">Nothing found</p>
    </EmptyContactsStyle>
  );
};
