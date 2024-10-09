import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { UnsubscribeComponent } from './unsubscribe/unsubscribe.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { NotificationsComponent } from './notifications/notifications.component';

@NgModule({
  declarations: [
    AppComponent,
    SubscribeComponent,
    UnsubscribeComponent,
    TransactionsComponent,
    NotificationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
