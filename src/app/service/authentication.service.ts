import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

export class JwtResponse{
  constructor(public jwttoken:string) {} 
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) { }

  authenticate(username, password){
    return this.http.post<any>('http://localhost:8080/autenticar', {username,password}).pipe(
      map(
        dadosUsuario => {
        sessionStorage.setItem('username', username);
        let tokenString = 'Bearer '+ dadosUsuario.token;
        sessionStorage.setItem('token', tokenString); //Salvamos o token na sessão
        return dadosUsuario;
      })
    );
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('username');
    return !(user === null);
  }

  logOut(){
    sessionStorage.removeItem('username');
  }
}
