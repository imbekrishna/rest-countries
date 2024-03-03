import { useState } from 'react';
const FilterDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeOptions = () => setIsOpen((prev) => !prev);
  return (
    <div className="container--md filter--container" onClick={closeOptions}>
      <span className="filter--region">Filter by Region</span>
      <svg
        className={`dropdown--icon ${isOpen ? 'open' : ''}`}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Arrow / Caret_Down_MD">
          <path
            id="Vector"
            d="M16 10L12 14L8 10"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </svg>
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
