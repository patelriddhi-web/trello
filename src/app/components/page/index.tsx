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
    setlist([...list, { cardTitle: inputValue, id: list.length, cards: [] }]);
    setinputValue("");
  };

  const addSubCard = (id: number) => (title: string) => {
    let newList = [...list];
    let tempObj = newList[id];

    tempObj.cards.push({
      subCardTitle: title,
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

  let closeCard = (id: number) => {};

  return (
    <div className="page-container">
      <div className="list-container">
        {Array.isArray(list) &&
          list.map((item, index) => (
            <List
              key={index}
              list={list}
              id={item.id}
              title={item.cardTitle}
              onClick={() => {
                changeCardData(index);
              }}
              cancel={() => closeCard(index)}
              addSubCard={addSubCard(index)}
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
