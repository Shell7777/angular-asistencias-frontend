import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-asistencia';
  pages : any[] = [
    {nombre:"Home",url : "/home"},
    {nombre:"Person",url : "/person"},
    {nombre:"Conference",url : "/conference"},
    {nombre:"Invitacion",url : "/invitacion"},
    {nombre:"Ponente",url : "/ponente"},
  ]
}
