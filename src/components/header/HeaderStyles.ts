import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-primary);
  height: 50px;
  padding-right: 80px;
  padding-left: 138px;
`;

export const Logo = styled.img`
  width: auto;
  margin-right: 138px;
`;

export const Links = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
export const LogoutContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const LogoutText = styled.span`
  color: #343232;
  font-family: "Poppins", "sans-serif";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Logout = styled.button`
  position: relative;
  padding: 0 9px;
  width: 89px;
  height: 28px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid #343232;
  background-color: transparent;
  display: flex;
`;

export const LogoutIcon = styled.img`
  width: auto;
  position: absolute;
  right: 9px;
`;
export const StyledNavLink = styled(NavLink)`
  color: #343232;
  text-align: center;
  font-family: "Poppins", "sans-serif";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border: none;
  padding: 0;
  background-color: transparent;
  width: 65px;
  height: 18px;
  margin-top: 16px;
  margin-bottom: 16px;
  margin-right: 54px;
  cursor: pointer;
  text-decoration: none;

  &.active {
    font-weight: 600;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: -16px; /* Distância de 16px do texto */
      left: -25%;
      width: 100px;
      height: 2px;
      background-color: black;
    }
  }
`;
