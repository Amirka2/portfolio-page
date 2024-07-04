import { ReactElement } from "react";

import { createPortal } from "react-dom";
import { DropdownContextValue, useDropdown } from "./Dropdown.context";

export interface DropdownMenuProps {
  children: (
    props: Pick<
      DropdownContextValue,
      "position" | "portalRef" | "close" | "triggerRef"
    >
  ) => ReactElement;
}

export const DropdownMenu = (props: DropdownMenuProps) => {
  const { children } = props;

  const { position, portalRef, close, isOpen, triggerRef } = useDropdown();

  if (!isOpen) {
    return null;
  }

  return createPortal(
    children({ position, portalRef, close, triggerRef }),
    document.body
  );
};
