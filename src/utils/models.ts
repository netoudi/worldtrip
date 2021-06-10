export interface Highlights {
  slug: string;
  title: string;
  subtitle: string;
  image: string;
}

export interface Continent {
  id: string;
  name: string;
  description: string;
  image: string;
  countries: number;
  languages: number;
}

export interface City {
  id: string;
  continentId: string;
  name: string;
  country: string;
  image: string;
  flag: string;
}
