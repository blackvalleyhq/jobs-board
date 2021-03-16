import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { color, fontSize, neutral, typeface } from "../../theme/utils";

const ButtonStyles = css`
  background-color: ${color("primary")};
  color: ${neutral("dark")};
  font-family: ${typeface("display")};
  font-size: ${fontSize("l")};
  line-height: 1;
  white-space: nowrap;
  padding: 12px 24px;
  border-radius: 99999px;
  transition: background-color 200ms ease-out;

  &:hover,
  &:focus {
    background-color: ${color("primary", "dark")};
  }
`;

const StyledButton = styled.button`
  ${ButtonStyles}
`;

const ButtonAsLink = styled.a`
  ${ButtonStyles}
`;

export const Button = ({ href, onClick, children }) => {
  const router = useRouter();

  const goTo = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return href ? (
    <ButtonAsLink href={href} onClick={goTo}>
      {children}
    </ButtonAsLink>
  ) : (
    <StyledButton onClick={onClick}>{children}</StyledButton>
  );
};

Button.propTypes = {
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
};
