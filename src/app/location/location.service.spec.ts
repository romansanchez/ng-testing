import { TestBed } from '@angular/core/testing';

import { LocationService } from './location.service';

describe('LocationService', () => {
  let locationSvc: LocationService;

  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    locationSvc = TestBed.get(LocationService);
    expect(locationSvc).toBeTruthy();
  });

  it('should return a default city ', () => {
    const actual = locationSvc.lookupCityById('777');
    expect(actual.city).toBe('atlanta');
  });
});
