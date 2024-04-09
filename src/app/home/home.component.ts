import { Component, OnInit } from '@angular/core';
import {AccountsService} from "../services/accounts.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  numberOfAccounts: number = 0;

  constructor(private accountsService: AccountsService) { }

  ngOnInit(): void {
   // this.getNumberOfAccounts();
  }


}
