import React, { useState } from "react";
import "./styles.scss";
import Typography from "../../atoms/typography";
import AddButton from "../../molecules/addButton";
import AddCard from "../../molecules/addCard";
import SaveCard from "../../molecules/saveCard";
import { strings } from "../../variables/constants";

export interface listItem {
  id: string;
  subCardTitle: string;
}

export interface list {
  listTitle: string;
  cards: Array<listItem>;
  id: number;
}

export interface listInterface {
  title: string;
  onClick?: () => void;
  cancel?: () => void;
  addSubCard?: (title: string, uniqueId: string) => void;
  list?: Array<list>;
  id?: number;
  onDragStart?: (
    event: React.DragEvent<HTMLDivElement>,
    item: Object,
    index: number
  ) => void;
  onDrop?: (event: React.DragEvent<HTMLDivElement>, index: number) => void;
}

const List = ({
  title,
  addSubCard,
  onClick,
  cancel,
  list,
  id,
  onDragStart,
  onDrop,
}: listInterface) => {
  const [save, setsave] = useState(false);
  const [inputData, setinputData] = useState("");

  let add = () => {
    setsave(false);
    setinputData("");
  };

  let addNewCard = () => {
    setsave(true);
  };

  let getUserData = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setinputData(e.target.value);
  };

  let allowDrop = (event: Event) => {
    event.preventDefault();
  };

  return (
    <div
      className="listContainer"
      id={`list ${id}`}
      onDragOver={() => allowDrop(event)}
      onDrop={
        list[id].cards.length == 0
          ? (event) => {
              onDrop(event, null);
            }
          : null
      }
    >
      <Typography label={title} fontSize="avg" fontWeight="avg-bold" />
      <div>
        {Array.isArray(list) && list.length
          ? list[id].cards.map((item: listItem, index: number) => (
              <React.Fragment key={item.id}>
                <SaveCard
                  value={item.subCardTitle}
                  onDragStart={(event) => {
                    onDragStart(event, item, index);
                  }}
                  id={item.id}
                  onDrop={(event) => onDrop(event, index)}
                  onDragOver={() => allowDrop(event)}
                />
              </React.Fragment>
            ))
          : null}
      </div>

      {save ? (
        <AddCard
          cancelCard={cancel}
          addCard={() => {
            add();
            onClick();
            addSubCard(
              inputData,
              "_" + Math.random().toString(36).substr(2, 9)
            );
          }}
          onChange={getUserData}
        />
      ) : (
        <AddButton title={strings.ADD_ANOTHER_CARD} onClick={addNewCard} />
      )}
    </div>
  );
};

export default List;
