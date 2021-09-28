import { HeaderDiv, TagA } from "../components/page";
import Image from 'next/image';
import Link from "next/link";

export function Header(): JSX.Element {
  return (
    <HeaderDiv>
      <Link
        href="/"
        passHref
      >
        <TagA>
          <Image
            src="/aslogo.svg"
            alt="aslogo"
            height="100px"
            width="100px"
          />
        </TagA>
      </Link>
    </HeaderDiv>
  );
}