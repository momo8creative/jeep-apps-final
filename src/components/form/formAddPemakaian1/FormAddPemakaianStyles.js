import styled from "styled-components";

export const SForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 0 1rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.bg};
`;

export const SFormGroup = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;

  @media (min-width: ${({ theme }) => theme.mdWidth}) {
    flex-direction: row;
    width: 100%;
    flex-wrap: wrap;
  }
`;

export const SFormLabel = styled.label`
  opacity: 0.8;
  font-size: 0.9rem;
  @media (min-width: ${({ theme }) => theme.mdWidth}) {
    width: 10em;
  }
`;

export const SFormControl = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.mdWidth}) {
    flex: 1;
  }
`;

export const SFormIcon = styled.div`
  font-size: 1.2rem;
`;

export const SFormInput = styled.input`
  width: 100%;
  font-size: 1.2rem;
  margin: 0 0.5rem;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.bg3};
  background-color: ${({ theme }) => theme.bg1};

  :focus {
    background-color: ${({ theme }) => theme.bg3};
    border-bottom: 1px solid ${({ theme }) => theme.primary};
  }
`;
