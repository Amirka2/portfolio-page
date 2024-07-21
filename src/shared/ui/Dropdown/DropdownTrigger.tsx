import { ReactElement } from 'react';

import { DropdownContextValue, useDropdown } from './Dropdown.context';

export interface DropdownTriggerProps {
  children: (props: Partial<DropdownContextValue>) => ReactElement;
}

export const DropdownTrigger = (props: DropdownTriggerProps) => {
  const { children } = props;
  const {
    onClick, triggerRef, isOpen, close,
  } = useDropdown();

  return children({
    onClick, triggerRef, isOpen, close,
  });
};
