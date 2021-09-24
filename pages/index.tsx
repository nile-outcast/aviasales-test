import Filter from "../components/Filter";
//import { GetStaticProps } from 'next';
import TicketSort from '../components/TicketSort';

export default function Home(): JSX.Element {

  return <>
    <Filter />
    <TicketSort>
      <div></div>
    </TicketSort>
  </>;
}