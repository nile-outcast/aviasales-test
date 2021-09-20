import { Ref, MouseEvent } from "react";
import { TicketList, InputSort, LabelSort } from "../styles/ticketList";
import { sortList } from "../utils/lists";
import { List } from "../interfaces/List";

type Props = {
  inputRef: Ref<HTMLInputElement>;
  handlerOnClick(event: MouseEvent<HTMLInputElement>): MouseEvent<HTMLInputElement>;
};

export default function TicketSort(props: Props): JSX.Element {
  return <TicketList>
    {sortList.map((oper: List) => {
      if (oper.id == "cheap") {
        return <>
          <InputSort
            id={oper.id}
            type="radio"
            name="titleSort"
            value={oper.id}
            onClick={props.handlerOnClick}
            ref={props.inputRef}
          />
          <LabelSort htmlFor={oper.id}>{oper.checkName}</LabelSort>
        </>;
      } else {
        return <>
          <InputSort
            id={oper.id}
            type="radio"
            name="titleSort"
            value={oper.id}
            onClick={props.handlerOnClick}
          />
          <LabelSort htmlFor={oper.id}>{oper.checkName}</LabelSort>
        </>;
      }
    })}
  </TicketList>;
}