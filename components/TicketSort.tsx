import { useEffect, useRef, MouseEvent, ReactNode } from 'react';
import { SortConteiner } from "../styles/ticketList";
import { Ticket } from '../interfaces/Ticket';
import SortTitle from './SortTitle';

type Props = {
  children: ReactNode
  tickets?: Ticket[]
  status?: boolean
};

export default function TicketSort(props: Props): JSX.Element {
  const inputRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    inputRef.current.click();
  }, []);

  function handlerOnClickInput(event: MouseEvent<HTMLLIElement>): MouseEvent<HTMLLIElement> {
    console.log(event.currentTarget.id);
    return;
  }

  return <SortConteiner>
    <SortTitle
      handlerOnClick={handlerOnClickInput}
      inputRef={inputRef}
    />
    {props.children}
  </SortConteiner>;
}