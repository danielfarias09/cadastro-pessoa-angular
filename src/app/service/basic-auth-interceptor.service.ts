import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
//Serviço que intercepta as requisições HTTP checa se a sessão tem usuário e token válidos, 
//se for válido, será atualizado o header de todas as requisições realizadas
//Deve ser registrado no app.module
export class BasicAuthInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler){
    if(sessionStorage.getItem('username') && sessionStorage.getItem('token')){
      req = req.clone({
        setHeaders: {
          Authorization: sessionStorage.getItem('token')
        }
      })
    }
    return next.handle(req);
  }
}
