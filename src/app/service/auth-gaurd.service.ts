import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate{

  constructor(private router: Router, private authService: AuthenticationService) { }

  //Responsável por proteger as rotas quando o usuário não está logado
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
      if(this.authService.isUserLoggedIn())
        return true;

      this.router.navigate(['/']) //se o usuário tentar acessar uma página sem estar logado, ele será redirecionado para a página de login
      return false;
    }
}
