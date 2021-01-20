import { Component, OnInit } from '@angular/core';
import {DataNetService} from '../../services/data-net.service'
import {Router} from '@angular/router'



@Component({
  selector: 'app-invitacion',
  templateUrl: './invitacion.component.html',
  styleUrls: ['./invitacion.component.css']
})
export class InvitacionComponent implements OnInit {

  codigoConferency:any = ""
  codigoPersonal:any = ""
  
  constructor(
    private _service:DataNetService,
    private router :Router) { }
  click(){
    const invitation = {
      idconferency :  this.codigoConferency,
      idpersonal :  this.codigoPersonal
    }
    this._service.postconfirmInvitation(invitation)
      .subscribe(data=>{
        alert('Se ha confirmado tu asistencia')
        this.router.navigate([`/conference`])
        this.codigoConferency = ''
        this.codigoConferency = ''
      })
  }

  ngOnInit(): void {
  }

}
