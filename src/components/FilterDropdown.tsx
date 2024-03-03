import { useState } from 'react';
import dropDownIcon from '../assets/caret-down.svg';

const FilterDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeOptions = () => setIsOpen((prev) => !prev);
  return (
    <div className="container--md filter--container" onClick={closeOptions}>
      <span className="filter--region">Filter by Region</span>
      <img
        className={`dropdown--icon ${isOpen ? 'open' : ''}`}
        src={dropDownIcon}
        alt=""
      />
      <div className={`container--md region--options ${isOpen ? 'open' : ''}`}>
        <p>Africa</p>
        <p>America</p>
        <p>Asia</p>
        <p>Europe</p>
        <p>Oceania</p>
      </div>
    </div>
  );
};
export default FilterDropdown;
