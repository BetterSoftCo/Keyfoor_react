import { NavLink } from "react-router-dom";
import { CloseCircle, GroupDot, Trash, VolumeSlash } from "../../../../assets";
import ChatController from "../../../controllers/ChatController";

let f: any;
class Friends extends ChatController {

  render() {
    const location = this.props.location.pathname;
    console.log(this.state.friendsSearch);
    return (
      <div className="friends-Container d-flex flex-row align-items-center">
        <div className="w-100">
          {this.state.friendsSearch.map((item: any) => (
            <div
              className={`d-flex flex-row  align-items-center chat ${
                location.includes(item.username)
                  ? "chat-Active justify-content-start"
                  : "justify-content-between"
              }`}
              key={item.id}
            >
              <NavLink
                to={`/chat/friends/${item.username}`}
                className={({ isActive = String }) =>
                  isActive ? "active-Chat-Link" : "text-decoration-none"
                }
              >
                <div className=" d-flex flex-row justify-content-between align-items-center avatar-Friends">
                  <img
                    src={item.avatar}
                    className={item.isSeen ? "mx-3" : "mx-3 avatar-Friend-Chat"}
                    alt="avatar"
                  />
                  <div className="d-flex flex-column justify-content-between align-items-start">
                    <div className="d-flex flex-row justify-content-between align-items-center group-name">
                      <span>{item.name}</span>
                      {item.isSeen ? null : (
                        <span className="numOfNotSeen mx-2">
                          {item.numOfNotSeen}
                        </span>
                      )}
                    </div>
                    <span className="messageText">
                      {item.messages.at(-1).text}
                    </span>
                  </div>
                </div>
              </NavLink>
              <button
                onClick={() => this.setState({ isShow: item.id })}
                className={
                  this.state.isShow === item.id ? "d-none" : "open-Options-Btn"
                }
              >
                <img src={GroupDot} alt="groupDot" />
              </button>
              <div
                className={
                  this.state.isShow === item.id
                    ? "options-Container fade-in mx-2"
                    : "d-none"
                }
              >
                {" "}
                <button>
                  <img src={VolumeSlash} alt="volume" />
                </button>
                <button>
                  <img src={Trash} alt="trash" />
                </button>
                <button onClick={() => this.setState({ isShow: 0 })}>
                  <img src={CloseCircle} alt="close-circle" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Friends;
