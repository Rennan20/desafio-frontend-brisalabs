import styled, { css } from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Links = styled.nav`
  display: flex;
  align-items: center;
  margin-top: 40px;
  margin-left: 138px;
  border-radius: 8px;
`;

export const NavButton = styled.button<{ active?: boolean | null }>`
  background-color: transparent;
  border: 1px solid #6b6868;
  border-radius: 8px;
  height: 42px;
  width: 145px;
  margin-right: 8px;
  flex-shrink: 0;
  align-items: center;
  display: flex;
  justify-content: center;
  cursor: pointer;

  p {
    width: 115px;
    height: 18px;
    color: #6b6868;
    text-align: center;
    font-family: "Poppins", sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  ${(props) =>
    props.active &&
    css`
      background-color: var(--color-primary);
      border: none;
      p {
        color: #343232;
      }
    `}
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, calc(16.6667% - 20px));
  grid-gap: 35px;
  grid-row-gap: 28px;
  margin-top: 38px;
  margin-left: 138px;
  margin-right: 138px;
`;
