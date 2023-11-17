"use client"

import { useState } from "react";
import { TodoItem } from "./types/TodoItem";
import { Input } from "postcss";


const Page = () => {
  const [itemInput, setItemInput] = useState('');
  const [list, setList] = useState<TodoItem[]>([
    {label: 'Fazer dever de casa', checked: true },
    {label: 'Comprar o bolo', checked: false }
  ]);

  const handleAddButton = () => {
    if(itemInput.trim() === '') return;

    setList([...list, { label: itemInput, checked: false}]);
    setItemInput('')
  }

  const deleteItem = (index: number) => {
    setList(
      list.filter((item, key) => key !== index));
  }

  const toggleItem = (index: number) => {
    let newList = [...list];
    newList[index].checked = !newList[index].checked;

    setList(newList);
  }
  

 return (
  <div className="w-screen h-screen flex flex-col items-center text-2xl">
    <h1 className="text-4xl mt-5">Lista de Tarefas</h1>

    <div className="flex w-full max-w-lg my-3 p-4 rounded-md bg-gray-700 border-2 border-gray-500 text-white">
      <input 
        type="text" 
        placeholder="o que deseja fazer?"
        className="flex-1 border border-black p-3 text-2xl text-black rounded-md mr-3"
        value={itemInput}
        onChange={e => setItemInput(e.target.value)}/>
        <button onClick={handleAddButton}>Adicionar</button>
    </div>

    <p className="my-4">{list.length}Itens na lista</p>

    <ul className="w-full max-w-lg list-disc pl-5">
      {list.map((item, index) => (
        <li key={index}>
          <input onClick={() => toggleItem(index)} type="checkbox" checked= {item.checked} className="w-6 h-6 mr-3" />
          { item.label } - <button onClick={() => deleteItem (index)} className="hover:underline"> [ deletar ]</button></li>
      ))}

    </ul>

  </div>
 );
}

export default Page;