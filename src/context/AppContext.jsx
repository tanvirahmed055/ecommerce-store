import React, { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [searchText, setSearchText] = useState("");

  console.log("searchText =", searchText);

  return (
    <AppContext.Provider
      value={{
        searchText,
        setSearchText,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
