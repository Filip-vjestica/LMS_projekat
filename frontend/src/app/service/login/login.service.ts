import { Injectable } from '@angular/core';
import { TokenUtilsService } from '../token-utils/token-utils.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { RegUser } from 'src/app/model/registrovani-korisnik/registrovani-korisnik';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private logedUser;
  private token= "eyJzdWIiOiJNaWxhblZhc292aWM4IiwiY3JlYXRlZCI6MTU5OTIzOTE5MDg2Niwicm9sZXMiOlt7ImF1dGhvcml0eSI6IlJPTEVfQURNSU4ifV0sImV4cCI6MTU5OTI0NjM5MH0";
  constructor(private tokenUtils: TokenUtilsService, private http: HttpClient) {
   }

   getLoggedInUser() {
      this.token = localStorage.getItem("token");
      try {
        this.logedUser = this.tokenUtils.parseToken(this.token);
      } catch (error) {
        
      } 
      return this.logedUser;
   }

   getToken(){
     return this.token;
   }

   login(regUser: RegUser): Observable<Token> {
    return this.http.post<Token>(`http://localhost:8080/api/login`, regUser);
  }
}
