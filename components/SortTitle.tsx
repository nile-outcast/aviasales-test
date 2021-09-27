import Link from "next/link";
import { useRouter } from 'next/router';
import { RefObject } from 'react';
import { UlSort, LiSort } from "../styles/ticketSort";
import { sortList } from "../utils/lists";
import { List } from "../interfaces/List";

type Props = {
  handlerOnClick(): void
  refClick: RefObject<HTMLLIElement>
};

export default function SortTitle(props: Props): JSX.Element {

  const router = useRouter();

  return (
    <UlSort>
      {sortList.map((oper: List) => {
        if (oper.id == "cheap") {
          return (
            <Link
              key={oper.id}
              href={`/tickets/[id]`}
              as={`/tickets/${oper.id}`}
              passHref
            >
              <LiSort
                id={oper.id}
                onClick={props.handlerOnClick}
                ref={props.refClick}
                className={(router.query.id == oper.id) ? "active" : ""}
              >
                {oper.checkName}
              </LiSort>
            </Link>
          );
        } else {
          return (
            <Link
              key={oper.id}
              href={`/tickets/[id]`}
              as={`/tickets/${oper.id}`}
              passHref
            >
              <LiSort
                id={oper.id}
                onClick={props.handlerOnClick}
                className={(router.query.id == oper.id) ? "active" : ""}
              >
                {oper.checkName}
              </LiSort>
            </Link>
          );
        }
      })}
    </UlSort>
  );
}