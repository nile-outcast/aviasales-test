import { useEffect, useState } from "react";
import TicketSort from '../../components/TicketSort';
import TicketList from "../../components/TicketList";
import { Data } from "../../interfaces/List";
import { Loading, Result } from "../../styles/ticketSearch";
import { getTickets, numberToString } from "../../utils/functions";

export default function TicketSearch(): JSX.Element {

  const [{ tickets, isLoading }, setData] = useState<Data>({
    tickets: [],
    isLoading: true,
  });

  const [className, setClassName] = useState<string>('');

  useEffect(() => {
    getTickets(setData);
    setClassName(() => 'visible');
    setTimeout(() => setClassName(() => ''), 5000);
  }, []);

  return (
    <TicketSort>
      {(isLoading) ?
        <Loading>L O A D I N G . . .</Loading> :
        <>
          <Result className={className}>
            Всего найдено {numberToString(tickets.length)} билетов
          </Result>
          <TicketList tickets={tickets} />
        </>
      }
    </TicketSort>
  );
}


