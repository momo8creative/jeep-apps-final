import styled from "styled-components";

export const SLayout = styled.main`
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.mdWidth}) {
    flex-direction: row;
  }
`;

export const SMain = styled.main`
  flex: 1;
`;
