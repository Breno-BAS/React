"use client"

import { useEffect, useState } from "react";

const Page = () => {
  const [name, setName] = useState('Breno');

  useEffect(() => {
    console.log('Rodou o effect')
  });


  return(
    <div className="">
      <p>Meu nome é {name}</p>

      <button onClick={() => {setName('Sarah')}} className="">Mudar para Sarah</button>
      <button onClick={() => {setName('Jonas')}} className="">Mudar para Jonas</button>
    </div>
  );
}

export default Page;