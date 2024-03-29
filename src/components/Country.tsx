import { Link } from 'react-router-dom';

type CountryProps = {
  name: string;
  region: string;
  capital: string;
  population: number;
  flag: string;
  alt: string;
  alpha3Code: string;
};

const Country = ({
  name,
  region,
  capital,
  population,
  flag,
  alt,
  alpha3Code,
}: CountryProps) => {
  const popStr = new Intl.NumberFormat('en-US').format(population);

  return (
    <Link to={`/${alpha3Code}`} className="country">
      <img className="country--flag" src={flag} alt={alt} />
      <div className="country--detail">
        <h2>{name}</h2>
        <p>
          <span className="detail--key">Population:</span> {popStr}
        </p>
        <p>
          <span className="detail--key">Region:</span> {region}
        </p>
        <p>
          <span className="detail--key">Capital:</span> {capital}
        </p>
      </div>
    </Link>
  );
};
export default Country;
