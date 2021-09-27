import { useState, useEffect, useRef, ReactNode, ChangeEvent } from 'react';
import Filter from "./Filter";
import SortTitle from './SortTitle';
import { SortConteiner } from "../styles/ticketSort";
import { FilterList } from "../interfaces/List";
import { filterContext, buttonContext } from "../utils/Context";
import { updateStateFilter } from "../utils/functions";

type Props = {
  children: ReactNode
};

export default function TicketSort(props: Props): JSX.Element {

  const [filter, setFilter] = useState<FilterList>({
    withoutStop: false,
    oneStop: false,
    twoStop: false,
    threeStop: false,
    allStop: false,
  });

  function handlerOnChangeFilter(even: ChangeEvent<HTMLInputElement>): void {
    const id = even.target.id;
    const checked = even.target.checked;
    setFilter((prev) => updateStateFilter(prev, id, checked));
  }

  const [ticketsCount, setTicketsCount] = useState<number>(5);

  function handlerOnClickInput(): void {
    setTicketsCount(() => 5);
  }

  const refClick = useRef<HTMLLIElement>();

  useEffect(() => {
    refClick.current.click();
  }, []);

  return (
    <SortConteiner>
      <Filter
        filter={filter}
        handlerOnChange={handlerOnChangeFilter}
      />
      <SortTitle
        handlerOnClick={handlerOnClickInput}
        refClick={refClick}
      />
      <filterContext.Provider value={filter}>
        <buttonContext.Provider value={[ticketsCount, setTicketsCount]}>
          {props.children}
        </buttonContext.Provider>
      </filterContext.Provider>
    </SortConteiner>
  );
}