import { AuthenticationService } from './../services/authentication.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  error = ''

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      pass: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  sendForm() {
    // console.log(this.loginForm);

    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;

    this.authenticationService
      .login(
        this.loginForm.controls['email'].value,
        this.loginForm.controls['pass'].value
      )
      .pipe(first())
      .subscribe(
        (data) => {
          this.router.navigate(['/admin']);
        },
        (error) => {
          this.error = error;
          this.loading = false;
        }

      );
  }
}
