import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorrectComponent } from './components/correct/correct.component';
import { Correct2Component } from './components/correct2/correct2.component';
import { FoundObjectWhatComponent } from './components/found-object-what/found-object-registrate.component';
import { FoundObjectWhenComponent } from './components/found-object-when/found-object-when.component';
import { FoundObjectWhereComponent } from './components/found-object-where/found-object-where.component';
import { LandpageComponent } from './components/landpage/landpage.component';
import { LostObjectWhatComponent } from './components/lost-object-what/lost-object-registrate.component';
import { LostObjectWhenComponent } from './components/lost-object-when/lost-object-when.component';
import { LostObjectWhereComponent } from './components/lost-object-where/lost-object-where.component';

const routes: Routes = [
  {path: 'landpage', component: LandpageComponent},
  {path: '', component: LandpageComponent},
  {path: 'lost-object-what', component: LostObjectWhatComponent},
  {path: 'lost-object-where', component: LostObjectWhereComponent},
  {path: 'lost-object-when', component: LostObjectWhenComponent},
  {path: 'correct', component: CorrectComponent},
  {path: 'correct2', component: Correct2Component},
  {path: 'found-object-what', component: FoundObjectWhatComponent},
  {path: 'lost-object-where', component: LostObjectWhatComponent},
  {path: 'found-object-where', component: FoundObjectWhereComponent},
  {path: 'found-object-what', component: FoundObjectWhatComponent},
  {path: 'found-object-when', component: FoundObjectWhenComponent},







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
