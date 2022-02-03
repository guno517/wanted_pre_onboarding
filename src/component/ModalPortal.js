import { createPortal } from "react-dom";

const ModalPortal = (props) => {
  return createPortal(props.children, document.getElementById("portal"));
};

export default ModalPortal;
