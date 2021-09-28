import React, { ChangeEvent } from "react";
import { FilterInput, FilterLabel, FilterDiv, FilterTitle, FilterSpan } from "./filter";
import { filterList } from "../utils/lists";
import { List, FilterList } from "../interfaces/List";

type Props = {
  filter: FilterList,
  handlerOnChange(even: ChangeEvent<HTMLInputElement>): void,
};

export function TicketFilter({ filter, handlerOnChange }: Props): JSX.Element {

  return (
    <FilterDiv>
      <FilterTitle>КОЛИЧЕСТВО ПЕРЕСАДОК</FilterTitle>
      {filterList.map((oper: List) => (
        <FilterLabel key={oper.id}>
          <FilterInput
            id={oper.id}
            type="checkbox"
            name={oper.id}
            checked={filter[oper.id]}
            onChange={handlerOnChange}
          />
          <FilterSpan>{oper.checkName}</FilterSpan>
        </FilterLabel>
      ))}
    </FilterDiv >
  );
}