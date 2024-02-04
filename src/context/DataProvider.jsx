import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";

export const DataContext = createContext(null);

const DataProvider = () => {
  const [user, setUser] = useState({ username: "", name: "" });
  return (
    <DataContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      <Outlet />
    </DataContext.Provider>
  );
};

export default DataProvider;
