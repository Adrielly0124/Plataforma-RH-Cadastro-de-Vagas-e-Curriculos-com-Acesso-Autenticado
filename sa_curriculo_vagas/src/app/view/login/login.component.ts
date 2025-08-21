import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  userRole?: string;
  loginError?: string;
  email = '';
  password = '';

  onLogin() {}
}
