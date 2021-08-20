import styled, { css } from "styled-components";
import { PALETTE } from "../../styles/palette";

export const Button = styled.button<{ isToggleOn: boolean }>`
  width: 3.5rem;
  height: 2rem;
  border-radius: 1rem;
  background-color: ${PALETTE.GRAY_500};
  border: none;
  display: flex;
  align-items: center;

  ${(props) =>
    props.isToggleOn &&
    css`
      flex-direction: row-reverse;
    `}
`;

export const ToggleCircle = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  background-color: ${PALETTE.WHITE};
  border-radius: 50%;
`;
