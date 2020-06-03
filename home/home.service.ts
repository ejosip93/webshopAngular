import { Injectable } from '@angular/core';
import { proizvodi } from '../data';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

  getData() {
    return proizvodi;
  }

  resetWeights() {
    proizvodi.forEach(proizvod => proizvod.weight = '');
  }
}
