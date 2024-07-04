import {
  createContext,
  MouseEvent,
  RefObject,
  useContext
} from 'react';

import { DropdownPosition } from './Dropdown.types';

export interface DropdownContextValue {
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  close: () => void;
  position: DropdownPosition | null;
  portalRef: RefObject<HTMLDivElement>;
  triggerRef: RefObject<HTMLButtonElement>;
  isOpen: boolean;
}

export const DropdownContext = createContext<DropdownContextValue | null>(null);

export const useDropdown = () => {
  const context = useContext(DropdownContext);

  if (!context) {
    throw new Error('useDropdown must be used within a DropdownContext');
  }

  return context;
};
