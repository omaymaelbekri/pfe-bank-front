import { Component, OnInit } from '@angular/core';
import {AccountsService} from "../services/accounts.service";
import {AppComponent} from "../app.component";
import {NavbarComponent} from "../navbar/navbar.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  constructor() {}
}
