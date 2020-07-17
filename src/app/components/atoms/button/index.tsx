/* @flow */
import * as React from "react";
import "./styles.scss";

export interface buttonInterface {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button = ({ children, className, onClick }: buttonInterface) => (
  <button className={`btn ${className}`} onClick={onClick}>
    {children}
  </button>
);

export default Button;
