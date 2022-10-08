import React, { useContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import Chats from "./Chats";
import { ChatContext } from "../context/ChatContext";

const Sidebar = () => {
  const { data } = useContext(ChatContext);
  const [isUserSelected, setIsUserSelected] = useState(false);

  useEffect(() => {
    data?.chatId !== "null"
      ? setIsUserSelected(true)
      : setIsUserSelected(false);
  }, [data]);

  return (
    <div className={`sidebar ${isUserSelected ? "hide" : ""}`}>
      <Navbar />
      <Search />
      <Chats />
    </div>
  );
};

export default Sidebar;
