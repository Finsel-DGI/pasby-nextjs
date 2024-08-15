export interface NationalFactory {
  national: string;
  country: string;
  claims: {
    contact?: Contact;
    address?: Address;
    bio?: Bio;
    financial?: Financial;
    naming?: Naming;
    nationality: Nationality;
  } | undefined
}

interface Address {
  country: string;
  city: string;
  countryCode: string;
  formatted: string;
  latitude?: string;
  postCode: string;
  place: string;
  longitude?: string;
}

interface Bio {
  birthdate: string;
  gender: string;
  birthplace: string;
  dateOfDeath?: number;
  birthnumber: number;
  maritalStatus: string;
  age: number;
}

interface Contact {
  emailVerified: boolean;
  phone: string;
  phoneVerified: boolean;
  email: string;
}

interface Financial {
  bvn: string;
  bvnLevel: string;
  bvnIAT: string;
  bvnBank: string;
}

interface Naming {
  titleSuffix?: string;
  given: string;
  middle: string;
  preferredUsername: string;
  nickname: string;
  name: string;
  titlePrefix?: string;
  family: string;
  title: string;
}

interface Nationality {
  pep: boolean;
  nationalities: string[];
  residence: string;
  primary: string;
}
