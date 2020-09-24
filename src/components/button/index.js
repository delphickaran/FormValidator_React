import React from "react";
import MaterialButton from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

const Button = ({
  children,
  onClick,
  loading,
  variant,
  className,
  color = "primary",
  ...restProps
}) => {
  return (
    <MaterialButton
      {...restProps}
      disabled={restProps.disabled || loading}
      variant={variant}
      color={color}
      onClick={onClick}
    >
      {loading ? <CircularProgress size={20} thickness={7} /> : children}
    </MaterialButton>
  );
};

export default Button;
