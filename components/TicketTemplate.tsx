import { numberToString, getUrl } from "../utils/functions";
import { TicketTable, TicketCellPrice, ImgLogo } from "./tickeList";
import { Ticket } from '../interfaces/Ticket';
import { TicketDetails } from './TicketDetails';

type Props = {
  ticket: Ticket;
};

export function TicketTemplate({ ticket }: Props): JSX.Element {

  return (
    <TicketTable>
      <tbody>
        <tr>
          <TicketCellPrice colSpan={2}>
            {numberToString(ticket.price) + " P"}
          </TicketCellPrice>
          <TicketCellPrice style={{ textAlign: "right" }}>
            <ImgLogo
              src={getUrl(ticket.carrier)}
              alt="carrierLogo"
            />
          </TicketCellPrice>
        </tr>
        <TicketDetails segments={ticket.segments[0]} />
        <TicketDetails segments={ticket.segments[1]} />
      </tbody>
    </TicketTable>
  );
}