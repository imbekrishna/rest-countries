export interface Country {
  name: Name;
  tld: string[];
  cca3: string;
  currencies: ICurrencies;
  capital: string[];
  region: string;
  subregion: string;
  languages: Languages;
  borders: string[];
  flag: string;
  flags: Flags;
  population: number;
}

export interface Name {
  common: string;
  official: string;
  nativeName: INativeName;
}

export interface INativeName {
  [key: string]: Native;
}

export interface Native {
  official: string;
  common: string;
}

export interface ICurrencies {
  [key: string]: Currency;
}

export interface Currency {
  name: string;
  symbol: string;
}

export interface Languages {
  [key: string]: string;
}

export interface Flags {
  png: string;
  svg: string;
  alt: string;
}
