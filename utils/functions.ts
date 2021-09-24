import { Ticket } from '../interfaces/Ticket';

export function sortTickets(path: string, tickets: Ticket[]): Ticket[] {
  if (path === 'cheap') {
    return tickets.sort((a: Ticket, b: Ticket) =>
      a.price - b.price);
  }

  if (path === 'fast') {
    return tickets.sort((a: Ticket, b: Ticket) =>
      (a.segments[0].duration + a.segments[1].duration) - (b.segments[0].duration + b.segments[1].duration));
  }

  if (path === 'optimal') {
    return tickets.sort((a: Ticket, b: Ticket) =>
      (a.price + a.segments[0].duration + a.segments[1].duration) - (b.price + b.segments[0].duration + b.segments[1].duration));
  }
}