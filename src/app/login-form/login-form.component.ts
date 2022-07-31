import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private authServ: LoginService
  ) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {}

  get Email() {
    return this.form.get('email');
  }

  get Password() {
    return this.form.get('password');
  }

  onSend(event: Event) {
    event.preventDefault;
    if (
      this.form.value.email === 'ADMIN' &&
      this.form.value.email === 'ADMIN'
    ) {
      this.authServ.login(true);
      console.log('authServ.auth', this.authServ.auth);
      this.route.navigate(['/portfolio']);
    }
  }
}
