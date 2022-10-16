import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SigUpComponent} from "../sig-up.component";

const routes: Routes = [
  {
    path:'',
    component:SigUpComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SigUpRoutingModule { }
