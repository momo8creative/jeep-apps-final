import styled from "styled-components";

export const SDateBackdrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.bgA};
`;

export const SDateContainer = styled.form`
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 80%;
  background-color: ${({ theme }) => theme.bg2};
`;

export const SDateContent = styled.main`
  display: flex;
  gap: 0.5rem;
  width: 100%;
`;

export const SDateItem = styled.div`
  width: ${({ width }) => (width ? width : "")};
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 0.2rem;
`;

export const SDateItemValue = styled.input`
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 1rem;
  background-color: ${({ theme }) => theme.bg};

  ::-webkit-inner-spin-button {
    appearance: none;
    -webkit-appearance: none;
  }

  :focus {
    outline-offset: 0.2rem;
    outline: 0.1rem solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
  }
`;

export const SDateItemCalc = styled.button`
  font-size: 2rem;
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.bg};
  opacity: 0.5;
  transition: 0.5s ease-in-out;

  :hover {
    opacity: 1;
  }
  :focus {
    opacity: 1;
    background-color: ${({ theme }) => theme.bg3};
  }
`;
