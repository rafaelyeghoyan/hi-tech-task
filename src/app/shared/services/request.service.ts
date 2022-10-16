import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  public  auth_key:string = '';
  public  API_URL = environment.API_URL;
  public header = new HttpHeaders({
    "Content-type":"application/json"
  })

  constructor(public request:HttpClient) { }

  getUsers() :Observable<object>{
    return this.request.get(`${this.API_URL}/user`)
  }
  setUser(body:any) :Observable<object>{
    return this.request.post(`${this.API_URL}/user`,JSON.stringify(body),{headers:this.header})
  }
}
