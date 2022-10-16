import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class BehaviorSubjects {
  isRecoveredPassword = new BehaviorSubject(false)
  registAs = new BehaviorSubject('teacher')

  constructor() { }

  isRecovered(item:boolean){
    this.isRecoveredPassword.next(item)
  }
  regist(item:string){
    this.registAs.next(item)
  }

}
