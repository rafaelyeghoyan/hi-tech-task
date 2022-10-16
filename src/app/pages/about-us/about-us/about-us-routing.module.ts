import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as path from "path";
import {AboutUsComponent} from "../about-us.component";

const routes: Routes = [
  {
    path:`about-us`,
    component:AboutUsComponent
  }

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutUsRoutingModule { }
