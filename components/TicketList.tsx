import { useRouter } from 'next/router';
import { useContext, useMemo } from "react";
import { TicketTemplate } from './TicketTemplate';
import { Button } from "../components/tickeList";
import { FilterContext, ButtonContext } from "../utils/Context";
import { getSortTickets } from "../utils/functions";
import { Ticket } from '../interfaces/Ticket';

type Props = {
  tickets: Ticket[];
};

export function TicketList({ tickets }: Props): JSX.Element {

  const filter = useContext(FilterContext);
  const filterValues = useMemo(() => Object.values(filter), [filter]);

  const [ticketsCount, setTicketsCount] = useContext(ButtonContext);

  function handlerOnClickButton(): void {
    setTicketsCount((prev: number) => prev + 5);
  }

  const router = useRouter();
  const path = router.query.id as string;

  const sortTickets: Ticket[] = useMemo(() => {
    const sortedTickets = getSortTickets(path, tickets);
    const result = [];
    let counter = 0;

    sortedTickets.forEach((ticket) => {
      if (counter >= ticketsCount) {
        return;
      }

      if (!filterValues.includes(true)) {
        result.push(ticket);
        return counter += 1;
      }

      const [firstSegment, secondSegment] = ticket.segments;
      const hasFirstSegmentFilter = filterValues[firstSegment.stops.length];
      const hasSecondSegmentFilter = filterValues[secondSegment.stops.length];

      if (hasFirstSegmentFilter && hasSecondSegmentFilter) {
        result.push(ticket);
        return counter += 1;
      }
    });

    return result;

  }, [path, tickets, filterValues, ticketsCount]);

  return <>
    {sortTickets.map((ticket, index) => {
      return (
        <TicketTemplate
          key={`${index}-${ticket.carrier}-${ticket.price}`}
          ticket={ticket}
        />
      );
    })}
    <Button onClick={handlerOnClickButton}>
      ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ
    </Button>
  </>;
}