import { useState } from "react";
import { ReactNode } from "react";
import { createPortal } from "react-dom";
import { Container, Dimmed, Content } from "./styles";

export interface Props {
  children: ReactNode;
  className?: string;
  isOpen: boolean;
  setOpen: (s: string) => void;
}

const $modalRoot = document.getElementById("modal-root");

const Modal = ({ children, className, isOpen, setOpen }: Props) => {
  const onCloseModal = () => {
    setOpen(null as unknown as string);
  };

  const modalElement = (
    <>
      {isOpen && (
        <>
          <Container className={className}>
            <Dimmed onClick={onCloseModal}></Dimmed>
            <Content>{children}</Content>
          </Container>
        </>
      )}
    </>
  );

  if (!$modalRoot) return null;

  return createPortal(modalElement, $modalRoot);
};

export default Modal;
