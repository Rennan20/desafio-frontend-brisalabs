import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 378px;
  height: 639px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  background-color: var(--color-white);
  border-radius: 8px;
  position: relative;
`;

export const Title = styled.h1`
  width: 253px;
  color: #343232;
  font-family: "Poppins", "sans-serif";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 24px;
  margin-left: 24px;
  margin-bottom: 9px;
`;

export const PokemonName = styled.h2`
  width: 330px;
  color: #000;
  font-family: "Poppins", "sans-serif";
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 18px;
  margin-bottom: 13px;
  margin-left: 24px;
  text-transform: capitalize;
`;

export const ImagesContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 24px;
`;

export const ImageContainer = styled.div`
  width: 79.518px;
  height: 69.976px;
  flex-shrink: 0;
  border-radius: 8px;
  background: rgba(204, 203, 200, 0.2);

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-right: 7px;
`;
export const PokemonImage = styled.img`
  width: 44.53px;
  height: 47.711px;
  flex-shrink: 0;
  z-index: 1;
`;

export const FavoriteBtn = styled.button<{ isFavorite?: boolean }>`
  width: 331px;
  height: 46px;
  flex-shrink: 0;
  border-radius: 8px;
  background: ${(props) => (props.isFavorite ? "#ff3326" : "#ffcb05")};
  border: 0;
  padding: 0;
  margin-top: 43px;
  margin-left: 24px;
  color: #343232;
  text-align: center;
  font-family: "Poppins", "sans-serif";
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const PrimaryInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 24px;
`;
export const PokemonHeight = styled.p`
  margin-right: 18px;
  color: #000;
  font-family: "Poppins", "sans-serif";
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const PokemonWeight = styled.p`
  color: #000;
  font-family: "Poppins", "sans-serif";
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const PokemonType = styled.p`
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
  width: 50.535px;
  height: 20px;
  flex-shrink: 0;
  border-radius: 8px;
  background: var(--color-primary);
  align-items: center;
  justify-content: center;
  display: flex;
  margin-left: 24px;
`;
export const HR = styled.div`
  background-color: #e7dfdf;
  margin-left: 24px;
  width: 330px;
  height: 1px;
`;

export const StatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 24px;
  margin-top: 27px;
`;

export const StatsTitle = styled.h1`
  width: 330px;
  color: #b8b8b8;
  font-family: "Poppins", "sans-serif";
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const SvgWrapper = styled.div<{ isFavorite?: boolean }>`
  margin-right: 9px;
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  background: transparent;
  border: none;
  padding: 0;
  color: #343232;
  font-family: "Poppins", "sans-serif";
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
`;
