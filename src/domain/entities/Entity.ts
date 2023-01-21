import { randomUUID } from "node:crypto"

export default class Entity {
    
    _id: string;
    
    constructor() {
        this._id = randomUUID();
    }
}