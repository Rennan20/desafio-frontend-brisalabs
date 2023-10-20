import {
  NotFoundContainer,
  NotFoundTitle,
  NotFoundText,
} from "./NotFound.styles";

const NotFound = () => {
  return (
    <NotFoundContainer>
      <NotFoundTitle>Página não encontrada 😔</NotFoundTitle>
      <NotFoundText>
        Você não me pegou dessa vez, eu pensei nessa possibilidade XD
      </NotFoundText>
      <img src="/assets/pokeball.png" alt="Pokeball" width="325" height="325" />
    </NotFoundContainer>
  );
};

export default NotFound;
