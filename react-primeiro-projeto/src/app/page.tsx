"use client"

import { useState } from "react";


const Page = () => {

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center text-3xl">
      <input 
        type="text"
        placeholder="Nome"
        className="border border-black p-3 text-2xl text-black rounded-md mb-3" />
      <input 
        type="text"
        placeholder="Sobrenome"
        className="border border-black p-3 text-2xl text-black rounded-md mb-3" />

      <p>Meu nome é:</p>
      <p>...</p>
    </div>
  );
}

export default Page;