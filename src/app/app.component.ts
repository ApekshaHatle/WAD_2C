import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <h1>Simple App</h1>
    <nav>
      <a routerLink="/register">Register</a> |
      <a routerLink="/login">Login</a> |
      <a routerLink="/profile">Profile</a>
    </nav>
    <hr>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {}
