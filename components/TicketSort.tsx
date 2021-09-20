import { TicketList, InputSort, LabelSort } from "../styles/ticketList";
import { sortList } from "../utils/lists";
import { List } from "../interfaces/List";

export default function TicketSort(): JSX.Element {
  return <TicketList>
    {sortList.map((oper: List) => (
      <>
        <InputSort
          id={oper.id}
          type="radio"
          name={oper.id}
          value={oper.id}
        />
        <LabelSort htmlFor={oper.id}>{oper.checkName}</LabelSort>
      </>
    ))}
  </TicketList>;
}