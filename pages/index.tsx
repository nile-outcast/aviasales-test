import { GetStaticProps } from 'next';
import Filter from "../components/Filter";
import TicketSort from '../components/TicketSort';
import { Ticket } from '../interfaces/Ticket';

type Props = {
  tickets: Ticket[],
  stop: boolean
};

const Home: React.FC<Props> = ({ tickets }) => (
  <>
    <Filter />
    <TicketSort />
  </>
);


export const getStaticProps: GetStaticProps = async () => {

  const resId = await fetch('https://front-test.beta.aviasales.ru/search');
  const searchId = await resId.json();
  /*
    const mass = await fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId.searchId}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.stop) {
          return res.tickets;
        } else {
          return res.stop;
        }
      });
    //const mass = await resBody.json();
    const tickets = mass;
  
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
      */
  const url = `https://front-test.beta.aviasales.ru/tickets?searchId=${searchId.searchId}`;

  //let tickets = null;

  const getTicket = async (url) => {
    const rest = await fetch(url);
    const res = await rest.json();

    if (!res.stop) {
      return res.tickets;
    }
    await getTicket(url);
  };

  const tickets = await getTicket(url);

  return { props: { tickets } };
};

export default Home;