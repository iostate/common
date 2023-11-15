// import { Listener, Subjects } from '@sgtickets3/common'
import { OrderStatus } from './types/order-status';
import { Subjects } from './subjects';

export interface OrderCreatedEvent {
  subject: Subjects.OrderCreated;
  data: {
    id: string;
    userId: string;
    version: number;
    // could be used in future
    status: OrderStatus;
    // actually a DATE in OrderDoc but represented as a string
    expiresAt: string;
    ticket: {
      id: string;
      price: number;
    };
  };
}
