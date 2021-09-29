import { useEffect, useState } from "react";
import { TicketSort } from '../../components/SortContainer';
import { TicketList } from "../../components/TicketList";
import { Loading, Result } from "../../components/ticketSearch";
import { getTickets, numberToString } from "../../utils/functions";
import { Ticket } from "../../interfaces/Ticket";

export default function TicketSearch(): JSX.Element {
  const [tickets, setData] = useState<Ticket[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    getTickets()
      .then((gotTickets) => {
        setData(() => gotTickets);
        setIsLoading(() => false);
        setIsVisible(() => true);
        setTimeout(() => setIsVisible(() => false), 5000);
      });
  }, []);

  return (
    <TicketSort>
      {(isLoading) ?
        <Loading>L O A D I N G . . .</Loading> :
        <>
          {isVisible && (
            <Result>
              Всего найдено {numberToString(tickets.length)} билетов
            </Result>
          )}
          <TicketList tickets={tickets} />
        </>
      }
    </TicketSort>
  );
}