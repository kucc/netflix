import styled from "styled-components";
import { PALETTE } from "../../styles/palette";

export const Main = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Form = styled.form`
  width: 30rem;
  padding: 4rem 3rem;
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem 0.8rem;
`;

export const Label = styled.label`
  position: absolute;
  padding: 0 0.3rem;
  top: -0.8rem;
  left: 1rem;
  background-color: ${PALETTE.WHITE};
`;

export const ErrorMessage = styled.span`
  height: 1.5rem;
  color: ${PALETTE.RED_700};
`;

export const SignUpButton = styled.button`
  background-color: ${PALETTE.GRAY_300};
  padding: 0.5rem;
  border: none;
  &:hover {
    background-color: ${PALETTE.GRAY_500};
  }
`;
