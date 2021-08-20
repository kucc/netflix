import styled from "styled-components";
import { PALETTE } from "../../styles/palette";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
`;

export const Input = styled.input`
  width: 5.5rem;
  padding: 0.3rem 0.3rem;
  border: none;
  border-bottom: 1px solid ${PALETTE.GRAY_500};
  font-size: 1rem;

  &:focus {
    outline: none;
  }
`;
