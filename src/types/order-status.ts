export enum OrderStatus {
  // When the ticket is created but when the ticket it is trying to order
  // has not been reserved
  Created = 'created',

  Cancelled = 'cancelled',
  AwaitingPayment = 'awaiting:payment',
  Complete = 'complete',
}
