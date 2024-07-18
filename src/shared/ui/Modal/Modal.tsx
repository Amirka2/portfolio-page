import React, { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

import * as Styles from './Modal.styles';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  withOverlay?: boolean;
}

export const Modal = ({
  isOpen,
  onClose,
  withOverlay = true,
  children,
}: PropsWithChildren<ModalProps>) => {
  const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const modalRoot = document.getElementById('modal-root');

  const renderContent = () => (
    <Styles.Box onClick={stopPropagation} withOverlay={withOverlay}>
      <Styles.CloseButton onClick={onClose}>
        x
      </Styles.CloseButton>
      <Styles.Content>
        {children}
      </Styles.Content>
    </Styles.Box>
  );

  return (
    isOpen
    && createPortal(
      <Styles.Overlay onClick={onClose}>
        {renderContent()}
      </Styles.Overlay>,
      modalRoot,
    )
  );
};
