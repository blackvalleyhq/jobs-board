/**
 * A set of utility functions to use with styled-components for accessing
 * variables on the theme.
 *
 * Example:
 * const Title = styled.h1`
 *   color: ${color("primary")};
 * `
 * or to just use the default value:
 * const Body = styled.p`
 *   color: ${neutral}
 * `
 */

export const color = (key = "primary", shade = "default") => ({ theme }) =>
  theme.color[key][shade];

export const neutral = (key = "dark") => ({ theme }) =>
  theme.color.neutral[key];

export const typeface = (key = "regular") => ({ theme }) =>
  theme.typography.font[key];

export const fontSize = (key = "m") => ({ theme }) =>
  theme.typography.size[key];
