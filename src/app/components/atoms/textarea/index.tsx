import * as React from "react";
import "./styles.scss";

export interface textAreaInterface {
  className?: string;
  ph: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea = ({ className, ph, onChange }: textAreaInterface) => {
  return (
    <textarea
      className={`textareaAtom ${className}`}
      placeholder={ph}
      onChange={onChange}
    />
  );
};

export default TextArea;
