import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LostObjectListComponent } from './components/lost-object-list/lost-object-list.component';
import { LostObjectRegistrateComponent } from './components/lost-object-registrate/lost-object-registrate.component';

@NgModule({
  declarations: [
    AppComponent,
    LostObjectListComponent,
    LostObjectRegistrateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
