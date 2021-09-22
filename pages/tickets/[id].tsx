import { GetStaticProps, GetStaticPaths } from 'next';
import { ReactNode } from "react";
import { Ticket } from '../../interfaces/Ticket';
import { TicketTable, Button } from "../../styles/ticketForm";
import Filter from "../../components/Filter";
import TicketSort from '../../components/TicketSort';

type Props = {
  children: ReactNode;
  tickets: Ticket[]
};

export default function TicketForm({ tickets }: Props): JSX.Element {

  //console.log(tickets);

  return <>
    <Filter />
    <TicketSort>
      <>
        <TicketTable></TicketTable>
        <Button>ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ</Button>
      </>
    </TicketSort>
  </>;
}
/*
export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://front-test.beta.aviasales.ru/search');
  const searchId = await res.json();

  const paths = [
    { params: { id: searchId.searchId } }
  ];

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {

  const getTic = (url) => {
    return fetch(url)
      .then(res => {
        if (res.status == 404) return;
        if (res.status == 500) {
          new Promise(resolve => setTimeout(resolve, 1000));
          return getTic(url);
        }
        if (res.status != 200) {
          new Promise(resolve => setTimeout(resolve, 1000));
          return getTic(url);
        }
        return res.json();
      })
      .then(json => {
        if (!json.stop) {
          return getTic(url);
        }
        return json.tickets;
      });
  };

  const tickets = await getTic('https://front-test.beta.aviasales.ru/tickets?searchId=' + params.id);

  return { props: { tickets } };
};
*/