import styled, { css } from "styled-components";
import { PALETTE } from "../../styles/palette";

export const Button = styled.button<{ isToggleOn: boolean }>`
  width: 3.5rem;
  height: 2rem;
  padding: 0;
  border-radius: 1rem;
  background-color: ${(props) => (props.isToggleOn ? PALETTE.BLUE_500 : PALETTE.GRAY_500)};
  border: none;
  position: relative;
  transition: background-color 0.5s;
`;

export const ToggleCircle = styled.div<{ isToggleOn: boolean }>`
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
  background-color: ${PALETTE.WHITE};
  border-radius: 50%;
  top: 50%;
  left: 0.2rem;
  transform: translateY(-50%);

  transition: transform 0.5s;
  ${(props) =>
    props.isToggleOn &&
    css`
      transform: translate(1.6rem, -50%);
    `}
`;
