"use client"

import { useState } from "react";
import { Square } from "./components/Square";

const Page = () => {
  const [show, setShow] = useState(false);

  return(
    <div className="">
      <button onClick={() => setShow(!show)}>Mostrar/Ocultar</button>
      {show && <Square />}
    </div>     
  );
}

export default Page;