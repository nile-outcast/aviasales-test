import { useRouter } from 'next/router';
import { useEffect, useState, ReactNode } from "react";
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
  const router = useRouter();

  if (router.query.id === 'cheap') {
    tickets.sort((a: Ticket, b: Ticket) => a.price - b.price);
  }
  /*  setSortTickets(() => ({
      sortTickets: sortTickets
    }));
  }
*/

  return <>
    <TicketTable>
      <tbody>
        <TicketRow>
          <TicketCellHead></TicketCellHead>
          <TicketCellHead></TicketCellHead>
        </TicketRow>
        <TicketDetails />
      </tbody>
    </TicketTable>
    <Button>ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ</Button>
  </>;
}