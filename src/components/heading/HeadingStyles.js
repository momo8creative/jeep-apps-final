import styled from "styled-components";

export const SHeading = styled.header`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  color: ${({ theme }) => theme.primary};

  & svg {
    font-size: ${({ size }) => size};
    opacity: 0.8;
  }
`;
