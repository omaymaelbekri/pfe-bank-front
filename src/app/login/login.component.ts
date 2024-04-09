import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {LoginDto} from "../model/auth";
import {AuthService} from "../services/auth.service";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData: LoginDto = { username: '', password: '' };

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit(): void {
    this.authService.login(this.loginData).subscribe(
      token => {
        console.log('Login successful:', token);
        this.router.navigate(['/dashBord']);
      },
      error => {
        console.error('Login error:', error);
      }
    );
  }
}
