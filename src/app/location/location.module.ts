import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationDetailComponent } from './location-detail/location-detail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LocationDetailComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    LocationDetailComponent
  ]
})
export class LocationModule { }
