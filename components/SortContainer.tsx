import { useState, ReactNode, ChangeEvent } from 'react';
import { TicketFilter } from "./TicketFilter";
import { SortTitle } from './SortTitle';
import { SortContainer } from "./ticketSort";
import { FilterList } from "../interfaces/List";
import { FilterContext, ButtonContext } from "../utils/Context";
import { updateStateFilter } from "../utils/functions";

type Props = {
  children: ReactNode
};

export function TicketSort(props: Props): JSX.Element {

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

  return (
    <SortContainer>
      <TicketFilter
        filter={filter}
        handlerOnChange={handlerOnChangeFilter}
      />
      <SortTitle
        handlerOnClick={handlerOnClickInput}
      />
      <FilterContext.Provider value={filter}>
        <ButtonContext.Provider value={[ticketsCount, setTicketsCount]}>
          {props.children}
        </ButtonContext.Provider>
      </FilterContext.Provider>
    </SortContainer>
  );
}