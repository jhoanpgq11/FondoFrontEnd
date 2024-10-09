import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';
import { Client } from '../models/client';
import { FundService } from '../services/fund.service';
import { Fund } from '../models/funds';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {
  client: Client | null = null; // Manejo del cliente
  funds: Fund[] = [];           // Fondos disponibles para suscribirse
  selectedFundId: number | null = null;
  amount: number = 0;
  message: string = '';

  constructor(private clientService: ClientService, private fundService: FundService) {}

  ngOnInit(): void {
    // Obtener información del cliente
    this.clientService.getClient().subscribe(client => {
      this.client = client;
    });

    // Obtener lista de fondos disponibles
    this.fundService.getFunds().subscribe(funds => {
      this.funds = funds;
    });
  }

  subscribe(): void {
    if (this.selectedFundId && this.amount > 0) {
      // Verifica si el cliente tiene saldo suficiente
      if (this.client && this.client.balance >= this.amount) {
        this.fundService.subscribeToFund(this.selectedFundId, this.amount).subscribe({
          next: () => this.message = 'Successfully subscribed to the fund!',
          error: () => this.message = 'Subscription failed. Please try again.'
        });
      } else {
        this.message = `No tiene saldo disponible para vincularse al fondo seleccionado.`;
      }
    } else {
      this.message = 'Please select a fund and enter a valid amount.';
    }
  }
}
