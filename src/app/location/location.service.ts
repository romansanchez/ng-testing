import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor() { }


  lookupCityById(id) {
    return {
      city: 'atlanta'
    };
  }
}
