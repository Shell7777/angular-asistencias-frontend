import { Component, OnInit } from '@angular/core';
import {DataNetService} from '../../services/data-net.service'
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Input, ChangeDetectionStrategy,ChangeDetectorRef } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  person_template = {
    nombre : "",
    apellido : "",
    username : "",
    genero: "",
    edad: 0,
    id:0
  }
  form: FormGroup ;
  constructor(private _service:DataNetService,private modalService: NgbModal, private builder :FormBuilder) {
    this.formbuilder()
   }
  formbuilder( values = this.person_template ){
    this.form = this.builder.group({
      nombre :  [values.nombre,[]],
      apellido :  [values.apellido,[]],
      username :  [values.username,[]],
      genero:  [values.genero,[]],
      edad:  [values.edad,[]],
      id: [values.id,[]],
    })
  }
  persons :any = []
  closeResult = '';
  dataPerson(){
    this._service.getAllPerson().subscribe(data=>{
      console.log(data);
      this.persons = data})
  }
  ngOnInit(): void {
    this.dataPerson()
  }
  async open(content,person) {
    await this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
    this.formbuilder(person)
  }
  async close (value){
    console.log(value);
    await this._service.putPerson(value).subscribe(data=>console.log(data))
    await this.dataPerson()
    this.modalService.dismissAll()
  }
  async opennew(content2) {
    await this.modalService.open(content2, {ariaLabelledBy: 'modal-basic-title'})
    this.formbuilder()
  }
  async closenew(value) {
    console.log(value);
    await this._service.postPerson(value).subscribe(data=>console.log(data))
    await this.dataPerson()
    this.modalService.dismissAll()
  }
}
