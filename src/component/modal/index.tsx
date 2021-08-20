import { useState } from "react";
import { ReactNode } from "react";
import { createPortal } from "react-dom";
import { Container, Dimmed } from "./styles";

export interface Props {
  children: ReactNode;
  className?: string;
}

const $modalRoot = document.getElementById("modal-root");

const Modal = ({ children, className }: Props) => {
  const [isOpen, setOpen] = useState(true);

  const onCloseModal = () => {
    setOpen(false);
  };

  const modalElement = (
    <>
      {isOpen && (
        <>
          <Dimmed onClick={onCloseModal}></Dimmed>
          <Container className={className}>{children}</Container>
        </>
      )}
    </>
  );

  if (!$modalRoot) return null;

  return createPortal(modalElement, $modalRoot);
};

export default Modal;
