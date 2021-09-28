import { TicketSort } from '../components/SortConteiner';
import { Button } from "../components/tickeList";

export default function Home(): JSX.Element {

  return (
    <TicketSort>
      <Button>ВЫБЕРИТЕ КАТЕГОРИЮ БИЛЕТОВ</Button>
    </TicketSort>
  );
}