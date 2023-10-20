import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
`;

export const SearchBar = styled.div`
  margin-top: 29px;
  width: 765px;
  height: 54px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid #dee0e3;
  background: var(--color-white);
  background-image: url("/assets/Vector.png");
  background-position: right 26px center;
  background-repeat: no-repeat;
  cursor: pointer;

  input {
    background-color: transparent;
    flex: 1;
    width: 90%;
    height: 100%;
    padding-left: 26px;
    border: none;
    outline: none;
    font-family: "Poppins", "sans-serif";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    &::placeholder {
      color: #000 !important;
    }
  }
`;

export const ResultsContainer = styled.div`
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
