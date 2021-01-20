import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http' 
@Injectable({
  providedIn: 'root'
})
export class DataNetService {

  constructor(private _service:HttpClient) { }
  getAllPerson(){
    return this._service.get('https://localhost:44395/api/person/')
  }
  getPerson(id:number){
    return this._service.get(`https://localhost:44395/api/person/${id}`)
  }
  putPerson(person){
    return this._service.put(`https://localhost:44395/api/person/`,person)
  }
  postPerson(person){
    return this._service.post(`https://localhost:44395/api/person/`,person)
  }
  deletePerson( id:number ){
    return this._service.delete(`https://localhost:44395/api/person/${id}`)
  }
  getPersonNoInvited( idconfereny:number ){
    return this._service.get(`https://localhost:44395/api/invitation/personalNotInvited/${idconfereny}`)
  }



  getAllPonente(){
    return this._service.get('https://localhost:44395/api/ponente/')
  }
  getPonente(id:number){
    return this._service.get(`https://localhost:44395/api/ponente/${id}`)
  }
  postPonente(ponente){
    return this._service.post(`https://localhost:44395/api/ponente/`,ponente)
  }

  

  getAllConference(){
    return this._service.get('https://localhost:44395/api/conference/')
  }
  getConference(id:number){
    return this._service.get(`https://localhost:44395/api/conference/${id}`)
  }
  getConferenceAsistidos(id:number){
    return this._service.get(`https://localhost:44395/api/invitation/calculeUserAsistidos/${id}`)
  }
  postConference(conference){
    return this._service.post(`https://localhost:44395/api/conference/`,conference)
  }
  putConference(conference){
    return this._service.put(`https://localhost:44395/api/conference/`,conference)
  }
  

  postInvitation(invitation){
    return this._service.post('https://localhost:44395/api/invitation/',invitation)
  }
  getInvitados(id){
    return this._service.get(`https://localhost:44395/api/invitation/getInvitados/${id}`)
  }
  postconfirmInvitation(invitation){
    return this._service.post(`https://localhost:44395/api/invitation/getInvitados/`,invitation)
  }
}
