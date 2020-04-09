import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationDetailComponent } from './location-detail/location-detail.component';

@NgModule({
  declarations: [LocationDetailComponent],
  imports: [
    CommonModule
  ],
  exports: [
    LocationDetailComponent
  ]
})
export class LocationModule { }
