import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router, RouterLink } from '@angular/router';

import firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-landpage',
  templateUrl: './landpage.component.html',
  styleUrls: ['./landpage.component.css']
})
export class LandpageComponent implements OnInit {

  userList!: Observable<User[]>;
  sesion: string = 'no ha iniciado sesion'



  constructor(public auth: AngularFireAuth,
    private firestore: AngularFirestore,
    private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(resp => {
      this.firestore.collection('users').doc(resp?.user?.uid)
      .set({ name: resp.user?.displayName,
        email: resp.user?.email,
        photo: resp.user?.photoURL });
      localStorage.setItem('name', resp.user?.displayName? resp.user?.displayName: '');
      localStorage.setItem('photo', resp.user?.photoURL? resp.user?.photoURL: '');
      localStorage.setItem('uid', resp.user?.uid? resp.user?.uid: '');
    });

  }

  logout() {
    return localStorage.clear();
  }

  getName(){
    if(localStorage.getItem('name')){
      return localStorage.getItem('name')
    }
    else return this.sesion
  }

  getPhoto(){
    return localStorage.getItem('photo')
  }

  init(){
    if(localStorage.getItem('uid') == null){
      return alert('Usted no ha iniciado sesión. Debe iniciar para continuar')
    }else

    this.router.navigate(['lost-object-what'])
  }

  init2(){
    if(localStorage.getItem('uid') == null){
      return alert('Usted no ha iniciado sesión. Debe iniciar para continuar')
    }else

    this.router.navigate(['found-object-what'])
  }


}
