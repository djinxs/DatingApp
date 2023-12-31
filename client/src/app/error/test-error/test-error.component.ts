import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-test-error',
  templateUrl: './test-error.component.html',
  styleUrls: ['./test-error.component.css']
})
export class TestErrorComponent {
  baseurl = 'https://localhost:5001/api/';
  validationErrors: string[] = [];


  constructor(private http: HttpClient) { }

  get404Error(): void {
    this.http.get(this.baseurl + 'buggy/not-found').subscribe({
      next: response => console.log(response),
      error: error => console.log(error),
    });
  }

  get400Error(): void {
    this.http.get(this.baseurl + 'buggy/bad-request').subscribe({
      next: response => console.log(response),
      error: error => console.log(error),
    });
  }

  get500Error(): void {
    this.http.get(this.baseurl + 'buggy/server-error').subscribe({
      next: response => console.log(response),
      error: error => console.log(error),
    });
  }

  get401Error(): void {
    this.http.get(this.baseurl + 'buggy/auth').subscribe({
      next: response => console.log(response),
      error: error => console.log(error),
    });
  }

  get400ValidationError(): void {
    this.http.post(this.baseurl + 'account/register', {}).subscribe({
      next: response => console.log(response),
      error: error => {
        console.log(error);
        this.validationErrors = error;
      }
    });
  }
}
