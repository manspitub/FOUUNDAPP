import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LostObjectDto } from '../dto/lost-object.dto';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { LostObject } from '../interfaces/lost-object';
import { user } from 'rxfire/auth';


const DEFAULT_HEADERS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class LostObjectService {

  constructor( private firestore: AngularFirestore) { }

  postLostObject(lostObject: LostObject){
    let userId = localStorage.getItem('uid')
    return this.firestore.collection(`lostObjects/${userId}/what`).add({
      categoria: lostObject.categoria,
      subCategoria: lostObject.subCategoria,
      color: lostObject.color,
      modelo: lostObject.modelo,
      identificado: lostObject.identificado,
      uid: localStorage.getItem('uid')
    });
  }





}
