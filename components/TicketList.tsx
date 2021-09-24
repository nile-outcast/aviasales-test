import { useRouter } from 'next/router';
import { useState } from "react";
import { sortTickets } from "../utils/functions";
import { TicketTable, TicketRow, TicketCellHead, Button } from "../styles/tickeList";
import { Ticket } from '../interfaces/Ticket';
import TicketDetails from './TicketDetails';

type Props = {
  tickets: Ticket[];
};

type Sort = {
  sortTickets: Ticket[];
};

export default function TicketList({ tickets }: Props): JSX.Element {
  //const [sortTickets, setSortTickets] = useState<Sort>();

  const [{ ticketsCount, routerPath }, setTicketsCount] = useState({
    ticketsCount: 5,
    routerPath: 'cheap',

  });

  const router = useRouter();
  const path = router.query.id as string;
  sortTickets(path, tickets);

  /*
    if (path === 'cheap') {
      tickets.sort((a: Ticket, b: Ticket) => a.price - b.price);
    }
  
    if (path === 'fast') {
      tickets.sort((a: Ticket, b: Ticket) => (a.segments[0].duration + a.segments[1].duration) - (b.segments[0].duration + b.segments[1].duration));
    }
  
    if (path === 'optimal') {
      tickets.sort((a: Ticket, b: Ticket) => (a.price + a.segments[0].duration + a.segments[1].duration) - (b.price + b.segments[0].duration + b.segments[1].duration));
    }
  */
  const handlerOnClickButton = () => {
    if (path == routerPath) {
      setTicketsCount(prev => ({
        ticketsCount: prev.ticketsCount + 5,
        routerPath: prev.routerPath,
      }));
    } else {
      setTicketsCount(() => ({
        ticketsCount: 5,
        routerPath: path,
      }));
    }
  };

  /*  setSortTickets(() => ({
      sortTickets: sortTickets
    }));
  }
*/
  const first = tickets[0];

  return <>
    <TicketTable>
      <TicketRow>
        <TicketCellHead>{first.price} P</TicketCellHead>
        <TicketCellHead></TicketCellHead>
      </TicketRow>
      <TicketDetails segments={first.segments[0]} />
      <TicketDetails segments={first.segments[1]} />
    </TicketTable>
    <Button onClick={handlerOnClickButton}>ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ</Button>
  </>;
}