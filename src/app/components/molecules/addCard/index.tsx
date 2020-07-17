import * as React from "react";
import TextArea from "../../atoms/textarea";
import "./styles.scss";
import Button from "../../atoms/button";
import Typography from "../../atoms/typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import addCardCosmos from "./addCard.fixture";
import { strings } from "../../variables/constants";

export interface addCardInterface {
  cancelCard?: () => void;
  addCard?: () => void;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const AddCard = ({ cancelCard, addCard, onChange }: addCardInterface) => {
  return (
    <div className="addCardMolecule">
      <TextArea
        ph={strings.ADD_CARD_PLACEHOLDER}
        className=""
        onChange={onChange}
      />
      <div className="btn-grp">
        <Button className="btn" onClick={addCard}>
          <Typography
            label={strings.ADD_CARD_BUTTON}
            tag="span"
            fontColor="white"
            fontSize="small"
            fontWeight="400"
          />
        </Button>
        <Button className="cross" onClick={cancelCard}>
          <FontAwesomeIcon icon={faTimes} />
        </Button>
      </div>
    </div>
  );
};

export default AddCard;
