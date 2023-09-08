import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import {MatDialogModule} from '@angular/material/dialog';


const MODULES = [
  MatCardModule,
  ReactiveFormsModule,
  FormsModule,
MatInputModule,
MatButtonModule,
BrowserAnimationsModule,
BrowserModule,
MatDialogModule
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MODULES
  ],
  exports:[MODULES]
})
export class MaterialModule { }
