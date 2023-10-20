import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height: 100vh;
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const Content = styled.div`
  text-align: center;
`;

export const Title = styled.h1`
  color: var(--color-grey-500);
  text-align: center;
  font-family: "Poppins", "sans-serif";
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const Description = styled.p`
  color: var(--color-grey-300);
  text-align: center;
  font-family: "Poppins", "sans-serif";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 366px;
  margin-bottom: 39px;
`;

export const Button = styled.button`
  width: 233px;
  height: 45px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid var(--color-grey-300);
  background-color: transparent;
  color: var(--color-grey-300);
  text-align: center;
  font-family: "Poppins", "sans-serfi";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: var(--color-grey-300);
`;

export const FavoritesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 33px;
  margin-top: 39px;
  max-height: 825px;
  overflow-y: auto;
`;

export const CardContainer = styled.div`
  margin-right: 35px;
`;
