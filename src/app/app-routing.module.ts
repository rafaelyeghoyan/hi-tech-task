import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SigInComponent} from "./pages/sig-in/sig-in.component";
import {RecoverPasswordComponent} from "./pages/recover-password/recover-password.component";
import {HomeComponent} from "./pages/home/home.component";
import {AuthGuard} from "./shared/Guard/auth.guard";
import {TeacherComponent} from "./pages/teacher/teacher.component";
import {DonorComponent} from "./pages/donor/donor.component";
import {ContactUsComponent} from "./pages/contact-us/contact-us.component";
import {AboutUsComponent} from "./pages/about-us/about-us.component";
import {BlogComponent} from "./pages/blog/blog.component";
import {SigUpComponent} from "./pages/sig-up/sig-up.component";
import {RegstrationDeactiveGuard} from "./shared/Guard/regstration-deactive.guard";

const routes: Routes = [
  {
    path:"",
    component:SigInComponent
  },
  {
    path:"recover-password",
    component:RecoverPasswordComponent
  },
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:`teacher`,
    component:TeacherComponent
  },
  {
    path:`donor`,
    component:DonorComponent
  },
  {
    path:`contact-us`,
    component:ContactUsComponent
  },
  {
    path:`about-us`,
    component:AboutUsComponent
  },
  {
    path:`blog`,
    component:BlogComponent
  },
  {
    path:"resgistration",
    component:SigUpComponent,
    canDeactivate:[RegstrationDeactiveGuard]
  },
  {
    path:"**",
    component:SigInComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ AuthGuard , RegstrationDeactiveGuard]
})
export class AppRoutingModule {
}
