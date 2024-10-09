import { Component } from '@angular/core';
import { FundService } from '../services/fund.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent {
  type: 'email' | 'sms' = 'email';
  message: string = '';

  constructor(private fundService: FundService) {}

  sendNotification(): void {
    this.fundService.sendNotification(this.type, 'You have subscribed to a new fund.').subscribe({
      next: () => this.message = 'Notification sent successfully!',
      error: () => this.message = 'Failed to send notification.'
    });
  }
}

