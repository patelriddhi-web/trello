import * as React from "react";
import "./styles.scss";
import Typography from "../../atoms/typography";

export interface SaveCardInterface {
  value: string;
  onDragStart: (event: React.DragEvent<HTMLDivElement>) => void;
  id?: string;
  onDragOver?: (event: React.DragEvent<HTMLDivElement>) => void;
  onDrop?: (event: React.DragEvent<HTMLDivElement>) => void;
}

const SaveCard = ({
  value,
  onDragStart,
  id,
  onDragOver,
  onDrop,
}: SaveCardInterface) => {
  return (
    <div
      className="saveCardMolecule"
      draggable="true"
      onDragStart={onDragStart}
      id={id}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      <Typography label={value} tag="span" fontSize="small" />
    </div>
  );
};

export default SaveCard;
