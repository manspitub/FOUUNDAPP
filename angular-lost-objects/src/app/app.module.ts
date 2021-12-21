import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandpageComponent } from './components/landpage/landpage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialImportsModule } from './modules/material-imports.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { GoogleMap, GoogleMapsModule } from '@angular/google-maps';

import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireAuthGuardModule } from '@angular/fire/compat/auth-guard';
import { LostObjectWhereComponent } from './components/lost-object-where/lost-object-where.component';
import { LostObjectWhatComponent } from './components/lost-object-what/lost-object-registrate.component';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { LostObjectWhenComponent } from './components/lost-object-when/lost-object-when.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CorrectComponent } from './components/correct/correct.component';
import { FoundObjectWhatComponent } from './components/found-object-what/found-object-registrate.component';
import { FoundObjectWhereComponent } from './components/found-object-where/found-object-where.component';
import { FoundObjectWhenComponent } from './components/found-object-when/found-object-when.component';
import { Correct2Component } from './components/correct2/correct2.component';

@NgModule({
  declarations: [
    AppComponent,
    LostObjectWhatComponent,
    FoundObjectWhatComponent,
    LandpageComponent,
    LostObjectWhereComponent,
    FoundObjectWhereComponent,
    FoundObjectWhenComponent,
    LostObjectWhenComponent,
    CorrectComponent,
    Correct2Component

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialImportsModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    CommonModule,
    GoogleMapsModule,

    HttpClientModule,
    HttpClientJsonpModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireAuthGuardModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
