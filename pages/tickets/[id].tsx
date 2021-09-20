import { GetStaticProps, GetStaticPaths } from 'next';
import { Ticket } from '../../interfaces/Ticket';
import { TicketTable } from "../../styles/ticketList";

type Props = {
  tickets: Ticket[]
};

const TicketForm: React.FC<Props> = ({ tickets }) => {

  return (
    <form>
      <TicketTable></TicketTable>
      <button>ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ</button>
    </form>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://front-test.beta.aviasales.ru/search');
  const searchId = await res.json();

  const paths = [
    { params: { id: searchId.searchId } }
  ];

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {

  const res = await fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${params.id}`);
  const obj = await res.json();
  const tickets = obj.tickets;

  /*
        let status = false;
        let tickets = null;
      
        do {
          const resBody = await fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId.searchId}`)
            .then((res) => res.json());
          //const mass = await resBody.json();
          status = resBody.stop;
          tickets = resBody.tickets;
        } while (!status);
  /*
    const url = `https://front-test.beta.aviasales.ru/tickets?searchId=${params.id}`;
  
    const getTickets = async (url) => {
      const rest = await fetch(url);
      const res = await rest.json();
  
      if (!res.stop) {
        return res.tickets;
      } else {
        return res.tickets;
      }
    };
  
    const tickets = await getTickets(url);
  */
  return { props: { tickets } };
};

export default TicketForm;