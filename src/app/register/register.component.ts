import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-register',
  imports: [CommonModule, FormsModule],
  template: `
    <h2>Register</h2>
    <form (ngSubmit)="register()">
      <input [(ngModel)]="user.name" name="name" placeholder="Name" required><br>
      <input [(ngModel)]="user.email" name="email" placeholder="Email" required><br>
      <input [(ngModel)]="user.password" name="password" type="password" placeholder="Password" required><br>
      <button type="submit">Register</button>
    </form>
    <p>{{ msg }}</p>
  `
})
export class RegisterComponent {
  user = { name: '', email: '', password: '' };
  msg = '';

  constructor(private auth: AuthService) {}

  register() {
    const ok = this.auth.register(this.user);
    this.msg = ok ? '✅ Registered!' : '❌ Email already exists';
  }
}
