import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticacionService } from './autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {

  constructor(private autenticacionServicio:AutenticacionService, private rutas:Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //let currentUser = this.autenticacionServicio.UsuarioAutenticado;
    //if (currentUser && currentUser.accessToken){
      return true;
    //}else{
    //  this.rutas.navigate(['/login']);
    //  return false;
    //}    
  }
  
}


//comenté todo el metodocanActivate debido a que no me funciona a la hora de conseguir el toquen
//voy a poner en marca el back end primrto y despues veo
