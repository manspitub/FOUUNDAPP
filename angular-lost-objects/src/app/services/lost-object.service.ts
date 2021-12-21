import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LostObjectDto } from '../dto/lost-object.dto';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { LostObject } from '../interfaces/lost-object';
import { user } from 'rxfire/auth';
import { LostObjectLocation } from '../interfaces/lost-object-location.interface';


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

  postFoundObject(lostObject: LostObject){
    let userId = localStorage.getItem('uid')
    return this.firestore.collection(`foundObjects/${userId}/what`).add({
      categoria: lostObject.categoria,
      subCategoria: lostObject.subCategoria,
      color: lostObject.color,
      modelo: lostObject.modelo,
      identificado: lostObject.identificado,
      uid: localStorage.getItem('uid')
    });
  }

  postLostObjectLocation(lat: number, long: number){
    let userId = localStorage.getItem('uid')
    return this.firestore.collection(`lostObjects/${userId}/where`).add({
      lat  :  lat,
      long: long,
      uid: localStorage.getItem('uid')
    })
  }


  postFoundObjectLocation(lat: number, long: number){
    let userId = localStorage.getItem('uid')
    return this.firestore.collection(`foundObjects/${userId}/where`).add({
      lat  :  lat,
      long: long,
      uid: localStorage.getItem('uid')
    })
  }

  postLostObjectTime(date: Date){
    let userId = localStorage.getItem('uid')
    return this.firestore.collection(`lostObjects/${userId}/whem`).add({
      date: date,
      uid: localStorage.getItem('uid')
    })
  }


  postFoundObjectTime(date: Date){
    let userId = localStorage.getItem('uid')
    return this.firestore.collection(`foundObjects/${userId}/whem`).add({
      date: date,
      uid: localStorage.getItem('uid')
    })
  }





}
