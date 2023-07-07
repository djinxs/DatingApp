import { Component, } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  model: any = {};

  constructor(
    public accountService: AccountService,
    private router: Router,
    private toastrService: ToastrService,
  ) { }

  login(): void {
    this.accountService.login(this.model).subscribe({
      next: () => this.router.navigateByUrl('/members'),
      error: error => {
        console.log('Login error', error)
        this.toastrService.error(error.error);
      }
    });
  }

  logout(): void {
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }
}
