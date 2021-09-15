export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}
export interface Location {
  lat: string;
  lng: string;
}
export interface Address {
  street: string;
  suite: string;
  city: string;
  geo: Location;
}
export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
}
