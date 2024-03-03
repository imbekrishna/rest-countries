const country = {
  name: 'India',
  topLevelDomain: ['.in'],
  alpha2Code: 'IN',
  alpha3Code: 'IND',
  callingCodes: ['91'],
  capital: 'New Delhi',
  altSpellings: ['IN', 'Bhārat', 'Republic of India', 'Bharat Ganrajya'],
  subregion: 'Southern Asia',
  region: 'Asia',
  population: 1380004385,
  latlng: [20, 77],
  demonym: 'Indian',
  area: 3287590,
  gini: 35.7,
  timezones: ['UTC+05:30'],
  borders: ['AFG', 'BGD', 'BTN', 'MMR', 'CHN', 'NPL', 'PAK', 'LKA'],
  nativeName: 'भारत',
  numericCode: '356',
  flags: {
    svg: 'https://flagcdn.com/in.svg',
    png: 'https://flagcdn.com/w320/in.png',
  },
  currencies: [
    {
      code: 'INR',
      name: 'Indian rupee',
      symbol: '₹',
    },
  ],
  languages: [
    {
      iso639_1: 'hi',
      iso639_2: 'hin',
      name: 'Hindi',
      nativeName: 'हिन्दी',
    },
    {
      iso639_1: 'en',
      iso639_2: 'eng',
      name: 'English',
      nativeName: 'English',
    },
  ],
  translations: {
    br: 'India',
    pt: 'Índia',
    nl: 'India',
    hr: 'Indija',
    fa: 'هند',
    de: 'Indien',
    es: 'India',
    fr: 'Inde',
    ja: 'インド',
    it: 'India',
    hu: 'India',
  },
  flag: 'https://flagcdn.com/in.svg',
  regionalBlocs: [
    {
      acronym: 'SAARC',
      name: 'South Asian Association for Regional Cooperation',
    },
  ],
  cioc: 'IND',
  independent: true,
};

const CountryDetail = () => {
  const currencyMapper = (
    currencies: {
      code: string;
      name: string;
      symbol: string;
    }[]
  ) => {
    const nameArr = currencies.map((currency) => currency.name);
    return nameArr.join(', ');
  };

  const languageMapper = (
    languages: {
      iso639_1: string;
      iso639_2: string;
      name: string;
      nativeName: string;
    }[]
  ) => {
    const langArr = languages.map((language) => language.name);
    return langArr.join(', ');
  };

  const borderCountries = country.borders.map((c) => (
    <span key={c} className="container--sm">
      {c}
    </span>
  ));

  return (
    <main className="detail--container">
      <div className="container--sm back--btn">
        {/* <img className="back--icon" src={backIcon} alt="" /> */}
        {/* <BackIcon /> */}
        <svg
          className="back--icon"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 12L6 12M6 12L11 17M6 12L11 7"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span>Back</span>
      </div>

      <div className="detail--body">
        <img className="detail--flag" src={country.flag} alt={country.name} />
        <div className="detail--body--top">
          <h2>{country.name}</h2>
          <div className="detail--meta--top">
            <div className="detail--meta">
              <p>
                <span className="detail--key">Native name:</span>{' '}
                {country.nativeName}
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
                <span className="detail--key">Capital:</span> {country.capital}
              </p>
            </div>
            <div className="detail--meta">
              <p>
                <span className="detail--key">Top Level Domain:</span>{' '}
                {country.topLevelDomain}
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
