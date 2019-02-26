export class Boat {
  boatId: number;
  boatName: string;
  description: string;
  lengthInFeet: string;
  make: string;
  picture: string;

  constructor(
    boatId: number,
    boatName: string,
    description: string,
    lengthInFeet: string,
    make: string,
    picture: string
  ) {
    this.boatId = boatId;
    this.boatName = boatName;
    this.description = description;
    this.lengthInFeet = lengthInFeet;
    this.make = make;
    this.picture = picture;
  }
}
