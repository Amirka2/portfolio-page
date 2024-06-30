import React, { ComponentPropsWithoutRef } from "react";

import { Color } from "@shared/constants";

export const Burger = ({
  width = 18,
  height = 12,
  color = Color.Black,
  ...rest
}: ComponentPropsWithoutRef<"svg">) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 18 12"
      fill="none"
      {...rest}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 2V0H18V2H0ZM0 7H18V5H0V7ZM0 12H18V10H0V12Z"
        fill={color}
      />
    </svg>
  );
};
