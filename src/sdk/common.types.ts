export type claims = keyof typeof Claims;

export type actions = keyof typeof identificationActionType;

const identificationActionType = {
  login: 'login',
  signup: 'signup',
  link: 'link'
} as const;

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

function strEnum<T extends string>(o: Array<T>): { [K in T]: K } {
  return o.reduce((res, key) => {
    res[key] = key;
    return res;
  }, Object.create(null));
}