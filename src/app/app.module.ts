import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './components/card/card.component';
import { MaterialModule } from './material/material.module';
import { InputNumberComponent } from './components/shared/input-number/input-number.component';
import { InputNameComponent } from './components/shared/input-name/input-name.component';




@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    InputNumberComponent,
    InputNameComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
