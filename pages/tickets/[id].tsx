import { useEffect, useState } from "react";
import { Ticket } from '../../interfaces/Ticket';
import { Loading, Result } from "../../styles/ticketSearch";
import Filter from "../../components/Filter";
import TicketSort from '../../components/TicketSort';
import TicketList from "../../components/TicketList";

type Data = {
  tickets: Ticket[];
  isLoading: boolean
};

export default function TicketSearch(): JSX.Element {

  const [{ tickets, isLoading }, setData] = useState<Data>({
    tickets: [],
    isLoading: true,
  });

  const [className, setClassName] = useState<string>('');

  useEffect(() => {

    const getTic = async () => {

      const resPath = await fetch('https://front-test.beta.aviasales.ru/search');
      const path = await resPath.json();

      const getData = async (path) => {
        //console.log(path);
        try {
          const res = await fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${path.searchId}`);

          if (!res.ok) {
            setData((prev) => ({
              tickets: prev.tickets,
              isLoading: true,
            }));
            await getData(path);
          }

          const data = await res.json();

          if (data.stop) {
            setData((prev) => ({
              tickets: prev.tickets.concat(data.tickets),
              isLoading: false,
            }));

            //console.log(data.stop);
          } else {
            setData((prev) => ({
              tickets: prev.tickets.concat(data.tickets),
              isLoading: true,
            }));
            await getData(path);
          }
        } catch (err) {
          console.log('Поймал!' + err);
        }
      };

      await getData(path);
    };

    getTic();
    setClassName(() => 'visible');
    setTimeout(() => setClassName(() => ''), 5000);
  }, []);

  console.log(tickets);

  return <>
    <Filter />
    <TicketSort>
      {(isLoading) ?
        <Loading>L O A D I N G . . .</Loading> :
        <>
          <Result className={className}>
            Всего найдено {tickets.length} билетов
          </Result>
          <TicketList tickets={tickets} />
        </>
      }
    </TicketSort>
  </>;
}