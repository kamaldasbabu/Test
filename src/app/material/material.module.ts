import { NgModule } from '@angular/core';

import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon'


const allMatModule = [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule

]


@NgModule({
  imports: [
    allMatModule
  ],
  exports: [
    allMatModule
  ]
})
export class MaterialModule { }
