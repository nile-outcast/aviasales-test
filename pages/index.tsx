import TicketSort from '../components/TicketSort';
import { Button } from "../styles/tickeList";

export default function Home(): JSX.Element {

  return (
    <TicketSort>
      <Button>ВЫБЕРИТЕ КАТЕГОРИЮ БИЛЕТОВ</Button>
    </TicketSort>
  );
}