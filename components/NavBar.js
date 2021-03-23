import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { fontSize, typeface, neutral } from "../theme/utils";
import { ContentWrapper } from "../styles";
import CaretLeft from "../public/bv-caret-left.svg";

const Navigation = styled.nav`
  background-color: ${({ isLight }) =>
    isLight ? neutral("white") : neutral("dark")};
`;

const NavigationBody = styled(ContentWrapper)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 0;
`;

const Icon = styled(CaretLeft)`
  width: 1.5rem;
  height: 1.5rem;
`;

const BackLink = styled.a`
  font-size: ${fontSize("l")};
  font-family: ${typeface("display")};
  display: flex;
  align-items: center;
`;

const Logo = styled.div``;

const NavBar = () => {
  const router = useRouter();

  const isListing = router.pathname.includes("/listing");

  return (
    <Navigation isLight={isListing}>
      <NavigationBody>
        <Logo>
          <Link href="/">
            <a>
              <Image
                src="/bv-logo.png"
                width="87"
                height="90"
                alt="Black Valley Logo"
              />
            </a>
          </Link>
        </Logo>
        {isListing ? (
          <Link href="/">
            <BackLink>
              <Icon />
              Back to Listings
            </BackLink>
          </Link>
        ) : null}
      </NavigationBody>
    </Navigation>
  );
};

export default NavBar;
