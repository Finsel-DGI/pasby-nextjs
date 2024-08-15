import { strEnum } from "./lib/commons";

export interface AuthState {
  login?: () => void;
  logout?: () => void;
  isAuthenticated: boolean;
  isLoading: boolean;
  user?: User;
}

export interface User {
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

export type status = 'successful' | 'handled' |
  'mismatch' | 'token-mismatch' | 'unauthorized' |
  'expiration' | 'failed' | 'extreme';

export type replyType = 'api_error' | 'param_error' | 'db_error' |
  'external_service_error' | 'session_cancel' | 'unknown_error' | 'session_required' |
  'authorization_error' | 'session_expiry' | 'invalid_request';

export type claims = keyof typeof Claims;

export type identificationActionType = 'login' | 'signup' | 'link';

const Claims = strEnum([
  'bio.birthplace',
  'bio.birthdate',
  'bio.gender',
  'bio.maritalstatus',
  'bio.birthnumber',
  'contact.email',
  'contact.emailVerified',
  'contact.phone',
  'contact.phoneVerified',
  'address.city',
  'address.postcode',
  'address.country',
  'address.place',
  'address.formatted',
  'address.longitude',
  'address.latitude',
  'naming.family',
  'naming.given',
  'naming.title',
  'naming.name',
  'naming.middle',
  'naming.titlePrefix',
  'naming.titleSuffix',
  'naming.nickname',
  'nationality.nationalities',
  'nationality.pep',
  'nationality.primary',
  'nationality.residence',
  'nationality.watchListed',
  'idcards.passport',
  'financial.bvn',
  'financial.bvnBank',
  'financial.bvnLevel',
  'financial.bvnIAT',
]);

export interface IResponseTemplate {
  status: status;
  reason: string;
  type: replyType;
  /**
   * You can overlook this attribute
   */
  label?: string;
  /**
   * Present in a successful response
   */
  data?: Record<string, unknown>;
  /**
   * Present in an errored response
   */
  body?: Record<string, unknown>;
  /**
   * link to reference learning kit
   */
  helper_url?: string;
};