import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-profile',
  imports: [CommonModule],
  template: `
    <h2>Profile</h2>
    <div *ngIf="user; else loginMsg">
      <p><strong>Name:</strong> {{ user.name }}</p>
      <p><strong>Email:</strong> {{ user.email }}</p>
    </div>

    <ng-template #loginMsg>
      <p>❌ Please login first</p>
    </ng-template>
  `
})
export class ProfileComponent {
  user: any;

  constructor(private auth: AuthService) {
    this.user = this.auth.getUser();
  }
}
