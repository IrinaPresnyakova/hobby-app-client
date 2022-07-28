import React from "react";
import './Modal.scss'

function Modal({ closeModal }) {
    return (
    <div className="modalBackground">
        <div className="modalContainer">
            <div className="titleCloseBtn">
                <button onClick={()=> closeModal(false)}>X</button>
            </div>
            <div className="modalTitle">
                <h1>Delete Washington warehouse?</h1>
            </div>
            <div className="modalBody"><p>Please confirm that you'd like to delete the Washington from the list of warehouses. You won't be able to undo this action.</p></div>
            <div className="modalFooter">
                <button onClick={()=> closeModal(false)}>Cancel</button>
                <button>Delete</button>
            </div>
        </div>
        
    </div>
    )
}


export default Modal;