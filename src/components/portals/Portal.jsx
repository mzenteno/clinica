import { createPortal } from "react-dom";

export default function Portal() {
  return createPortal(<div>marcelo zenteno molina</div>, document.getElementById("portal"))
}