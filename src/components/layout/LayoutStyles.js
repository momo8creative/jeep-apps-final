import styled from "styled-components";

export const SLayout = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  @media (min-width: ${({ theme }) => theme.mdWidth}) {
    flex-direction: row;
  }
`;

export const SMain = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SFooter = styled.footer`
  margin-top: auto;
  padding: 1rem;
  font-size: 0.8rem;
  opacity: 0.8;
  background-color: ${({ theme }) => theme.bg3};
`;
