//1. Import createContext
import React from "react";
import { createContext } from "react";
import { ComponentC } from "./ComponentC.js";

// 2. Create instance of createContext

export const Data = createContext();
export const Data1 = createContext();

export function Create() {
  const name = "John Smith";
  const age = 20;

  return (
    // 3. Wrap our Component into Provider Component
    <>
      <Data.Provider value={name}>
        <Data1.Provider value={age}>
          <ComponentC />
        </Data1.Provider>
      </Data.Provider>
    </>
  );
}
