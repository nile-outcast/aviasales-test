import { useMemo } from "react";
import { TicketCell, TicketCellBold } from "../styles/tickeList";
import { Segments } from '../interfaces/Ticket';
import { getArrivalTime, getDepartureTime, getTravelTime } from "../utils/functions";

type Props = {
  segments: Segments
};

export default function TicketDetails({ segments }: Props): JSX.Element {
  const { origin, destination, date, stops, duration } = segments;

  const departureTime = useMemo(() => getDepartureTime(date), [date]);

  const travelTime = useMemo(() => getTravelTime(duration), [duration]);

  const arrivalTime = useMemo(() => getArrivalTime(departureTime, travelTime), [departureTime, travelTime]);

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
        {departureTime.hour < 10 ? "0" + departureTime.hour : departureTime.hour}:
        {departureTime.minute < 10 ? "0" + departureTime.minute + " - " : departureTime.minute + " - "}
        {arrivalTime.hour < 10 ? "0" + arrivalTime.hour : arrivalTime.hour}:
        {arrivalTime.minute < 10 ? "0" + arrivalTime.minute : arrivalTime.minute}
      </TicketCellBold>
      <TicketCellBold>
        {travelTime.day ? travelTime.day + 'д ' : ''}
        {travelTime.hour + 'ч '}
        {travelTime.minute < 10 ? "0" + travelTime.minute + 'м' : travelTime.minute + 'м'}
      </TicketCellBold>
      <TicketCellBold>
        {stops.join(', ')}
      </TicketCellBold>
    </tr>
  </>;
}