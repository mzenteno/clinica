import { createPortal } from "react-dom";
import "./Modal.scss";

export default function Modal({ isOpen, onClose, message }) {
  if (!isOpen) {
      return null;
  }
  return createPortal(
    <div id="modalPortal" className="container">
      <div className="overlay"></div>
      <div className="modal" tabIndex="-1" style={{ display: 'block' }}>
        <div className="modal-dialog h-100 d-flex align-items-center">
          <div className="modal-content">
            <div className="modal-body">
              { message }
            </div>
            <div className="modal-footer">
              <button id="btnOk" type="button" className="btn btn-light" onClick={ onClose} >Aceptar</button>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("portal"))
}