import { Link } from "react-router-dom";
import { Theme } from "utilities_js";
import {
  ArrowCircleRight,
  Camera,
  Gramerly,
  GroupDot,
  Microphone,
} from "../../../assets";
import { LabelButton } from "../../components/label_button";
import ChatController from "../../controllers/ChatController";
import Layout from "../../layout/Layout";

class ChatRoom extends ChatController {
  render() {
    let messages = this.state.group[1].messages;
    return (
      <Layout>
        <section className="chat-Room-Page d-flex flex-column align-items-start justify-content-start ">
          <div className="chat-Room-Nav my-4 d-flex flex-row align-items-center justify-content-between mx-auto">
            <Link to="/">
              <LabelButton
                type={Theme.dark}
                minHeight="42px"
                fontSize="14px"
                borderRadius=""
                className=""
                backgroundColor="transparent"
                color="#787878"
                border=""
                boxShadow="none"
                children={
                  <div>
                    <img src={ArrowCircleRight} alt="arrow" />
                  </div>
                }
              />
            </Link>
            <span className="nav-text ">نام اتاق بازی</span>
            <Link to="/room/setting" className="text-decoration-none">
              <button className="open-Options-Btn">
                <img src={GroupDot} alt="groupDot" />
              </button>
            </Link>
          </div>
          <div className="mt-1 mx-auto chat-Containr">
            <button className="start-Game-Btn mx-auto">شروع بازی</button>
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
        </section>
      </Layout>
    );
  }
}

export default ChatRoom;
