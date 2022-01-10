import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShowUnivsComponent } from './universities/show-univs/show-univs.component';

const routes: Routes = [
  {path: 'university', component:ShowUnivsComponent},
  {path: '' , redirectTo:'/university',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
