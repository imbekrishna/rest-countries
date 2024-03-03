type CountryProps = {
  name: string;
  region: string;
  capital: string;
  population: number;
  flag: string;
};

const Country = ({ name, region, capital, population, flag }: CountryProps) => {
  const popStr = new Intl.NumberFormat('en-US').format(population);

  return (
    <div className="country">
      <img className="country--flag" src={flag} alt={name} />
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
    </div>
  );
};
export default Country;
