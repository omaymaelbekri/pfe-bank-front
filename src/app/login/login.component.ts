import {Component, Injectable, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {LoginDto} from "../model/auth";
import {AuthService} from "../services/auth.service";
import {NavbarComponent} from "../navbar/navbar.component";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
@Injectable()
export class LoginComponent {
  loginData: LoginDto = { username: '', password: '' };

  constructor(private authService: AuthService,private router: Router) { }

  onSubmit(): void {
    this.authService.login(this.loginData).subscribe(
      token => {
        console.log('Login successful:', token);
        this.router.navigate(['/home']);
      },
      error => {
        console.error('Login error:', error);
      }
    );
  }
}
