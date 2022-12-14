import React, { useContext } from "react";
import Cam from "../img/cam.png";
import Add from "../img/add.png";
import More from "../img/more.png";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { data, dispatch } = useContext(ChatContext);
  const resetUser = () => dispatch({ type: "RESET_USER" });

  return data.chatId !== "null" ? (
    <div className="chat">
      <div className="chat-info">
        <div className="user">
          <span onClick={resetUser} className="back-btn">
            Back
          </span>
          <span>{data.user?.displayName}</span>
        </div>
        <div className="chat-icons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  ) : (
    <>
      <div className="chat not-selected">
        <span>Select a user to chat</span>
      </div>
    </>
  );
};

export default Chat;
