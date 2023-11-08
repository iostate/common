import { Subjects } from './subjects';

export interface OrderCancelledEvent {
  subject: Subjects.OrderCancelled;
  data: {
    id: string;
    userId: string; // TODO: use this in future to send emails that order was cancelled
    ticket: {
      id: string;
      price: number; // TODO: use to send email about cancelled order
    };
  };
}
