"use client"

import { useReducer, useState } from "react";
import { Item } from "./types/item";
import { listReducer } from "./reducers/listReducer";


const Page = () => {
  const [list, dispatch] = useReducer(listReducer, []);

  const handleAddClick = () => {
    dispatch ({
      type: 'add',
      payload: {
        text: 'Novo item'
      }
    });
  }
  return(
    <div className="">
      <button onClick={handleAddClick}>Adicionar</button>
    </div>     
  );
}

export default Page;