import { Component, OnInit } from '@angular/core';
import { FundService } from '../services/fund.service';
import { SubscribedFund } from '../models/subscribed-fund';

@Component({
  selector: 'app-unsubscribe',
  templateUrl: './unsubscribe.component.html',
  styleUrls: ['./unsubscribe.component.css']
})
export class UnsubscribeComponent implements OnInit {
  subscribedFunds: SubscribedFund[] = [];
  selectedFundId: number | null = null;
  message: string = '';

  constructor(private fundService: FundService) {}

  ngOnInit(): void {
    // Obtener lista de fondos a los que el cliente está suscrito
    this.fundService.getSubscribedFunds().subscribe(funds => {
      this.subscribedFunds = funds;
    });
  }

  unsubscribe(): void {
    if (this.selectedFundId) {
      this.fundService.unsubscribeFromFund(this.selectedFundId).subscribe({
        next: () => this.message = 'Successfully unsubscribed from the fund!',
        error: () => this.message = 'Failed to unsubscribe. Please try again.'
      });
    } else {
      this.message = 'Please select a fund to unsubscribe from.';
    }
  }
}
