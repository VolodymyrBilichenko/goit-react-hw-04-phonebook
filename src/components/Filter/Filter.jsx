import { FilterStyle } from './Filter.styled';

export const Filter = ({ onFilter, filter }) => {
  return (
    <FilterStyle>
      <input
        className="filter__input"
        placeholder="Name or number"
        type="text"
        onChange={onFilter}
        value={filter}
      />
    </FilterStyle>
  );
};
