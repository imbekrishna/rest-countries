import FilterDropdown from '../components/FilterDropdown';
import { useEffect, useRef, useState } from 'react';
import { Country as CountryType } from '../types';
import LodingIndicator from '../components/LodingIndicator';
import { useSearchParams } from 'react-router-dom';
import useDebounce from '../hooks/UseDebounce';
import Country from '../components/Country';

import Searchbar from '../components/Searchbar';

const Homepage = () => {
  const cache = useRef<CountryType[] | undefined>(undefined);
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [countries, setCountries] = useState<CountryType[] | undefined>();
  const [filteredCountries, setFilteredCountries] = useState<
    CountryType[] | undefined
  >([]);

  const region = searchParams.get('region');
  const search = searchParams.get('search') ?? '';

  const byRegion = !region
    ? countries
    : countries?.filter((c) => c.region === region);

  useEffect(() => {
    console.log('use effect 1');

    setLoading(true);

    if (cache.current) {
      setCountries(cache.current);
      setLoading(false);
    } else {
      fetch(
        `https://restcountries.com/v3.1/all?fields=name,population,flags,region,cca3,capital`
      )
        .then((res) => res.json())
        .then((data) => {
          cache.current = data;
          setCountries(data);
        })
        .catch((err) => console.error(err))
        .finally(() => setLoading(false));
    }
  }, []);

  useDebounce(
    () => {
      setFilteredCountries(
        byRegion?.filter((c) =>
          c.name.common.toLowerCase().includes(search.toLowerCase())
        )
      );
    },
    [byRegion, search],
    300
  );

  if (loading || !countries) {
    return <LodingIndicator />;
  }

  return (
    <main className="home--container">
      <div className="action--container">
        <Searchbar />
        <FilterDropdown />
      </div>

      <div className="countries--container">
        {filteredCountries?.map((country) => (
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
