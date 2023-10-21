import { useState } from "react";
import {
  SectionOne,
  LogoImage,
  Title,
  TitleDiv,
  InputContainer,
  Form,
  Login,
} from "./LoginStyles";
import { fakeLogin } from "../../services/auth";
import {
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalTitle,
  ModalText,
} from "../../modals/LoginError";
import { useAuth } from "../../services/Auth/AuthContext";
import { useNavigate } from "react-router-dom";

const RightSection = () => {
  const authContext = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputFocus = () => {
    setIsInvalid(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleKeyPress = (event: { key: string }) => {
    if (event.key === "Enter") {
      handleLogin();
    }
  };

  const handleLogin = () => {
    const isAuthenticated = fakeLogin(username, password);

    if (isAuthenticated) {
      const token = "token_ficticio";
      authContext.login(token);
      navigate("/All");
    } else {
      setIsModalOpen(true);
      setIsInvalid(true);
    }
  };

  return (
    <SectionOne>
      <div>
        <LogoImage src="/assets/image 1.png" alt="logo" />
      </div>
      <TitleDiv>
        <Title>Comece a coletar pokémons!</Title>
      </TitleDiv>
      <div>
        <Form>
          <InputContainer>
            <input
              className={isInvalid ? "invalid" : ""}
              type="text"
              placeholder="Email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onFocus={handleInputFocus}
              onKeyPress={handleKeyPress}
              required
            />
          </InputContainer>
          <InputContainer>
            <input
              className={isInvalid ? "invalid" : ""}
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              onFocus={handleInputFocus}
              onKeyPress={handleKeyPress}
            />
          </InputContainer>
        </Form>
        <div>
          <Login onClick={handleLogin}>Entrar</Login>
        </div>
        {isModalOpen && (
          <ModalOverlay isOpen={isModalOpen}>
            <ModalContent>
              <ModalCloseButton onClick={closeModal}>X</ModalCloseButton>
              <ModalTitle>Credenciais Incorretas</ModalTitle>
              <ModalText>
                Por favor, verifique suas credenciais e tente novamente.
              </ModalText>
            </ModalContent>
          </ModalOverlay>
        )}
      </div>
    </SectionOne>
  );
};

export default RightSection;

/*   const handleLogin = () => {
    const { login } = useAuth();
    const [token, setToken] = useState("");
    const isAuthenticated = fakeLogin(username, password);

    if (isAuthenticated) {
      const token = "token_ficticio";
      localStorage.setItem("token", token);
      window.location.href = "/All";
    } else {
      setIsModalOpen(true);
      setIsInvalid(true);
    }
  };
 */
