import React, { ComponentPropsWithoutRef } from 'react';

import { Color } from '@shared/constants';

interface ArrowProps extends ComponentPropsWithoutRef<'svg'> {
  direction?: 'top' | 'left' | 'right' | 'bottom';
}

export const Arrow = ({
  direction = 'top',
  width = 16,
  height = 20,
  color = Color.Dark,
  ...rest
}: ArrowProps) => {
  const directionStyles = {
    rotate: '0deg',
  };

  switch (direction) {
    case 'right':
      directionStyles.rotate = '90deg';
      break;

    case 'left':
      directionStyles.rotate = '-90deg';
      break;

    case 'bottom':
      directionStyles.rotate = '180deg';
      break;

    default:
      return null;
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      style={directionStyles}
      {...rest}
    >
      <path
        d="M1 8L8 1M8 1L15 8M8 1L8 19"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
