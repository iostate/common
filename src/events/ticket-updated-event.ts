import { Subjects } from './subjects';

export interface TicketUpdatedEvent {
  subject: Subjects.TicketUpdated;
  data: {
    id: string;
    orderId: string;
    version: number;
    title: string;
    price: number;
    userId: string;
  };
}
