export interface Transaction {
  id: number;
  fundId: number;
  clientId: number;
  amount: number;
  date: string;
  type: 'subscribe' | 'unsubscribe';
}