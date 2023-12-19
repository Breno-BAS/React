"use client";

import { Header } from "./components/Header";
import { CountProvider } from "./contexts/CountContext";

const Page = () => {

  return (
    <div className="mx-auto container">
      <CountProvider>
        <Header/>
      </CountProvider>
    </div>
  );
};

export default Page;
