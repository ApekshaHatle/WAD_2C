import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  template: `
    <h2>Login</h2>
    <form (ngSubmit)="login()">
      <input [(ngModel)]="email" name="email" placeholder="Email" required><br>
      <input [(ngModel)]="password" name="password" type="password" placeholder="Password" required><br>
      <button type="submit">Login</button>
    </form>
    <p>{{ msg }}</p>
  `
})
export class LoginComponent {
  email = '';
  password = '';
  msg = '';

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    const ok = this.auth.login(this.email, this.password);
    if (ok) this.router.navigate(['/profile']);
    else this.msg = '❌ Invalid email or password';
  }
}
