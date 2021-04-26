import React, { useState, useEffect } from "react";

function Item({ match }) {
  useEffect(() => {
    fetchItem();
    console.log(match);
  }, []);

  const [item, setItem] = useState({});

  const fetchItem = async () => {
    const data = await fetch(
      `https://fakestoreapi.com/products/${match.params.id}`
    );
    const item = await data.json();
    setItem(item);
  };

  return (
    <div>
      <h1>{item.title}</h1>
      <img alt={("Image for item", item.id)} src={item.image}></img>
    </div>
  );
}

export default Item;
