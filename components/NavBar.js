import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { neutral } from "../theme/utils";

const Navigation = styled.div`
  height: 80px;
  background-color: ${neutral("dark")};
`;

const Logo = styled.div`
  padding: 5px 20px;
`;

const NavBar = () => {
  return (
    <Navigation>
      <Logo>
        <Link href="/">
          <Image src="/bv-logo.svg" width="65" height="75" />
        </Link>
      </Logo>
    </Navigation>
  );
};

export default NavBar;
