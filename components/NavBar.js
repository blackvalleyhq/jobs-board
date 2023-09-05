import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { fontSize, typeface, neutral } from "../theme/utils";
import { ContentWrapper } from "../styles";
import BVCaret from "../public/bv-caret.svg";

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

const Icon = styled(BVCaret)`
  width: 1.5rem;
  height: 1.5rem;
  transform: rotate(-90deg);
`;

const BackLink = styled.a`
  font-size: ${fontSize("l")};
  font-family: ${typeface("display")};
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Logo = styled.div``;

const NavBar = () => {
  const router = useRouter();

  const isListing = router.pathname.includes("/listing");

  return (
    <Navigation isLight={isListing}>
      <NavigationBody>
        <Logo>
          <Link href="https://www.blackvalley.co.uk/new-jobs">
            <a>
              <img
                src="/bv-logo.svg"
                alt="Black Valley Logo"
                width="87"
                height="90"
              />
            </a>
          </Link>
        </Logo>
        {isListing ? (
          <Link href="https://www.blackvalley.co.uk/new-jobs">
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
