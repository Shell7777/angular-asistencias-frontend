import { Component, OnInit } from '@angular/core';
import {DataNetService} from '../../services/data-net.service'
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Input, ChangeDetectionStrategy,ChangeDetectorRef } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms'
@Component({
  selector: 'app-ponente',
  templateUrl: './ponente.component.html',
  styleUrls: ['./ponente.component.css']
})
export class PonenteComponent implements OnInit {
  
  ponente_template = {
    nombre : "",
    descripcion : "",
    id:0
  }
  form: FormGroup ;
  constructor(private _service:DataNetService,private modalService: NgbModal, private builder :FormBuilder) {
    this.formbuilder()
   }
  formbuilder( values = this.ponente_template ){
    this.form = this.builder.group({
      nombre :  ["",[]],
      descripcion :  ["",[]],
      id: ["",[]],
    })
  }
  ponentes :any = []
  closeResult = '';
  dataPonentes(){
    this._service.getAllPonente().subscribe(data=>{
      console.log(data);
      this.ponentes = data})
  }
  ngOnInit(): void {
    this.dataPonentes()
  }
  async open(content,ponente) {
   await  this._service.getPonente(ponente.id)
      .subscribe((data:any) =>{
        this.ponente_template.nombre = data.nombre
        this.ponente_template.descripcion = data.descripcion
      })
    

    await this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
    
  }
  async close (){
    this.modalService.dismissAll()
  }
  async opennew(content2) {
    await this.modalService.open(content2, {ariaLabelledBy: 'modal-basic-title'})
    this.formbuilder()
  }
  async closenew(value) {
    console.log(value);
    await this._service.postPonente(value).subscribe(data=>console.log(data))
    await this.dataPonentes()
    this.modalService.dismissAll()
  }
}
