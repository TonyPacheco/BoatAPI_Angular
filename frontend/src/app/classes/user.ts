export class User {
  firstName: string;
  lastName: string;

  constructor({ firstName, lastName, photoUrl }) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
