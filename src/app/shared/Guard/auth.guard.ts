import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {RequestService} from "../services/request.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private request:RequestService) {
  }
  isAuthUser() : boolean{
   let user =  localStorage.getItem('auth_key');
   let auth = false;
   this.request.getUsers().subscribe((res:any)=>{
     res.forEach((item:any) => {
       if(user == item.auth_key){
         auth = true;
       }
     })

   })
    return auth;
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.isAuthUser()){
      return false;
    }
    return true;

  }

}
