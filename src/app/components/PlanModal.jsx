import React, { useCallback } from 'react';
import Modal from 'react-modal';

import {makePlanStr} from '../util/common';

Modal.setAppElement("#root");

const PlanModal = ({open, setOpen, events}) => {

  const closeModal = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <Modal
    isOpen={open}
    shouldCloseOnOverlayClick={true}
    onRequestClose={closeModal}
    className="plan-modal"
    overlayClassName="plan-overlay"
    >
      <ul className="plan-list">
        {
          events.map((event, index) => (
            <li key={index}>
              <span className="plan-date-range">
                { makePlanStr(event) }
              </span>
              <span className="plan-title">
                { event.title }
              </span>
            </li>
          ))
        }
      </ul>
      <span className="close-modal" onClick={closeModal} />
    </Modal>
  );
}

export default PlanModal;