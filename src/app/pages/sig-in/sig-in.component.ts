import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {RequestService} from "../../shared/services/request.service";
import {Router} from "@angular/router";
import {TranslateService} from "../../shared/services/translate.service";
import {BehaviorSubjects} from "../../shared/services/behavior-subjects.service";


@Component({
  selector: 'app-sig-in',
  templateUrl: './sig-in.component.html',
  styleUrls: ['./sig-in.component.scss']
})
export class SigInComponent implements OnInit {

  public isRecovedPassword: boolean = false;
  public password = 'password';
  public register:string = '';
  public show = false;
  public form = this.fb.group({
    email: ['', [Validators.email, Validators.pattern(/^[a-zA-Z0-9_\.\-]+\@[a-zA-Z0-9\-]+\.+[a-zA-Z0-9]{2,7}/), Validators.required]],
    password: ['', Validators.required]
  })

  constructor(private fb: FormBuilder,
              private service: RequestService,
              private sbj: BehaviorSubjects,
              private rout: Router,
              public translate: TranslateService) {
  }

  ngOnInit(): void {
    this.sbj.isRecoveredPassword.subscribe(item => this.isRecovedPassword = item);
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

  signIn() {
    this.service.getUsers().subscribe((res: any) => {
      let email = this.form.getRawValue().email;
      let pass = this.form.getRawValue().password;
      res.forEach((item: any) => {
        if ((email != item!.email) && (pass != item!.password)) {
          alert("Please write a correct email or password !");
        } else if ((email != item!.email) || (pass != item!.password)) {
          alert("Please write a correct email or password !");
        }
        if ((email == item!.email) && (pass == item!.password)) {
          this.rout.navigate([`user=${localStorage.getItem('auth_key')}`]);
          localStorage.setItem('auth_key', item.auth_key);
        }
      })
    })
  }

  registration(item: string){
      this.sbj.regist(item);
  }

}
