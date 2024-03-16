import React, { useState } from "react";
import ComponentC from "./ComponentC";

// Create React context
export const UserContext = React.createContext();
export const StoreContext = React.createContext();

export default function ContextApp() {

  return (
    <>
      <h3>Context App</h3>
      <UserContext.Provider value={'Ashish'}>
        <StoreContext.Provider value={'Shopify Store'}>
          <ComponentC />
        </StoreContext.Provider>
      </UserContext.Provider>
    </>
  );

}