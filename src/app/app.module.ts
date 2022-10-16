import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {SigInComponent} from './pages/sig-in/sig-in.component';
import {RecoverPasswordComponent} from './pages/recover-password/recover-password.component';
import {HomeComponent} from './pages/home/home.component';
import {AuthGuard} from "./shared/Guard/auth.guard";
import {NgMultiSelectDropDownModule} from "ng-multiselect-dropdown";
import {MatStepperModule} from '@angular/material/stepper';
import {TeacherComponent} from './pages/teacher/teacher.component';
import {DonorComponent} from './pages/donor/donor.component';
import {AboutUsComponent} from './pages/about-us/about-us.component';
import {ContactUsComponent} from './pages/contact-us/contact-us.component';
import {BlogComponent} from './pages/blog/blog.component';
import {MatMenuModule} from "@angular/material/menu";
import {MatDialogModule} from "@angular/material/dialog";
import {SigUpComponent} from './pages/sig-up/sig-up.component';
import {ModalModule} from "ngx-bootstrap/modal";
import {RegstrationDeactiveGuard} from "./shared/Guard/regstration-deactive.guard";
import {MatListModule} from "@angular/material/list";
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { BottomSheetMenuComponent } from './pages/bottom-sheet-menu/bottom-sheet-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SigInComponent,
    RecoverPasswordComponent,
    HomeComponent,
    TeacherComponent,
    DonorComponent,
    AboutUsComponent,
    ContactUsComponent,
    BlogComponent,
    SigUpComponent,
    BottomSheetMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    NgMultiSelectDropDownModule.forRoot(),
    MatStepperModule,
    MatMenuModule,
    MatDialogModule,
    ModalModule.forRoot(),
    MatListModule,
    MatBottomSheetModule
  ],
  providers: [ AuthGuard , RegstrationDeactiveGuard],
  bootstrap: [AppComponent]
})

export class AppModule {
}
