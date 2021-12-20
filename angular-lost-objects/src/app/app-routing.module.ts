import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandpageComponent } from './components/landpage/landpage.component';
import { LostObjectRegistrateComponent } from './components/lost-object-registrate/lost-object-registrate.component';

const routes: Routes = [
  {path: 'landpage', component: LandpageComponent},
  {path: '', component: LandpageComponent},
  {path: 'lost-object', component: LostObjectRegistrateComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
