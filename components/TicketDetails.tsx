import { TicketRow, TicketCell } from "../styles/tickeList";
import { Ticket } from '../interfaces/Ticket';

type Props = {

};

export default function TicketDetails(props: Props): JSX.Element {


  return <>
    <TicketRow>
      <TicketCell></TicketCell>
      <TicketCell></TicketCell>
      <TicketCell></TicketCell>
    </TicketRow>
    <TicketRow>
      <TicketCell></TicketCell>
      <TicketCell></TicketCell>
      <TicketCell></TicketCell>
    </TicketRow>
  </>;
}