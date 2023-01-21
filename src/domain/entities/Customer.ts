import Entity from './Entity';

export class Customer extends Entity {
  _name: string;
  _birthdate: string;
  _documentNumber: string;
  _phone: string;

  constructor(name: string, documentNumber: string, birthdate: string, phone: string) {
    super();
    this._birthdate = birthdate;
    this._documentNumber = documentNumber;
    this._name = name;
    this._phone = phone;
  }

  public getAge(): Number {
    const today = new Date();
    const birthDate = new Date(this._birthdate);
    const month = today.getMonth() - birthDate.getMonth();
    let age = today.getFullYear() - birthDate.getFullYear();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  // public getAge2(): number {
  //   const diff = Date.now() - new Date(this._birthdate).getTime();
  //   return new Date(diff).getUTCFullYear();
  // }
}