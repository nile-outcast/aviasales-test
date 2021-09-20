import { HeaderDiv, ImgLogo } from "../styles/page";

export default function Header(): JSX.Element {
  return <HeaderDiv>
    <ImgLogo
      src="/aslogo.svg"
      alt="aslogo"
    />
  </HeaderDiv>;
}