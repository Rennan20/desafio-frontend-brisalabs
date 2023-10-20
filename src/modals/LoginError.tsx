import styled from "styled-components";

interface ModalProps {
  isOpen: boolean;
}

export const ModalOverlay = styled.div<ModalProps>`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.div`
  background-color: var(--color-alert-danger);
  border-radius: 8px;
  padding: 20px;
  text-align: center;
`;

export const ModalCloseButton = styled.button`
  background-color: var(--color-alert-danger);
  padding: 30px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 18px;
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const ModalText = styled.p`
  margin-bottom: 20px;
  font-size: 16px;
`;

export const ModalTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;
