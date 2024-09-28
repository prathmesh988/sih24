import React from "react";
import NavSearch from "./NavSearch";
function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex ">
      <NavSearch />
      <div className=" w-[80%] h-[100vh] overflow-auto">{children}</div>
    </div>
  );
}

export default Wrapper;
