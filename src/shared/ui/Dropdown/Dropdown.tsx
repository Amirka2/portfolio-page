import React, {
  MouseEvent,
  ReactNode,
  useMemo,
  useRef,
  useState
} from 'react';

import { useOutsideClick } from '@shared/hooks';

import { DropdownContext, DropdownContextValue } from './Dropdown.context';
import { DropdownPosition } from './Dropdown.types';
import { DropdownMenu } from './DropdownMenu';
import { DropdownTrigger } from './DropdownTrigger';

interface DropdownProps {
  children: ReactNode;
  positionController?: (rect: DOMRect) => DropdownPosition;
}

const Dropdown = (props: DropdownProps) => {
  const { children, positionController } = props;

  const [position, setPosition] = useState<DropdownPosition | null>(null);

  const triggerRef = useRef<HTMLButtonElement>(null);

  const portalRef = useOutsideClick(() => {
    setPosition(null);
  });

  const onClick = (e: MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();

    const triggerDomRect = e.currentTarget.getBoundingClientRect();
    const { left, top, height } = triggerDomRect;

    let newPosition: DropdownPosition = { left, top: top + height };

    if (positionController) {
      newPosition = positionController(triggerDomRect);
    }

    setPosition(newPosition);
  };

  const context = useMemo<DropdownContextValue>(
    () => ({
      position,
      onClick,
      close: () => {
        setPosition(null);
      },
      portalRef,
      triggerRef,
      isOpen: position != null && triggerRef.current != null,
    }),
    [position, onClick],
  );

  return (
    <DropdownContext.Provider value={context}>
      {children}
    </DropdownContext.Provider>
  );
};

export const CompoundDropdown = Object.assign(Dropdown, {
  Trigger: DropdownTrigger,
  Menu: DropdownMenu,
});
