import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationDetailComponent } from './location-detail.component';
import { LocationService } from '../location.service';

describe('LocationDetailComponent', () => {
  let component: LocationDetailComponent;
  let fixture: ComponentFixture<LocationDetailComponent>;
  let locationSvc: LocationService;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationDetailComponent ],
      providers: [
        LocationService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationDetailComponent);
    component = fixture.componentInstance;
    locationSvc = TestBed.get(LocationService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the location service', () => {
    const id = '456';
    spyOn(locationSvc, 'lookupCityById');

    component.lookupCityById(id);

    expect(locationSvc.lookupCityById).toHaveBeenCalled();
    expect(locationSvc.lookupCityById).toHaveBeenCalledWith(id);
  });

  it('should get city using id', () => {
    const id = '456';
    const mockResponse = {
      city: 'denver'
    };
    spyOn(locationSvc, 'lookupCityById').and.returnValue(mockResponse);

    const actual = component.lookupCityById(id);

    expect(actual).toBeDefined();
    expect(actual.city).toBe('denver');
  });

});
