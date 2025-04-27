import React from "react";
import Button from "@mui/material/Button";

interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  variant?: "text" | "contained" | "outlined"; // Opciones de MUI
  color?: "primary" | "secondary" | "success" | "error"; // Colores de MUI
}

const MuiButton: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
  variant = "contained",
  color = "primary",
}) => {
  return (
    <Button variant={variant} color={color} onClick={onClick} disabled={disabled}>
      {label}
    </Button>
  );
};

export default MuiButton;