import { Injectable } from '@angular/core';
import {Observable, tap} from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {TokenDto} from "../model/auth";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public auth : boolean = false;
  private baseUrl = 'http://localhost:2001/api/v1/ramadan/user';

  constructor(private http: HttpClient) { }

  login(loginDto: any): Observable<TokenDto> {
    return this.http.post<TokenDto>(`${this.baseUrl}/login`, loginDto).pipe(
      tap((token: TokenDto) => {
        this.auth =true ;
        localStorage.setItem('accessToken', token.accessToken);
      })
    );
}
  isAuthenticated(): boolean {
    const accessToken = localStorage.getItem('accessToken');
    return !!accessToken;
  }
  Authenticated( login : boolean): boolean {
    return login;
  }
  logout(refreshToken: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/logout`, null, { params: { refreshToken } });
  }

  refreshAccessToken(refreshToken: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/refresh-token`, null, { params: { refreshToken } });
  }

  getUserInfo(): Observable<any> {
    return this.http.get(`${this.baseUrl}/info`);
  }

  addUserToKeycloak(keycloakUser: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/users`, keycloakUser);
  }

  updateUser(id: string, userUpdateDto: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/user/${id}/update`, userUpdateDto);
  }

  verifyEmail(id: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/email-verifie`, null, { params: { id } });
  }

  resetPassword(passwordInfo: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/reset-password`, passwordInfo);
  }

  signup(userSignup: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/signup`, userSignup);
  }
}
