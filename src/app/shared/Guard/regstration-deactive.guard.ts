import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {SigUpComponent} from "../../pages/sig-up/sig-up.component";


@Injectable({
  providedIn: 'root'
})
export class RegstrationDeactiveGuard implements CanDeactivate<SigUpComponent> {
  canDeactivate(
    component: SigUpComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return component.canExit();
  }

}
