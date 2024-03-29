import styled from "styled-components";

export const SForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
`;

export const SFormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  @media (min-width: ${({ theme }) => theme.mdWidth}) {
    flex-direction: row;
    align-items: center;
  }
`;

export const SFormLabel = styled.label`
  display: block;
  font-size: 0.8rem;
  opacity: 0.8;
  @media (min-width: ${({ theme }) => theme.mdWidth}) {
    width: 10rem;
  }
`;

export const SFormControl = styled.div`
  /* border: 1px solid red; */
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: ${({ helper }) => (helper ? "1rem" : "")};

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
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.bg};
`;

export const SFormHelper = styled.span`
  display: block;
  font-size: 0.8rem;
  opacity: 0.8;
  position: absolute;
  bottom: -50%;
  margin-left: 2rem;
  color: ${({ danger }) => (danger ? "red" : "green")};
`;
