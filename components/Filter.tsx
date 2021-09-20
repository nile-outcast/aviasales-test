import { FilterInput, FilterLabel, FilterDiv, FilterTitle } from "../styles/filter";
import { filterList } from "../utils/lists";
import { List } from "../interfaces/List";

export default function Filter(): JSX.Element {
  return <FilterDiv>
    <FilterTitle>КОЛИЧЕСТВО ПЕРЕСАДОК</FilterTitle>
    {filterList.map((oper: List) => (
      <>
        <FilterInput
          id={oper.id}
          type="checkbox"
          name={oper.id}
        />
        <FilterLabel htmlFor={oper.id}>{oper.checkName}</FilterLabel>
      </>
    ))}
  </FilterDiv >;
}