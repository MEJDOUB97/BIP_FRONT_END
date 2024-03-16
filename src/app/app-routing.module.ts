import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TransactionComponent } from './transaction/transaction.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { RecipientChoiceComponent } from './recipient-choice/recipient-choice.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: SidenavComponent,
    children: [
      { path: 'send-transaction', component: TransactionComponent }
    ] },
  { path: 'choice-recipient', component: RecipientChoiceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
