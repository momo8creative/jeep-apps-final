import styled from "styled-components";

export const SForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 0 1rem;
  background-color: ${({ theme }) => theme.bg1};
`;

export const SFormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  /* background-color: ${({ theme }) => theme.bg1}; */
  padding: 0.5rem 1rem;
`;

export const SFormLabel = styled.label`
  opacity: 0.8;
  font-size: 0.9rem;
`;

export const SFormControl = styled.input`
  font-size: 1.2rem;
  margin: 0 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  border-bottom: 1px solid ${({ theme }) => theme.bg3};
  background-color: ${({ theme }) => theme.bg};
  ::-webkit-calendar-picker-indicator {
    color: red;
  }

  :focus {
    background-color: ${({ theme }) => theme.bg2};
    border-bottom: 1px solid ${({ theme }) => theme.primary};
  }
`;

export const SFormTextHelper = styled.span`
  opacity: 0.9;
  font-size: 0.9rem;
  margin: 0 0.5rem;
`;
