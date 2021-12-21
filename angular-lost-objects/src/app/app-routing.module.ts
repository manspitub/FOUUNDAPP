import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorrectComponent } from './components/correct/correct.component';
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
  {path: 'correct', component: CorrectComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
