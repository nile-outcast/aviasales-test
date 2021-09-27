import { useRouter } from 'next/router';
import { useContext, useMemo } from "react";
import TicketTemplate from './TicketTemplate';
import { Button } from "../styles/tickeList";
import { filterContext, buttonContext } from "../utils/Context";
import { getSortTickets } from "../utils/functions";
import { Ticket } from '../interfaces/Ticket';

type Props = {
  tickets: Ticket[];
};

export default function TicketList({ tickets }: Props): JSX.Element {

  const filter = useContext(filterContext);
  const filterValues = useMemo(() => Object.values(filter), [filter]);

  const router = useRouter();
  const path = router.query.id as string;
  const sortTickets: Ticket[] = useMemo(() => getSortTickets(path, tickets), [path, tickets]);

  const [ticketsCount, setTicketsCount] = useContext(buttonContext);

  function handlerOnClickButton(): void {
    setTicketsCount((prev: number) => prev + 5);
  }

  return <>
    {sortTickets.reduce((obj, ticket, index) => {
      if (obj.added < ticketsCount) {
        if (!filterValues.includes(true)) {
          obj.selectedTickets.push(
            < TicketTemplate
              key={index}
              ticket={ticket}
            />
          );
          obj.added += 1;
        } else if (filterValues[ticket.segments[0].stops.length] && filterValues[ticket.segments[1].stops.length]) {
          obj.selectedTickets.push(
            <TicketTemplate
              key={index}
              ticket={ticket}
            />
          );
          obj.added += 1;
        }
      }
      return obj;
    }, { added: 0, selectedTickets: [] }).selectedTickets}
    <Button onClick={handlerOnClickButton}>ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ</Button>
  </>;
}