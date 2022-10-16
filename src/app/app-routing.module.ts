import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SigInComponent} from "./pages/sig-in/sig-in.component";
import {AuthGuard} from "./shared/Guard/auth.guard";
import {SigUpComponent} from "./pages/sig-up/sig-up.component";
import {RegstrationDeactiveGuard} from "./shared/Guard/regstration-deactive.guard";

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import('./pages/sig-in/sig-in/sig-in-routing.module').then(m => m.SigInRoutingModule)
  },
  {
    path: "recover-password",
    loadChildren: () => import('./pages/recover-password/recover-password/recover-password-routing.module').then(m => m.RecoverPasswordRoutingModule)
  },
  {
    path: "home",
    loadChildren: () => import('./pages/home/home/home-routing.module').then(m => m.HomeRoutingModule)
  },
  {
    path: `teacher`,
    loadChildren: () => import('./pages/teacher/techer/techer-routing.module').then(m => m.TecherRoutingModule)
  },
  {
    path: `donor`,
    loadChildren: () => import('./pages/donor/donor/donor-routing.module').then(m => m.DonorRoutingModule)
  },
  {
    path: `contact-us`,
    loadChildren: () => import('./pages/contact-us/contact-us/contact-us-routing.module').then(m => m.ContactUsRoutingModule)
  },
  {
    path: `about-us`,
    loadChildren: () => import('./pages/about-us/about-us/about-us-routing.module').then(m => m.AboutUsRoutingModule)
  },
  {
    path: `blog`,
    loadChildren: () => import('./pages/blog/blog/blog-routing.module').then(m => m.BlogRoutingModule)
  },
  {
    path: "resgistration",
    loadChildren: () => import('./pages/sig-up/sig-up/sig-up-routing.module').then(m => m.SigUpRoutingModule),
    canDeactivate: [RegstrationDeactiveGuard]
  },
  {
    path: "**",
    component: SigInComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard, RegstrationDeactiveGuard]
})
export class AppRoutingModule {
}
