import { Component, } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  model: any = {};

  constructor(
    public accountService: AccountService,
  ) { }

  login(): void {
    this.accountService.login(this.model).subscribe({
      next: response => {
        console.log('Response ', response);
      },
      error: error => console.log('Login error', error)
    });
  }

  logout(): void {
    this.accountService.logout();
  }
}