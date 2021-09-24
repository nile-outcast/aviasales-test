import { FilterInput, FilterLabel, FilterDiv, FilterTitle } from "../styles/filter";
import { filterList } from "../utils/lists";
import { List } from "../interfaces/List";
import { useState } from "react";

export default function Filter(): JSX.Element {
  const [filter, setFilter] = useState({
    allStop: true,
    withoutStop: true,
    oneStop: true,
    twoStop: true,
    threeStop: true,
  });

  const handlerOnChangeFilter = (even) => {
    console.log(filter);
  };

  return <FilterDiv
  >
    <FilterTitle>КОЛИЧЕСТВО ПЕРЕСАДОК</FilterTitle>
    {filterList.map((oper: List) => (
      <>
        <FilterInput
          id={oper.id}
          type="checkbox"
          name={oper.id}
          checked={filter[oper.id]}
          onChange={handlerOnChangeFilter}
        />
        <FilterLabel htmlFor={oper.id}>{oper.checkName}</FilterLabel>
      </>
    ))}
  </FilterDiv >;
}