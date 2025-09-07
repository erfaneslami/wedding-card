/* eslint-disable react-refresh/only-export-components */
import type React from "react";
import { useState, type CSSProperties, type MouseEvent } from "react";

// Types and Interfaces
interface Ripple {
  x: number;
  y: number;
  id: number;
}

type ButtonVariant = "primary" | "secondary";
type ButtonSize = "small" | "medium" | "large";

interface SizeConfig {
  padding: string;
  fontSize: string;
  minWidth: string;
  iconSize: string;
}

interface DynamicMapButtonProps {
  text?: string;
  icon?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  style?: CSSProperties;
}

export const Button: React.FC<DynamicMapButtonProps> = ({
  text = "Google Map",
  icon = "📍",
  onClick = () => {},
  disabled = false,
  variant = "primary",
  size = "medium",
  className = "",
  style = {},
}) => {
  const [isPressed, setIsPressed] = useState<boolean>(false);
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const handleMouseDown = (e: MouseEvent<HTMLButtonElement>): void => {
    setIsPressed(true);

    // Create ripple effect
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newRipple: Ripple = {
      x,
      y,
      id: Date.now(),
    };

    setRipples((prev) => [...prev, newRipple]);

    // Remove ripple after animation
    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id));
    }, 600);
  };

  const handleMouseUp = (): void => setIsPressed(false);
  const handleMouseLeave = (): void => setIsPressed(false);

  const handleClick = (e: MouseEvent<HTMLButtonElement>): void => {
    if (!disabled && onClick) {
      onClick(e);
    }
  };

  const getButtonStyles = (): CSSProperties => {
    const sizeMap: Record<ButtonSize, SizeConfig> = {
      small: {
        padding: "8px 20px",
        fontSize: "14px",
        minWidth: "180px",
        iconSize: "18px",
      },
      medium: {
        padding: "12px 24px",
        fontSize: "16px",
        minWidth: "230px",
        iconSize: "20px",
      },
      large: {
        padding: "16px 28px",
        fontSize: "18px",
        minWidth: "280px",
        iconSize: "24px",
      },
    };

    const currentSize = sizeMap[size];

    return {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      gap: "12px",
      padding: currentSize.padding,
      borderRadius: "50px",
      border: "2px solid #8B7355",
      backgroundColor: variant === "primary" ? "#F5E6D3" : "transparent",
      color: "#4A4A4A",
      fontFamily: "Castoro, serif",
      fontSize: currentSize.fontSize,
      fontWeight: "400",
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
      minWidth: currentSize.minWidth,
      position: "relative",
      overflow: "hidden",
      transform: isPressed ? "scale(0.98)" : "scale(1)",
      boxShadow: isPressed
        ? "0 2px 8px rgba(139, 115, 85, 0.2)"
        : "0 4px 12px rgba(139, 115, 85, 0.15)",
      opacity: disabled ? 0.6 : 1,
      outline: "none",
      userSelect: "none",
      ...style,
    };
  };

  const iconStyles: CSSProperties = {
    fontSize: size === "small" ? "18px" : size === "large" ? "24px" : "20px",
    filter: "grayscale(20%)",
    transform: isPressed ? "scale(1.1)" : "scale(1)",
    transition: "transform 0.15s ease",
    flexShrink: 0,
  };

  const textStyles: CSSProperties = {
    flex: 1,
    textAlign: "center",
    letterSpacing: "0.5px",
  };

  const rippleStyles: CSSProperties = {
    position: "absolute",
    borderRadius: "50%",
    backgroundColor: "rgba(139, 115, 85, 0.3)",
    width: "20px",
    height: "20px",
    pointerEvents: "none",
    animation: "ripple-animation 0.6s ease-out",
  };

  const pressOverlayStyles: CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      "radial-gradient(circle, rgba(139, 115, 85, 0.1) 0%, transparent 70%)",
    opacity: isPressed ? 1 : 0,
    transition: "opacity 0.15s ease",
    pointerEvents: "none",
    borderRadius: "50px",
  };

  return (
    <div style={{ position: "relative", width: "100%" }} className={className}>
      <style>
        {`
          @keyframes ripple-animation {
            0% {
              transform: scale(0);
              opacity: 1;
            }
            100% {
              transform: scale(10);
              opacity: 0;
            }
          }
          
          .dynamic-button:hover:not(:disabled) {
            background-color: ${
              variant === "primary" ? "#F0DCC5" : "rgba(139, 115, 85, 0.05)"
            } !important;
          }
          
          .dynamic-button:active:not(:disabled) {
            transform: scale(0.98) !important;
          }

          .dynamic-button:focus {
            outline: 2px solid rgba(139, 115, 85, 0.5);
            outline-offset: 2px;
          }
        `}
      </style>

      <button
        className="dynamic-button"
        style={getButtonStyles()}
        onClick={handleClick}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        disabled={disabled}
        type="button"
      >
        <span style={iconStyles}>{icon}</span>
        <span style={textStyles}>{text}</span>

        {/* Ripple effects */}
        {ripples.map((ripple: Ripple) => (
          <span
            key={ripple.id}
            style={{
              ...rippleStyles,
              left: ripple.x - 10,
              top: ripple.y - 10,
            }}
          />
        ))}

        {/* Press overlay */}
        <div style={pressOverlayStyles} />
      </button>
    </div>
  );
};
