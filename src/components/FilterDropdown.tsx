import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const FilterDropdown = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [isOpen, setIsOpen] = useState(false);

  const closeOptions = () => setIsOpen((prev) => !prev);
  const handleClick = (e: React.MouseEvent) =>
    setSearchParams({ region: (e.target as HTMLElement).id });

  return (
    <div className="container--md filter--container" onClick={closeOptions}>
      <span className="filter--region">
        {searchParams.get('region') ?? `Filter by Region`}
      </span>
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
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
      <div
        className={`container--md region--options ${isOpen ? 'open' : ''}`}
        onClick={handleClick}
      >
        {/* TODO: Add all filter */}
        <p id="Africa">Africa</p>
        <p id="Americas">Americas</p>
        <p id="Asia">Asia</p>
        <p id="Europe">Europe</p>
        <p id="Oceania">Oceania</p>
      </div>
    </div>
  );
};
export default FilterDropdown;
