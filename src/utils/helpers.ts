import { Name } from '../types';

export const getBorderCountriesName = async (
  countryCodes: string[] | undefined
) => {
  if (!countryCodes || countryCodes.length === 0) return;
  let names: { name: string; cca3: string }[] = [];

  const codes = encodeURIComponent(countryCodes.join(','));
  const url = `https://restcountries.com/v3.1/alpha?codes=${codes}&fields=name,cca3`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    names = data.map(({ name, cca3 }: { name: Name; cca3: string }) => ({
      name: name.common,
      cca3,
    }));
    return names;
  } catch (error) {
    return names;
  }
};
