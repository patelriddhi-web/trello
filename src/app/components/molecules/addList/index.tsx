import * as React from "react";
import "./styles.scss";
import Button from "../../atoms/button/index";
import Typography from "../../atoms/typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import TextBox from "../../atoms/textbox/index";
import { strings } from "../../variables/constants";
export interface addListInterface {
  onClick: () => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const AddList = ({ onClick, onChange }: addListInterface) => {
  return (
    <div className="addListMolecule">
      <TextBox
        ph={strings.ADD_LIST_PLACEHOLDER}
        className="input-box"
        type="text"
        onChange={onChange}
      />
      <div className="btn-grp">
        <Button className="btn" onClick={onClick}>
          <Typography
            label={strings.ADD_LIST_BUTTON}
            tag="span"
            fontColor="white"
            fontSize="small"
            fontWeight="400"
          />
        </Button>
        <Button className="cross">
          <FontAwesomeIcon icon={faTimes} />
        </Button>
      </div>
    </div>
  );
};

export default AddList;
