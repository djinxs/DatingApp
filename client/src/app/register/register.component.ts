import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  @Output() cancelRegister: EventEmitter<boolean> = new EventEmitter<boolean>;
  model: any = {}

  constructor(
    private accountService: AccountService,
    private toastrService: ToastrService,
  ) { }

  register() {
    this.accountService.register(this.model).subscribe({
      next: () => this.cancel(),
      error: error => {
        console.log('Register error', error)
        this.toastrService.error(error.error);
      }
    })
  }

  cancel() {
    this.cancelRegister.emit(false);
  }
}
