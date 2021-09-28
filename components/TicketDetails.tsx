import { useMemo } from "react";
import { TicketCell, TicketCellBold } from "../components/tickeList";
import { Segments } from '../interfaces/Ticket';
import { getTime, getTravelTime } from "../utils/functions";

type Props = {
  segments: Segments
};

export function TicketDetails({ segments }: Props): JSX.Element {
  const { origin, destination, date, stops, duration } = segments;

  const time = useMemo(() => getTime(date, duration), [date, duration]);

  const travelTime = useMemo(() => getTravelTime(duration), [duration]);

  return <>
    <tr>
      <TicketCell>
        {origin + " - "}
        {destination}
      </TicketCell>
      <TicketCell>
        В ПУТИ
      </TicketCell>
      <TicketCell>
        {stops.length}
        {stops.length == 0 ? " ПЕРЕСАДОК" :
          stops.length == 1 ? " ПЕРЕСАДКА" : " ПЕРЕСАДКИ"}
      </TicketCell>
    </tr>
    <tr>
      <TicketCellBold>
        {time.departureTime + " - "}
        {time.arrivalTime}
      </TicketCellBold>
      <TicketCellBold>
        {travelTime}
      </TicketCellBold>
      <TicketCellBold>
        {stops.join(', ')}
      </TicketCellBold>
    </tr>
  </>;
}