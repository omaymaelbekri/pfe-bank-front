import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomersComponent} from "./customers/customers.component";
import {AccountsComponent} from "./accounts/accounts.component";
import {NewCustomerComponent} from "./new-customer/new-customer.component";
import {CustomerAccountsComponent} from "./customer-accounts/customer-accounts.component";
import {HomeComponent} from "./home/home.component";
import {AuthGuard} from "./services/auth-guard.service";
import {LoginComponent} from "./login/login.component";


const routes: Routes = [
  { path :"customers", component : CustomersComponent, canActivate: [AuthGuard]},
  { path :"accounts", component : AccountsComponent, canActivate: [AuthGuard]},
  { path :"new-customer", component : NewCustomerComponent, canActivate: [AuthGuard]},
  { path :"customer-accounts/:id", component : CustomerAccountsComponent, canActivate: [AuthGuard]},
  { path :"login", component : LoginComponent},
  { path: '', redirectTo: '/dashBord', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
