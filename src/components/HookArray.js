import { useState } from "react";

const HooksArray = () => {
  const [items, setItem] = useState([]);

  const addItemHandler = () => {
    setItem([
      ...items,
      { id: items.length, title: Math.floor(Math.random() * 10) },
    ]);
  };
  return (
    <div>
      <button onClick={addItemHandler}>add Item</button>
      <div>
        {items.map((item) => {
          return <h3 key={item.id}>{item.title}</h3>;
        })}
      </div>
    </div>
  );
};

export default HooksArray;
