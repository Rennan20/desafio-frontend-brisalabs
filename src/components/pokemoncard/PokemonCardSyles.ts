import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: var(--color-white);
  border-radius: 8px;
  width: 165px;
  height: 236px;
  box-shadow: 0px 2px 16px 0px rgba(0, 0, 0, 0.05);
  position: relative;
  padding-bottom: 18px;
`;

export const Name = styled.h1`
  width: 144px;
  height: 27px;
  color: #000;
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: capitalize;
  margin-left: 9px;
`;

export const ID = styled.p`
  width: 144px;
  color: #8e8787;
  font-family: "Poppins", sans-serif;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: 9px;
`;

export const Type = styled.p`
  display: flex;
  width: 44.358px;
  height: 15.333px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #343232;
  text-align: center;
  font-family: "Poppins" "sans-serif";
  font-size: 8px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;
`;

export const TypeDiv = styled.div<{ typeColor: string }>`
  width: 50.535px;
  height: 20px;
  flex-shrink: 0;
  border-radius: 8px;
  background: ${(props) =>
    typeColors[props.typeColor] || "var(--color-primary)"};
  align-items: center;
  justify-content: center;
  display: flex;
  margin-left: 9px;
  margin-bottom: 16px;
`;

export const ViewDetailsBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 147px;
  height: 32px;
  flex-shrink: 0;
  border-radius: 8px;
  background: var(--color-primary);
  margin-right: 9px;
  margin-left: 9px;
  padding: 0;
  border: none;
  cursor: pointer;

  p {
    color: #343232;
    text-align: center;
    font-family: "Poppins", "sans-serif";
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const HeartIcon = styled.div`
  position: absolute;
  top: 11px;
  right: 9px;
  cursor: pointer;
`;

export const PokemonImage = styled.img`
  display: block;
  margin: 29px auto 0;
  width: 56px;
  height: 60px;
`;
export const typeColors: { [key: string]: string } = {
  grass: "#78C850",
  fire: "#F08030",
  water: "#6890F0",
  bug: "#A8B820",
  normal: "#7F55F6",
};
