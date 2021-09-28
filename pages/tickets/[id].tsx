import { useEffect, useState } from "react";
import { TicketSort } from '../../components/SortContainer';
import { TicketList } from "../../components/TicketList";
import { Data } from "../../interfaces/List";
import { Loading, Result } from "../../components/ticketSearch";
import { getTickets, numberToString } from "../../utils/functions";

export default function TicketSearch(): JSX.Element {

  const [{ tickets, isLoading }, setData] = useState<Data>({
    tickets: [],
    isLoading: true,
  });

  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    getTickets(setData);
    setIsVisible(() => true);
    setTimeout(() => setIsVisible(() => false), 5000);
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