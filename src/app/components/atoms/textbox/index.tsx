import * as React from "react";
import "./styles.scss";

export interface textBoxInterface {
  className?: string;
  type: string;
  ph?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextBox = ({
  className,
  type,
  ph,
  onChange,
  ...rest
}: textBoxInterface) => {
  return (
    <input
      {...rest}
      placeholder={ph}
      type={type}
      className={`text-box-wrapper ${className}`}
      onChange={onChange}
    />
  );
};
export default TextBox;
