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
    fixture.detectChanges();
    locationSvc = TestBed.get(LocationService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should lookup city using id', () => {
    const id = '456';
    const mockResponse = {
      city: 'denver'
    };
    spyOn(locationSvc, 'lookupCityById').and.returnValue(mockResponse);

    component.lookupCityById(id);

    expect(locationSvc.lookupCityById).toHaveBeenCalled();
    expect(locationSvc.lookupCityById).toHaveBeenCalledWith(id);
    expect(component.city).toBeDefined();
    expect(component.city).toBe('denver');
  });

});
