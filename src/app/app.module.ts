import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,CommonModule ],
  declarations: [ AppComponent, HelloComponent ,HomeComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
