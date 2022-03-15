import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { EvalSalRequest } from '../models/evalSalRequest';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      new EvalSalRequest(0,50,'single','bimonth'),
      new EvalSalRequest(0,50,'single','bimonth'),
      new EvalSalRequest(0,50,'single','bimonth'),
      new EvalSalRequest(0,50,'single','bimonth'),
      new EvalSalRequest(0,50,'single','bimonth'),
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: EvalSalRequest[]): number {
    return heroes.length > 0 ? 1 : 11;
  }
}
