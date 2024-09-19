import { useCallback, useState } from "react";
import update from "immutability-helper";
import Card from "../Card/Card";
function RangeList() {
  const [cards, setCards] = useState([
    {
      id: 1,
      text: "Content 1",
    },
    {
      id: 2,
      text: "Content 2",
    },
    {
      id: 3,
      text: "Content 3",
    },
  ]);
  const handleMoveCard = useCallback((dragIndex, hoverIndex) => {
    setCards((oldCards) => {
      return update(oldCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, oldCards[dragIndex]],
        ],
      });
    });
  });

  const renderCard = useCallback((card, index) => (
    <Card
      key={card.id}
      id={card.id}
      index={index}
      text={card.text}
      handleMoveCard={handleMoveCard}
    />
  ));
  return <div>{cards.map((card, index) => renderCard(card, index))}</div>;
}

export default RangeList;
