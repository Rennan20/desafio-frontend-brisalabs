import {
  Content,
  Title,
  Description,
  Button,
  StyledNavLink,
} from "./HomeStyles";

const ContentContainer = () => {
  return (
    <>
      <Content>
        <Title>Está meio vazio por aqui!</Title>
        <Description>
          Procure por pokémons para adicioná-los aos seus favoritos.
        </Description>
        <Button>
          <StyledNavLink to="/Search">Procurar Pokémons</StyledNavLink>
        </Button>
      </Content>
    </>
  );
};

export default ContentContainer;
