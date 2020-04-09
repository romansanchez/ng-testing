import { Component, OnInit } from '@angular/core';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.scss']
})
export class LocationDetailComponent implements OnInit {
  id = '123';
  city = '';

  constructor(private locationSvc: LocationService) { }

  ngOnInit() {
  }

  lookupCityById(id) {
    const response = this.locationSvc.lookupCityById(id);
    this.city = response.city;
  }

}
