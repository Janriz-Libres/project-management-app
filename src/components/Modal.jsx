import { useRef, forwardRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

const Modal = forwardRef(function Modal(
  { buttonCaption = "Close", children },
  ref
) {
  const modalRef = useRef();

  useImperativeHandle(ref, () => ({
    open: () => modalRef.current.showModal(),
  }));

  return createPortal(
    <dialog
      ref={modalRef}
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
    >
      {children}
      <form method="dialog" className="mt-4 text-right">
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
