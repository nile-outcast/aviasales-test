import { TicketList, InputSort, LabelSort, Ticket } from "../styles/ticketList";
import { sortList } from "../utils/lists";
import { List } from "../interfaces/List";

export default function TicketSort(): JSX.Element {
  return <TicketList>
    {sortList.map((oper: List) => (
      <>
        <InputSort
          id={oper.id}
          type="radio"
          name="titleSort"
          value={oper.id}
        />
        <LabelSort htmlFor={oper.id}>{oper.checkName}</LabelSort>
      </>
    ))}
    <Ticket>Aviasales Ticket</Ticket>
  </TicketList>;
}