import { Component, OnInit } from '@angular/core';
import {DataNetService} from '../../services/data-net.service'
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router'
import {FormGroup, FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-conference',
  templateUrl: './conference.component.html',
  styleUrls: ['./conference.component.css']
})
export class ConferenceComponent implements OnInit {
  conferences:any = []
  form: FormGroup ;
  ponentes:any =[]
  
  constructor(private _service:DataNetService,
              private router :Router,
              private modalService: NgbModal,
              private builder :FormBuilder) { }


  formbuilder( ){
    this.form = this.builder.group({
      name :  ["",[]],
      lugar :  ["",[]],
      fecha :  ["",[]],
      aforo:  ["",[]],
      hour_start:  ["",[]],
      hour_end: ["",[]],
      description: ["",[]],
      
    })
  } 
  dataConference(){
    this._service.getAllConference().subscribe(data=>{
      console.log(data);
      this.conferences = data
      
    })
  }
  async opensave(content) {
    await this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
    this.formbuilder()
  }
  async closenew(value) {
    console.log(value);
    await this._service.postConference(value).subscribe(data=>console.log(data))
    this.modalService.dismissAll()
  }
  opendetailsid(id){
    this.router.navigate([`/conference/${id}`])
  }  
  ngOnInit(): void {
    this.dataConference()
  }

}
