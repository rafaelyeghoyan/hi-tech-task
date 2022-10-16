import {Component, OnInit, ViewChild} from '@angular/core';
import {IDropdownSettings} from "ng-multiselect-dropdown";
import {FormBuilder, Validators} from "@angular/forms";
import {RequestService} from "../../shared/services/request.service";
import {TranslateService} from "../../shared/services/translate.service";
import {BehaviorSubjects} from "../../shared/services/behavior-subjects.service";
import {RegstrationDeactiveGuard} from "../../shared/Guard/regstration-deactive.guard";
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sig-up',
  templateUrl: './sig-up.component.html',
  styleUrls: ['./sig-up.component.scss'],
  providers: [RegstrationDeactiveGuard]
})
export class SigUpComponent implements OnInit {

  public user_region_list = [
    {item_id: 1, item_text: 'Lorem ipsum'},
    {item_id: 2, item_text: 'Lorem ipsum'},
    {item_id: 3, item_text: 'Lorem ipsum'},
    {item_id: 4, item_text: 'Lorem ipsum'},
    {item_id: 5, item_text: 'Lorem ipsum'},
    {item_id: 6, item_text: 'Lorem ipsum'},
    {item_id: 7, item_text: 'Lorem ipsum'},
    {item_id: 8, item_text: 'Lorem ipsum'},
    {item_id: 9, item_text: 'cLorem ipsum'},
    {item_id: 10, item_text: 'Lorem ipsum'},
    {item_id: 11, item_text: 'Lorem ipsum'}

  ];
  public selected_user_region = [];
  public user_region_dropdownSettings: IDropdownSettings = {
    singleSelection: false,
    idField: 'item_id',
    textField: 'item_text',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 3,
    allowSearchFilter: false
  };
  public user_city_list = [
    {item_id: 1, item_text: 'city 1'},
    {item_id: 2, item_text: 'city 2'},
    {item_id: 3, item_text: 'city 3'},
    {item_id: 4, item_text: 'city 4'},
    {item_id: 5, item_text: 'city 5'},
    {item_id: 6, item_text: 'city 6'},
    {item_id: 7, item_text: 'city 7'},
    {item_id: 8, item_text: 'city 8'},
    {item_id: 9, item_text: 'city 9'},
    {item_id: 10, item_text: 'city 10'},
    {item_id: 11, item_text: 'city 11'}

  ];
  public selected_user_city = [];
  public user_city_dropdownSettings: IDropdownSettings = {
    singleSelection: false,
    idField: 'item_id',
    textField: 'item_text',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 3,
    allowSearchFilter: true
  };
  public user_school_list = [
    {item_id: 1, item_text: 'school 1'},
    {item_id: 2, item_text: 'school 2'},
    {item_id: 3, item_text: 'school 3'},
    {item_id: 4, item_text: 'school 4'},
    {item_id: 5, item_text: 'school 5'},
    {item_id: 6, item_text: 'school 6'},
    {item_id: 7, item_text: 'school 7'},
    {item_id: 8, item_text: 'school 8'},
    {item_id: 9, item_text: 'school 9'},
    {item_id: 10, item_text: 'school 10'},
    {item_id: 11, item_text: 'school 11'}


  ];
  public selected_user_school = [];
  public user_school_dropdownSettings: IDropdownSettings = {
    singleSelection: false,
    idField: 'item_id',
    textField: 'item_text',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 3,
    allowSearchFilter: true
  };
  public user_subject_list = [
    {item_id: 1, item_text: 'subject 1'},
    {item_id: 2, item_text: 'subject 2'},
    {item_id: 3, item_text: 'subject 3'},
    {item_id: 4, item_text: 'subject 4'},
    {item_id: 5, item_text: 'subject 5'},
    {item_id: 6, item_text: 'subject 6'},
    {item_id: 7, item_text: 'subject 7'},
    {item_id: 8, item_text: 'subject 8'},
    {item_id: 9, item_text: 'subject 9'},
    {item_id: 10, item_text: 'subject 10'},
    {item_id: 11, item_text: 'subject 11'}


  ];
  public selected_user_subject = [];
  public user_subject_dropdownSettings: IDropdownSettings = {
    singleSelection: false,
    idField: 'item_id',
    textField: 'item_text',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 3,
    allowSearchFilter: true
  };
  public user_grade_list = [
    {item_id: 1, item_text: ' 1'},
    {item_id: 2, item_text: ' 2'},
    {item_id: 3, item_text: ' 3'},
    {item_id: 4, item_text: ' 4'},
    {item_id: 5, item_text: ' 5'}
  ];
  public user_grade_dropdownSettings: IDropdownSettings = {
    singleSelection: true,
    idField: 'item_id',
    textField: 'item_text',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    allowSearchFilter: true
  };
  public registrationForm = this.fb.group({
    name: ['', Validators.compose([Validators.required,Validators.pattern(/^[A-Za-z]{1,}$/gi)])],
    lastName: ['',  Validators.compose([Validators.required,Validators.pattern(/^[A-Za-z]{1,}$/gi)])],
    telNumber: ['', Validators.compose([Validators.required, Validators.maxLength(8),Validators.pattern(/[^\-\.\-\_]$/)])],
    telCode:['',[Validators.required]],
    region: ['', Validators.required],
    city: ['', Validators.required],
    school: ['', Validators.required],
    subject: ['', Validators.required],
    grade: [''],
    email: ['', [Validators.email, Validators.pattern(/^[a-zA-Z0-9_\.\-]+\@[a-zA-Z0-9\-]+\.+[a-zA-Z0-9]{2,7}/gi), Validators.required]],
    password: ['', Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z0-9]{6,20}$/gi)])],
    confirm_password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
  })
  public pass: any;
  public password2: string = 'password';
  public show2: boolean = false;
  public password = 'password';
  public register: string = '';
  public show = false;
  public confirmPassword: boolean = true;
  public leaveRegistration :any = false;
  public verifyForm = this.fb.group({
    verify_code: ['', Validators.pattern(/^[0-9][^a-zA-Z]{6}/)]
  })
 public modalRef?: BsModalRef;
@ViewChild('template') template :any;
  constructor(private fb: FormBuilder,
              private service: RequestService,
              public translate: TranslateService,
              public subject: BehaviorSubjects,
              private modalService: BsModalService,
              private router:Router) { }

  ngOnInit(): void {
    this.subject.registAs.subscribe(item => this.register = item);
  }
  openModal() :void {
    this.modalRef = this.modalService.show(this.template, {class: 'modal-sm'});

  }
  confirm(leaveRegist?: boolean): boolean {
    this.leaveRegistration = leaveRegist;
    this.modalRef?.hide();
    return this.leaveRegistration;
  }
  onClick():void {
    if (this.password === 'password') {
      this.password = 'text';
      this.show = true;
    } else {
      this.password = 'password';
      this.show = false;
    }
  }

  onClick2():void {
    if (this.password2 === 'password') {
      this.password2 = 'text';
      this.show2 = true;
    } else {
      this.password2 = 'password';
      this.show2 = false;
    }
  }

  confirmpassword() :void{
    if(this.registrationForm.controls.password.value === this.registrationForm.controls.confirm_password.value) {
      this.confirmPassword = true;
    } else {
      this.confirmPassword = false;
    }
  }

  registNewUser() :void{
    this.confirmpassword()
    if(this.confirmPassword && this.registrationForm.valid){
      this.pass =  this.registrationForm.getRawValue().password;
      if(this.register == 'donor'){
        this.registrationForm.getRawValue().telNumber = this.registrationForm.getRawValue().telCode + '' + this.registrationForm.getRawValue().telNumber;
      }else{
      this.registrationForm.getRawValue().telNumber = '+374' + this.registrationForm.getRawValue().telNumber;
      }
      let data = {
        name:this.registrationForm.getRawValue().name,
        lastName:this.registrationForm.getRawValue().lastName,
        email:this.registrationForm.getRawValue().email,
        password:this.pass,
        telNumber:this.registrationForm.getRawValue().telNumber,
        region:this.registrationForm.getRawValue().region,
        city:this.registrationForm.getRawValue().region,
        school:this.registrationForm.getRawValue().school,
        subject:this.registrationForm.getRawValue().subject,
        grade:this.registrationForm.getRawValue().grade
      }
      this.service.setUser(data);
    }
  }
  comeBack() :void {
    this.router.navigateByUrl('')
  }

  canExit() : boolean{
    if(this.registrationForm.touched && this.registrationForm.dirty){
      this.openModal();
      return this.confirm();
    }
    return true;
  }
}
