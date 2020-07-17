import * as React from "react";
import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Typography from "../../atoms/typography";

export interface addButtonInterface {
  title: string;
  className?: string;
  onClick?: () => void;
}

const AddButton = ({ title, className, onClick }: addButtonInterface) => {
  return (
    <div className="addButtonMolecule">
      <button className={`add ${className}`} onClick={onClick}>
        <div>
          <FontAwesomeIcon icon={faPlus} />
          <Typography
            label={title}
            tag="span"
            className="add-txt"
            fontSize="small"
            fontColor="gray"
          />
        </div>
      </button>
    </div>
  );
};

export default AddButton;
