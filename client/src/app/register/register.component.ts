import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { AbstractControl, FormBuilder, FormControl, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister: EventEmitter<boolean> = new EventEmitter<boolean>;
  registerForm = this.initializeForm();
  maxDate: Date = new Date();
  validationErrors: string[] | undefined;

  constructor(
    private accountService: AccountService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
    this.registerForm.controls.password.valueChanges.subscribe({
      next: () => this.registerForm.controls.confirmPassword.updateValueAndValidity()
    });
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
  }

  initializeForm() {
    return this.formBuilder.group({
      gender: new FormControl<string>('male'),
      username: new FormControl<string | null>(null, Validators.required),
      knownAs: new FormControl<string | null>(null, Validators.required),
      dateOfBirth: new FormControl<string | null>(null, Validators.required),
      city: new FormControl<string | null>(null, Validators.required),
      country: new FormControl<string | null>(null, Validators.required),
      password: new FormControl<string | null>(null,
        [Validators.required,
        Validators.minLength(4),
        Validators.maxLength(8)]),
      confirmPassword: new FormControl<string | null>(null, [Validators.required, this.matchValues('password')]),
    });
  }

  matchValues(matchTo: string): ValidatorFn {
    return (control: AbstractControl) => {
      return control.value === control.parent?.get(matchTo)?.value ? null : { notMatching: true }
    }

  }

  register() {
    const dobElement = this.registerForm.controls.dateOfBirth.value;
    const dob = this.getDateOnly(dobElement);
    const values = { ...this.registerForm.value, dateOfBirth: dob };
    this.accountService.register(values).subscribe({
      next: () => this.router.navigateByUrl('/members'),
      error: error => {
        this.validationErrors = error;
      }
    });
  }

  cancel() {
    this.cancelRegister.emit(false);
  }

  private getDateOnly(dob: string | null) {
    if (!dob) return;
    let theDob = new Date(dob);
    return new Date(theDob.setMinutes(theDob.getMinutes() - theDob.getTimezoneOffset()))
      .toISOString().slice(0, 10);
  }
}
