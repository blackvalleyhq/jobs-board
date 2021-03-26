import styled, { css } from "styled-components";
import PropTypes from "prop-types";
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
  display: flex;
  align-items: center;

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
  return href ? (
    <ButtonAsLink href={href} target="_blank">
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
