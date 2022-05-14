import styled from "styled-components";
import { Link } from "react-router-dom";
import { keyframes } from "styled-components";

export const SSidebar = styled.aside`
  display: flex;
  background-color: ${({ theme }) => theme.bg};

  @media (min-width: ${({ theme }) => theme.mdWidth}) {
    width: ${({ theme }) => theme.sidebarWidth};
    flex-direction: column;
    min-height: 100vh;
  }
`;

export const SDevider = styled.hr`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.bg2};
  margin: 1rem;
  @media (max-width: ${({ theme }) => theme.mdWidth}) {
    display: none;
  }
`;

export const SButtonNav = styled.button`
  font-size: 1.5rem;
  padding: 0.5rem;
  ${({ show }) =>
    show
      ? `
      position:absolute;
      z-index:10;
      top:0.5rem;
      right:0.5rem;
      color: red;
      `
      : ""};
  transition: 0.5s ease-in-out;

  :hover {
    /* filter: brightness(50%); */
    background-color: ${({ theme }) => theme.bg2};
  }

  @media (min-width: ${({ theme }) => theme.mdWidth}) {
    display: none;
  }
`;

export const SBrand = styled.header`
  margin-right: auto;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.2rem 1rem;

  & img {
    width: 32px;
    background-color: white;
  }

  & h1 {
    font-size: 2rem;
  }

  @media (min-width: ${({ theme }) => theme.mdWidth}) {
    padding: 1rem;
    & img {
      width: 64px;
    }
  }
`;

export const SNavBackdrop = styled.div`
  display: none;
  @media (max-width: ${({ theme }) => theme.mdWidth}) {
    display: ${({ show }) => (show ? "block" : "none")};
    background-color: ${({ theme }) => theme.bgA};
    width: 100%;
    min-height: 100vh;
    position: absolute;
  }
`;

const slide = keyframes`
  from {
    transform:translateX(-100%)
  }
  to {
    transform:translateX(0%)
  }
`;

export const SNav = styled.nav`
  display: ${({ show }) => (show ? "flex" : "none")};
  flex-direction: column;
  width: 100%;

  /* hp */
  @media (max-width: ${({ theme }) => theme.mdWidth}) {
    position: absolute;
    z-index: 9;
    top: 0;
    left: 0;
    min-height: 100vh;
    padding: 4rem 0;
    font-size: 1.2rem;
    background-color: ${({ theme }) => theme.bg};
    animation: ${({ show }) => (show ? slide : "")} 0.5s ease-in-out;
  }

  /* laptop */
  @media (min-width: ${({ theme }) => theme.mdWidth}) {
    display: flex;
  }
`;

export const SNavLink = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  /* border: 1px solid red; */
  color: ${({ active, theme }) => (active ? theme.primary : "")};

  :hover {
    background-color: ${({ theme }) => theme.bg2};
  }
`;

export const STheme = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;

  @media (min-width: ${({ theme }) => theme.mdWidth}) {
    padding: 0.5rem 1rem;
  }
`;

export const SThemeLabel = styled.div`
  @media (max-width: ${({ theme }) => theme.mdWidth}) {
    display: none;
  }
`;

export const SButtonTheme = styled.button`
  position: relative;
  width: 30px;
  height: 14px;
  border-radius: 14px;
  background-color: ${({ theme }) => theme.bg3};
  box-shadow: 0 0 2px ${({ theme }) => theme.bg3};

  ::before {
    content: "";
    position: absolute;
    top: 3px;
    left: ${({ light }) => (light ? "3px" : "19px")};
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: white;
    transition: 0.2s ease-in-out;
  }

  :hover {
    outline: 1px solid ${({ theme }) => theme.bg3};
    outline-offset: 3px;
  }
  :hover::before {
    outline: 1px solid ${({ theme }) => theme.bg3};
    outline-offset: 2px;
  }
`;
