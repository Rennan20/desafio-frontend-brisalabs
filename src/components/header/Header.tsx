import { MainContainer, Logo } from "./HeaderStyles";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <MainContainer>
      <Logo src="assets/image 4.png" alt="Logo" />
      <Navigation />
    </MainContainer>
  );
};

export default Header;
