import { HeaderDiv, TagA, ImgLogo } from "../components/page";
import Link from "next/link";

export function Header(): JSX.Element {
  return (
    <HeaderDiv>
      <Link
        href="/"
        passHref
      >
        <TagA>
          <ImgLogo
            src="/aslogo.svg"
            alt="aslogo"
          />
        </TagA>
      </Link>
    </HeaderDiv>
  );
}