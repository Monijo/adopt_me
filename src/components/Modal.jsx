import React, { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

function Modal(props) {
  const elementRef = useRef(null);
  if (!elementRef.current) {
    elementRef.current = document.createElement("div");
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elementRef.current);
    return () => {
      modalRoot.removeChild(elementRef.current);
    };
  }, []);

  return <div></div>;
}

export default Modal;
