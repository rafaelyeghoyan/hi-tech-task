import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {RequestService} from "../../shared/services/request.service";
import {BehaviorSubjects} from "../../shared/services/behavior-subjects.service";
import {TranslateService} from "../../shared/services/translate.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.scss']
})
export class RecoverPasswordComponent implements OnInit {

  password: string = 'password';
  password2: string = 'password';
  show: boolean = false;
  show2: boolean = false;
  CodeError: boolean = false;
  enterCodeAndRecoverPassword: boolean = false;
  resetPassword: boolean = false;
  confirmPassword: boolean = true;
  form = this.fb.group({
    email: ['', [Validators.email, Validators.pattern(/^[a-zA-Z0-9_\.\-]+\@[a-zA-Z0-9\-]+\.+[a-zA-Z0-9]{2,7}$/),
      Validators.required]],
  })
  form2 = this.fb.group({
    recoverCode: ['', [Validators.required, Validators.pattern(/[^a-zA-Z]^[0-9]{4,8}$/)]],
    password: ['', Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z0-9]{6,20}$/gi)])],
    confirm_password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
  })

  constructor(private fb: FormBuilder,
              private subjects: BehaviorSubjects,
              public translate: TranslateService,
              public router:Router,
              public request : RequestService) {
  }

  ngOnInit(): void {
  }

  isRecovedPassword(item: boolean) {
    this.subjects.isRecovered(item)
  }


  onClick() {
    if (this.password === 'password') {
      this.password = 'text';
      this.show = true;
    } else {
      this.password = 'password';
      this.show = false;
    }
  }

  onClick2() {
    if (this.password2 === 'password') {
      this.password2 = 'text';
      this.show2 = true;
    } else {
      this.password2 = 'password';
      this.show2 = false;
    }
  }

  confirmpassword() {
    if ((this.form2.getRawValue().password == this.form2.getRawValue().confirm_password) && this.CodeError) {
      this.confirmPassword = true;
      this.resetPassword = false;
      this.isRecovedPassword(true);
      this.router.navigate(['']);
    }
    if((this.form2.getRawValue().password != this.form2.getRawValue().confirm_password) || this.CodeError == false){
      this.confirmPassword = false;
      this.resetPassword = false;
    }
  }

  userIsAuth(){
    this.request.getUsers().subscribe((res:any)=>{
      res.forEach((item:any)=>{
        if(item.email == this.form.getRawValue().email){
          this.enterCodeAndRecoverPassword = true;
        }else{
          alert('the email is not a registered please try again')
        }
      })
    })
  }

  codeEnter(item: any) {
    if (item.value != "071221") {
      this.CodeError = true;
    } else {
      this.CodeError = false
    }
  }

}
