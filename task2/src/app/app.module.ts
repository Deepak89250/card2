import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './subComponents/cards/cards.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ObjectComponent } from './object/object.component';




@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    ObjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
