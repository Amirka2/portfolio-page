import React, { ComponentPropsWithoutRef } from "react";

import { Color } from "@shared/constants";

interface MiniArrowProps extends ComponentPropsWithoutRef<"svg"> {
    direction?: "top" | "left" | "right" | "bottom";
  }

export const MiniArrow = ({
  width = 13,
  height = 8,
  color = Color.Black,
  direction,
  ...rest
}: MiniArrowProps) => {
  const directionStyles = {
    rotate: "0deg",
  };

  switch (direction) {
    case "right":
      directionStyles.rotate = "90deg";
      break;

    case "left":
      directionStyles.rotate = "-90deg";
      break;

    case "bottom":
      directionStyles.rotate = "180deg";
      break;
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 13 8"
      fill="none"
      {...rest}
    >
      <path
        d="M11.1736 1.21133L6.11154 6.14844L1.17442 1.08634"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
