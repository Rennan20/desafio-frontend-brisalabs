import {
  Links,
  StyledNavLink,
  LogoutIcon,
  Logout,
  LogoutText,
  LogoutContainer,
} from "./HeaderStyles";

const Navigation = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");

    window.location.href = "/";
  };

  return (
    <>
      <Links>
        <StyledNavLink
          to="/Home"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Favoritos
        </StyledNavLink>
        <StyledNavLink
          to="/Search"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Procurar
        </StyledNavLink>
        <StyledNavLink
          to="/All"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Ver Todos
        </StyledNavLink>
      </Links>
      <Logout onClick={handleLogout}>
        <LogoutContainer>
          <LogoutText>Sair</LogoutText>
          <LogoutIcon src="assets/logout.png" alt="Logout Icon" />
        </LogoutContainer>
      </Logout>
    </>
  );
};

export default Navigation;
