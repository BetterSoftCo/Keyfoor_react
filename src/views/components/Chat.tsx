import React, { useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import {
  ArrowCircleRight,
  Camera,
  Gramerly,
  GroupDot,
  GroupDotWhite,
  Microphone,
} from "../../assets";

export type IProps = {
  state: any;
};

const Chat: React.FC<IProps> = ({ state }) => {
  const params = useParams();
  const [list, setList] = useState(state);
  const [isShow, setShow] = useState(false);

  const location = useLocation().pathname.includes("group")
    ? "group"
    : "friends";
  const username = params.username;
  let filtered;
  let messages;
  if (username) {
    filtered = list[location].find((item: any) => item.username == username);
    messages = filtered.messages;
  }
  if (!username) return <div></div>;
  return (
    <div className="mt-4 chat-Containr">
      <div
        className={
          location === "group"
            ? "chat-Nav d-flex flex-row align-items-center justify-content-between"
            : "chat-Nav d-flex flex-row align-items-center justify-content-between"
        }
      >
        <div className="d-flex flex-row align-items-center me-2">
          <Link to="/chat" className="back-Link">
            <img src={ArrowCircleRight} alt="arrrowRight" />
          </Link>
          <div className="d-flex flex-row align-items-center">
            <img
              src={filtered.avatar}
              alt={filtered.name}
              className="mx-2 avatar-Img"
            />
            <span>{filtered.name}</span>
          </div>
        </div>
        {location === "group" ? (
          <Link to="/group/setting">
            <button className={isShow ? "d-none" : "open-Options-Btn mx-2"}>
              <img src={GroupDotWhite} />
            </button>
          </Link>
        ) : (
          <button className={isShow ? "d-none" : "open-Options-Btn mx-2"}>
            <img src={GroupDotWhite} />
          </button>
        )}
      </div>
      <div className="messages my-3 px-1 overflow-auto">
        {messages &&
          messages.map((message: any) => (
            <div
              key={message.id}
              className="d-flex flex-column align-items-center justifty-content-center"
            >
              {message.date ? (
                <span className="date-Chat my-3">{message.date}</span>
              ) : null}
              <div
                className={
                  message.type === "recive"
                    ? "recive-Message-Conteiner"
                    : "send-Message-Conteiner"
                }
              >
                <div
                  className={
                    message.type === "recive"
                      ? "recive-Message"
                      : "send-Message"
                  }
                >
                  {message.text}
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="chat-Input d-flex flex-row align-items-center justify-content-around">
        <img src={Gramerly} />
        <input type="text" placeholder="پیام" />
        <img src={Camera} />
        <img src={Microphone} />
      </div>
    </div>
  );
};

export default Chat;
