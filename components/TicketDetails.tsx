import { TicketRow, TicketCell, TicketCellBold } from "../styles/tickeList";
import { Segments } from '../interfaces/Ticket';

type Props = {
  segments: Segments
};

export default function TicketDetails({ segments }: Props): JSX.Element {
  const { origin, destination, date, stops, duration } = segments;

  const time = new Date(date);
  const hour = time.getUTCHours;

  console.log(typeof hour);

  return <>
    <TicketRow>
      <TicketCell>{origin} - {destination}</TicketCell>
      <TicketCell>В ПУТИ</TicketCell>
      <TicketCell>{stops.length}
        {stops.length == 0 ?
          " ПЕРЕСАДОК" :
          stops.length == 1 ? " ПЕРЕСАДКА" : " ПЕРЕСАДКИ"}
      </TicketCell>
    </TicketRow>
    <TicketRow>
      <TicketCellBold>10:15 - 08:00</TicketCellBold>
      <TicketCellBold>{duration > 1440 ? Math.floor(duration / 1440) + 'д ' : ''}
        {duration > 1440 ? Math.floor((duration - 1440) / 60) + 'ч ' : Math.floor(duration / 60) + 'ч '}
        {duration % 60 + 'м '}</TicketCellBold>
      <TicketCellBold>{stops.join(', ')}</TicketCellBold>
    </TicketRow>
  </>;
}