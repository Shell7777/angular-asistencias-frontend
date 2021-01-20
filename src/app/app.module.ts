import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MaterialModule} from './material/material.module';
import {NgBootstrapModule} from './ng-bootstrap/ng-bootstrap.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './pages/home/home.component';
import { PersonComponent } from './pages/person/person.component';
import { ConferenceComponent } from './pages/conference/conference.component';
import { InvitacionComponent } from './pages/invitacion/invitacion.component';
import { PonenteComponent } from './pages/ponente/ponente.component'
import { HttpClientModule} from '@angular/common/http';
import { PonenteEditComponent } from './pages/ponente-edit/ponente-edit.component';
import { PorsonEditComponent } from './pages/porson-edit/porson-edit.component'
import {ReactiveFormsModule } from '@angular/forms';
import { ConferenceEditComponent } from './pages/conference-edit/conference-edit.component'
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PersonComponent,
    ConferenceComponent,
    InvitacionComponent,
    PonenteComponent,
    PonenteEditComponent,
    PorsonEditComponent,
    ConferenceEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MaterialModule,
    NgbModule,
    NgBootstrapModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
