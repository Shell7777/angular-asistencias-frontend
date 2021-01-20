import { Component, OnInit,Input } from '@angular/core';
import {DataNetService} from '../../services/data-net.service'
import {ActivatedRoute} from '@angular/router'
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router'
import {FormGroup, FormBuilder} from '@angular/forms'
@Component({
  selector: 'app-conference-edit',
  templateUrl: './conference-edit.component.html',
  styleUrls: ['./conference-edit.component.css']
})
export class ConferenceEditComponent implements OnInit {
  conferenceID 
  conference:any  ={
    Invitation : []
  }
  
  personAsist :any =[]
  countpersonAsist 
  personNotAsist 
  persons 
  ponentes 
  form: FormGroup ;
  //falta ponentes 
  constructor(private _service:DataNetService,
              private route:ActivatedRoute,
              private router :Router,
              private modalService: NgbModal,
              private builder :FormBuilder) { 
    
  }
  getPeronsAsistieron(idConference){
    this._service.getInvitados(idConference).subscribe((data:any)=>{
      this.personAsist = data
      //console.log(data);
    }) 
  }
  getConference(id){
    this._service.getConference(id).subscribe((data:any)=>{
      this.conference = data
     // this.personAsist = data.Invitation
      console.log( data.Invitation);
      });
    
     this._service.getInvitados(id).subscribe((data:any)=>{
       this.personAsist = data
       //console.log(data);
     }) 

  }
 async getPersonal(){
    await this._service.getAllPerson().subscribe((data:any)=>{
      this.persons=data
      console.log(this.persons);
    })
  }
  async openAddPerson(contetAddPerson){
     await this._service.getPersonNoInvited(this.conferenceID).subscribe((data:any)=>{
       console.log(data);
       this.personNotAsist = data
     })
     await this.modalService.open(contetAddPerson, {ariaLabelledBy: 'modal-basic-title'})
  }
  invitedPerson(idperson,index){
    const invitacion = {
      fecha_confirmation:'2021-12-12',
      fecha_invitacion:'2021-12-12',
      idconferency:parseInt( this.conferenceID),
      idpersonal: idperson
    }
    console.log(invitacion);
    
    this._service.postInvitation(invitacion)
        .subscribe(data=>{
          this.personNotAsist.splice(index,1)  
         this.getConference(this.conferenceID)
        })
    
  }
  getPonente(){
    this._service.getAllPonente().subscribe((data:any)=>this.ponentes=data)
  }
  formbuilder( conferencia){
    this.form = this.builder.group({
      name :  [conferencia.name,[]],
      lugar :  [conferencia.lugar,[]],
      fecha :  [conferencia.fecha,[]],
      aforo:  [conferencia.aforo,[]],
      hour_start:  [conferencia.hour_start,[]],
      hour_end: [conferencia.hour_end,[]],
      description: [conferencia.description,[]],
      
    })
  } 
  async opensaveEdit(contentedit) {
    await this.modalService.open(contentedit, {ariaLabelledBy: 'modal-basic-title'})
    this.formbuilder(this.conference)
  }
  async closenew(value) {
    console.log(value);
    value.id = this.conferenceID
    await this._service.putConference(value).subscribe(data=>console.log(data))
    this.modalService.dismissAll()
    this.router.navigate([`/conference`])

  }
  ngOnInit(): void {
    this.conferenceID  = this.route.snapshot.params.id
    this.getConference(this.conferenceID)
    this.getPeronsAsistieron(this.conferenceID)
    
  }

}
