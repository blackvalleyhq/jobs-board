import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { neutral } from "../theme/utils";

const Navigation = styled.nav`
  background-color: ${neutral("dark")};
`;

const Logo = styled.div`
`;

const NavBar = () => {
  return (
    <Navigation>
      <Logo>
        <Link href="/">
          <Image
            src="/bv-logo.svg"
            width="87"
            height="90"
            alt="Black Valley Logo"
          />
        </Link>
      </Logo>
    </Navigation>
  );
};

export default NavBar;
