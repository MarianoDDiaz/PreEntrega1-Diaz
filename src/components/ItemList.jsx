import React from "react";
import Item from "./Item";

const ItemList = ({ productos }) => {
  return (
    <>
      {productos.map((p) => {
        return (
          <Item
            key={p.id}
            id={p.id}
            image={p.image}
            nombre={p.nombre}
            description={p.description}
            stock={p.stock}
            precio={p.precio}
          />
        );
      })}
    </>
  );
};

export default ItemList;
