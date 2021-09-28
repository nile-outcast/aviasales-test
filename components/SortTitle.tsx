import Link from "next/link";
import { useRouter } from 'next/router';
import { UlSort, LiSort } from "./ticketSort";
import { sortList } from "../utils/lists";
import { List } from "../interfaces/List";

type Props = {
  handlerOnClick(): void
};

export function SortTitle(props: Props): JSX.Element {

  const router = useRouter();

  return (
    <UlSort>
      {sortList.map((oper: List) => (
        <Link
          key={oper.id}
          href={{
            pathname: `/tickets/[id]`,
            query: { id: oper.id },
          }}
          passHref
        >
          <LiSort
            id={oper.id}
            onClick={props.handlerOnClick}
            isActive={(router.query.id == oper.id) ? true : false}
          >
            {oper.checkName}
          </LiSort>
        </Link>
      ))}
    </UlSort >
  );
}