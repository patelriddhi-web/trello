import React, { useState } from "react";
import "./styles.scss";
import Typography from "../../atoms/typography";
import AddButton from "../../molecules/addButton";
import AddCard from "../../molecules/addCard";
import SaveCard from "../../molecules/saveCard";
import { strings } from "../../variables/constants";

export interface listInterface {
  title: string;
  onClick?: () => void;
  cancel?: () => void;
  addSubCard?: (title: string) => void;
  list: Array<any>;
  id?: string;
}

const List = ({
  title,
  addSubCard,
  onClick,
  cancel,
  list,
  id,
}: listInterface) => {
  const [save, setsave] = useState(false);
  const [cardList, setcardList] = useState([]);
  const [inputData, setinputData] = useState("");

  let add = () => {
    console.log("list", list);
    setsave(false);
    setcardList([...cardList, { title: inputData, id: cardList.length }]);
    setinputData("");
  };

  let addNewCard = () => {
    setsave(true);
  };

  let getUserData = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setinputData(e.target.value);
  };

  let dragStart = (event: any) => {
    event.dataTransfer.setData(
      "item",
      JSON.stringify(cardList[event.target.id])
    );
    console.log("list id", id);
    console.log("card id", event.target.id);
    event.target.style.opacity = "0.4";
    setTimeout(() => {
      setcardList(cardList.splice(event.target.id + 1, 1, []));
      let tempArrayObj = [...list][id];
      let newList = [...list];
      console.log(cardList);
    }, 2000);
  };

  let dropElement = (event: any) => {
    console.log("droping");
    // event.preventDefault();
    var data = event.dataTransfer.getData("item");
    let temp = JSON.parse(data);
    console.log(temp);
    // event.target.appendChild(document.getElementById(data));
    setcardList([...cardList, { title: temp.title, id: cardList.length }]);
    console.log(cardList);
  };
  let allowDrop = (event: any) => {
    event.preventDefault();
  };
  return (
    <div
      className="listContainer"
      id={`list ${id}`}
      onDrop={() => dropElement(event)}
      onDragOver={() => allowDrop(event)}
    >
      <Typography label={title} fontSize="avg" fontWeight="avg-bold" />
      <div>
        {Array.isArray(cardList) && cardList.length
          ? cardList.map((item, index) => (
              <SaveCard
                value={item.title}
                onDragStart={() => dragStart(event)}
                id={item.id}
              />
            ))
          : null}
      </div>

      {save ? (
        <AddCard
          cancelCard={cancel}
          addCard={() => {
            add();
            onClick();
            addSubCard(inputData);
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
