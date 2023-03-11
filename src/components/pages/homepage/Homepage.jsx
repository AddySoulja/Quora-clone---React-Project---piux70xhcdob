import React, { useState } from "react";
import Navbar from "../../navbar/Navbar";
import Dashboard from "../dashboard/Dashboard";
const Homepage = () => {
  const [keyword, setKeyword] = useState("");
  return (
    <>
      <Navbar setKeyword={setKeyword} />
      <Dashboard keyword={keyword} />
    </>
  );
};

export default Homepage;
