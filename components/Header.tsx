import { HeaderDiv, ImgLogo } from "../styles/page";
import Link from "next/link";

export default function Header(): JSX.Element {
  return <HeaderDiv>
    <Link
      href={`/`}
      passHref
    >
      <ImgLogo
        src="/aslogo.svg"
        alt="aslogo"
      />
    </Link>
  </HeaderDiv>;
}