import FilterDropdown from '../components/FilterDropdown';
import Country from '../components/Country';
import { useEffect, useState } from 'react';
import { Country as CountryType } from '../types';
import LodingIndicator from '../components/LodingIndicator';

const Homepage = () => {
  const [loading, setLoading] = useState(false);

  const [countries, setCountries] = useState<CountryType[] | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch(`https://restcountries.com/v3.1/all`)
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading || countries === null) {
    return <LodingIndicator />;
  }

  return (
    <main className="home--container">
      <div className="action--container">
        <div className="container--md search--container">
          <svg
            className="search--icon"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15 10.5C15 12.9853 12.9853 15 10.5 15C8.01472 15 6 12.9853 6 10.5C6 8.01472 8.01472 6 10.5 6C12.9853 6 15 8.01472 15 10.5ZM14.1793 15.2399C13.1632 16.0297 11.8865 16.5 10.5 16.5C7.18629 16.5 4.5 13.8137 4.5 10.5C4.5 7.18629 7.18629 4.5 10.5 4.5C13.8137 4.5 16.5 7.18629 16.5 10.5C16.5 11.8865 16.0297 13.1632 15.2399 14.1792L20.0304 18.9697L18.9697 20.0303L14.1793 15.2399Z"
              fill="currentColor"
            />
          </svg>
          <input
            className="search--input"
            type="search"
            placeholder="Search for a country..."
          />
        </div>
        <FilterDropdown />
      </div>

      <div className="countries--container">
        {countries?.map((country) => (
          <Country
            key={country.cca3}
            alpha3Code={country.cca3}
            name={country.name.common}
            // TODO: Create function mapper
            capital={country.capital?.toString() ?? ' '}
            flag={country.flags.svg}
            alt={country.flags.alt}
            population={country.population}
            region={country.region}
          />
        ))}
      </div>
    </main>
  );
};
export default Homepage;
