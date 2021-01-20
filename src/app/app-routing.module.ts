import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component'
import {PersonComponent} from './pages/person/person.component'
import {PonenteComponent} from './pages/ponente/ponente.component'
import {InvitacionComponent} from './pages/invitacion/invitacion.component'
import {ConferenceComponent} from './pages/conference/conference.component'
import {ConferenceEditComponent} from './pages/conference-edit/conference-edit.component'
const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'home'},
  {path:'home',component:HomeComponent},
  {path:'person',component:PersonComponent},
  {path:'conference',component:ConferenceComponent},
  {path:'invitacion',component:InvitacionComponent},
  {path:'ponente',component:PonenteComponent},
  {path :'conference/:id',component:ConferenceEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
