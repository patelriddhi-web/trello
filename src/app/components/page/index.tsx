import React, { useState } from "react";
import List from "../organisms/list";
import AddButton from "../molecules/addButton";
import "./styles.scss";
import AddList from "../molecules/addList";

import { strings } from "../variables/constants";

const Page = () => {
  const [clickList, setclickList] = useState(false);
  const [list, setlist] = useState([]);
  const [inputValue, setinputValue] = useState("");

  let addList = () => {
    setclickList(true);
  };

  let saveList = () => {
    setclickList(false);
    setlist([...list, { listTitle: inputValue, id: list.length, cards: [] }]);
    setinputValue("");
  };

  const addSubCard = (id: number) => (title: string, uniqueId: string) => {
    let newList = [...list];
    let tempObj = newList[id];

    tempObj.cards.push({
      subCardTitle: title,
      id: uniqueId,
    });
    setlist(newList);
  };

  let getValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setinputValue(e.target.value);
  };

  let changeCardData = (id: number) => {
    let tempArrayObj = [...list][id];
    let newList = [...list];
    newList[id] = tempArrayObj;
  };
  console.log("list", list);
  let closeCard = (id: number) => {};

  let dragStart = (event: React.DragEvent<HTMLDivElement>, index: number) => (
    event: any,
    item: Object,
    id: number
  ) => {
    event.dataTransfer.setData("card", JSON.stringify(item));
    event.dataTransfer.setData("cardIndex", id);
    event.dataTransfer.setData("listIndex", index);
  };

  let onDrop = (listIndex: number) => (event: any, cardIndex: number) => {
    console.log("dropping...");
    console.log("cardindex", cardIndex);
    console.log("listIndex", listIndex);

    let draggedItem = JSON.parse(event.dataTransfer.getData("card"));
    let droppedList = event.dataTransfer.getData("listIndex");
    let droppedCard = event.dataTransfer.getData("cardIndex");

    let updatedList = [...list];
    let obj = updatedList[droppedList];
    obj.cards.splice(droppedCard, 1);
    setlist(updatedList);

    let latestList = [...list];
    let newObj = latestList[listIndex];
    if (cardIndex == null) {
      console.log("comig...");
      newObj.cards.push(draggedItem);
    } else {
      newObj.cards.splice(cardIndex + 1, 0, draggedItem);
    }

    setlist(latestList);
  };
  return (
    <div className="page-container">
      <div className="list-container">
        {Array.isArray(list) &&
          list.map((item, index) => (
            <List
              key={index}
              list={list}
              id={item.id}
              title={item.listTitle}
              onClick={() => {
                changeCardData(index);
              }}
              cancel={() => closeCard(index)}
              addSubCard={addSubCard(index)}
              onDragStart={(event) => dragStart(event, index)}
              onDrop={onDrop(index)}
            />
          ))}
      </div>
      {clickList ? (
        <AddList onClick={saveList} onChange={getValue} />
      ) : (
        <AddButton
          title={strings.ADD_ANOTHER_LIST}
          className="list-btn"
          onClick={() => addList()}
        />
      )}
    </div>
  );
};

export default Page;
