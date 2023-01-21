import Entity from './Entity';

export class Room extends Entity {
  _number: number;
  _floor: number;
  _type: string;
  _vacancy: boolean;
  _price: number;

  constructor(number: number, floor: number, type: string, vacancy: boolean, price: number) {
    super()
    this._number = number;
    this._floor = floor;
    this._type = type;
    this._vacancy = vacancy;
    this._price = price;
  }
}