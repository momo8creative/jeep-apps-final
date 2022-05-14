import styled from "styled-components";

export const SButton = styled.button`
  /* border: 1px solid red; */
  padding: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
  background-color: ${({ theme, variant, outline }) =>
    outline ? "" : variant ? theme[variant] : theme.bg1};
  outline: 1px solid
    ${({ theme, variant, outline }) =>
      variant && outline ? theme[variant] : theme.bg1};
  color: ${({ theme, variant, outline }) =>
    outline ? (variant ? theme[variant] : theme.bg1) : theme.bg};
`;
