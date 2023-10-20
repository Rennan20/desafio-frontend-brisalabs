import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

export const SectionOne = styled.section`
  display: flex;
  flex-direction: column;
`;

export const SectionTwo = styled.section`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: 883px;
  height: 715px;
`;

export const LogoImage = styled.img`
  width: 206px;
  height: 76px;
  flex-shrink: 0;
  margin-left: 138px;
  margin-top: 33px;
  margin-bottom: 45px;
`;

export const TitleDiv = styled.div`
  width: 365px;
  height: 108px;
  margin-left: 138px;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.textLogin};

  font-family: "Poppins", "sans-serif";
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 68px;
  margin-left: 138px;
`;

export const InputContainer = styled.div<{ isInvalid?: Boolean }>`
  position: relative;
  width: 365px;
  margin-bottom: 15px;
  input {
    border: 1px solid ${(props) => (props.isInvalid ? "red" : "grey")};

    width: 92%;
    height: 54px;
    background-color: transparent;
    border-radius: 8px;
    color: var(--color-grey-300);
    font-family: "Poppins", "sans-serif";
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-left: 26px;
  }
  input::placeholder {
    color: var(--color-grey-400);
  }
`;

export const Login = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 365px;
  height: 54px;
  margin-top: 26px;
  margin-left: 138px;
  cursor: pointer;
  flex-shrink: 0;
  border-radius: 8px;
  background: var(--color-primary);
  color: var(--color-grey-500);
  text-align: center;
  font-family: "Poppins", "sans-serif";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
