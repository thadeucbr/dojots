import Entity from './Entity';
import { Room } from './Room';

export class Reserve extends Entity {
  _costumerId: string;
  _rooms: Room[];
  _checkIn: string;
  _checkOut: string;
  _startDate: string;
  _endDate: string;

  constructor(
    costumerId: string,
    rooms: Room[],
    checkIn: string,
    checkOut: string,
    startDate: string,
    endDate: string
  ) {
    super();
    this._costumerId = costumerId;
    this._rooms = rooms;
    this._checkIn = checkIn;
    this._checkOut = checkOut;
    this._startDate = new Date(startDate).toISOString();
    this._endDate = new Date(endDate).toISOString();
  }

  toCheckIn() {
    const checkIn = new Date().toISOString();
    const startDate = new Date(this._startDate).toISOString();
    const endDate = new Date(this._endDate).toISOString();
    if(checkIn >= startDate && checkIn <= endDate) {
        this._checkIn = checkIn;
    }else{
        throw new Error('Pode não')
    }
  }

    toCheckOut() {
    const checkIn = new Date().toISOString();
    const startDate = new Date(this._startDate).toISOString();
    const endDate = new Date(this._endDate).toISOString();
    if(checkIn >= startDate && checkIn <= endDate) {
        this._checkOut = checkIn;
    }else{
        throw new Error('Pode não')
    }
  }
}