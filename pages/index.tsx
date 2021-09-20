import { useEffect, useRef, MouseEvent } from 'react';
import { GetStaticProps } from 'next';
import Filter from "../components/Filter";
import TicketSort from '../components/TicketSort';
import { Ticket } from '../interfaces/Ticket';

type Props = {
  tickets: Ticket[]
};

export const Home: React.FC<Props> = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.click();
  }, []);

  function handlerOnClickInput(event: MouseEvent<HTMLInputElement>): MouseEvent<HTMLInputElement> {
    console.log(event.currentTarget.id);
    return;
  }

  return <>
    <Filter />
    <TicketSort
      handlerOnClick={handlerOnClickInput}
      inputRef={inputRef} />
  </>;
};

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

  return { props: { tickets } };
};

export default Home;