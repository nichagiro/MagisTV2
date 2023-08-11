import React from 'react'

const Modal = ({ id, title, slot, button, screen }) => {
  return (
    <div style={{ zIndex: 10000 }} className="modal fade" id={id} tabIndex="-1" role="dialog" aria-labelledby={id} aria-hidden="true">
      <div className={`modal-dialog modal-${screen}`} role="document">
        <div className="modal-content">
          <div className="modal-header bg-dark text-white">
            <h5 className="modal-title col-12 text-center" id={`${id}_title`}>{title}</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span className="text-white" aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body dg-blue">
            {slot}
            <div className="d-flex container justify-content-end container pb-3 pt-1 px-5">
              {button}
              <button
                type="button"
                className="btn bg-blue-dark text-white mt-3 ml-3"
                style={{ border: '1px white solid' }}
                data-dismiss="modal"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal


