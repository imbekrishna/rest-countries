import { useNavigate, useParams } from 'react-router-dom';
import { Country, ICurrencies, Languages } from '../types';
import { useEffect, useState } from 'react';
import LodingIndicator from '../components/LodingIndicator';

const CountryDetail = () => {
  const { alpha3Code } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [country, setCountry] = useState<Country | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://restcountries.com/v3.1/alpha/${alpha3Code}?fields=name,population,flags,region,subregion,cca3,capital,tld,currencies,languages,tld,borders`
    )
      .then((res) => res.json())
      .then((data) => setCountry(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [alpha3Code]);

  const currencyMapper = (currencies: ICurrencies): string => {
    const nameArr = Object.values(currencies);

    return nameArr.map((curr) => curr.name).join(', ');
  };

  const languageMapper = (languages: Languages): string => {
    const langArr = Object.values(languages);
    return langArr.join(', ');
  };

  const borderCountries = country?.borders?.map((c) => (
    <span key={c} className="container--sm">
      {c}
    </span>
  ));

  if (loading || country == null) {
    return <LodingIndicator />;
  }

  return (
    <main className="detail--container">
      <div className="container--sm back--btn" onClick={() => navigate(-1)}>
        <svg
          className="back--icon"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 12L6 12M6 12L11 17M6 12L11 7"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>Back</span>
      </div>

      <div className="detail--body">
        <img
          className="detail--flag"
          src={country.flags.svg}
          alt={country.flags.alt}
        />
        <div className="detail--body--top">
          <h2>{country.name.common}</h2>
          <div className="detail--meta--top">
            <div className="detail--meta">
              <p>
                <span className="detail--key">Native name:</span>{' '}
                {country.name.common}
              </p>
              <p>
                <span className="detail--key">Population:</span>{' '}
                {country.population}
              </p>
              <p>
                <span className="detail--key">Region:</span> {country.region}
              </p>
              <p>
                <span className="detail--key">Sub Region:</span>{' '}
                {country.subregion}
              </p>
              <p>
                <span className="detail--key">Capital:</span>{' '}
                {country?.capital.join(', ')}
              </p>
            </div>
            <div className="detail--meta">
              <p>
                <span className="detail--key">Top Level Domain:</span>{' '}
                {country.tld.join(', ')}
              </p>
              <p>
                <span className="detail--key">Currencies:</span>{' '}
                {currencyMapper(country.currencies)}
              </p>
              <p>
                <span className="detail--key">Languages:</span>{' '}
                {languageMapper(country.languages)}
              </p>
            </div>
          </div>
          <div className="detail--meta--bottom">
            <h3>Border Countries:</h3>
            {/* TODO: Get Bordering countries name */}
            <div className="border--countries">{borderCountries}</div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default CountryDetail;
