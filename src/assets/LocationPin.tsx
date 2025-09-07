import React from "react";

// Types
interface LocationPinProps {
  width?: number;
  height?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  filled?: boolean;
  fillColor?: string;
}

// eslint-disable-next-line react-refresh/only-export-components
export const LocationPin: React.FC<LocationPinProps> = ({
  width = 16,
  height = 20,
  color = "#535353",
  strokeWidth = 2,
  className = "",
  style = {},
  onClick,
  filled = false,
  fillColor = "transparent",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
      role={onClick ? "button" : "img"}
      aria-label="Location pin"
      style={{
        cursor: onClick ? "pointer" : "default",
        ...style,
      }}
    >
      <path
        d="M1 7.92285C1 12.7747 5.24448 16.7869 7.12319 18.3252C7.39206 18.5454 7.52811 18.6568 7.72871 18.7132C7.88491 18.7572 8.1148 18.7572 8.271 18.7132C8.47197 18.6567 8.60707 18.5463 8.87695 18.3254C10.7557 16.7871 14.9999 12.7751 14.9999 7.9233C14.9999 6.08718 14.2625 4.32605 12.9497 3.02772C11.637 1.72939 9.8566 1 8.00008 1C6.14357 1 4.36301 1.7295 3.05025 3.02783C1.7375 4.32616 1 6.08674 1 7.92285Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={filled ? fillColor : "transparent"}
      />
      <path
        d="M6 7C6 8.10457 6.89543 9 8 9C9.10457 9 10 8.10457 10 7C10 5.89543 9.10457 5 8 5C6.89543 5 6 5.89543 6 7Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={filled ? fillColor : "transparent"}
      />
    </svg>
  );
};
