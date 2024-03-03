import FilterDropdown from '../components/FilterDropdown';
import searchIcon from '../assets/search.svg';
import Country from '../components/Country';
import countries from '../../data.json';

const Homepage = () => {
  return (
    <main>
      <div className="action--container">
        <div className="container--md search--container">
          {/* FIXME: update color */}
          <img className="search--icon" src={searchIcon} alt="" />
          <input
            className="search--input"
            type="search"
            placeholder="Search for a country..."
          />
        </div>
        <FilterDropdown />
      </div>

      <div className="countries--container">
        {countries.map((country) => (
          <Country
            key={country.alpha3Code}
            name={country.name}
            capital={country.capital ?? ''}
            flag={country.flag}
            population={country.population}
            region={country.region}
          />
        ))}
      </div>
    </main>
  );
};
export default Homepage;
