import { Link } from "react-router-dom";
import { CloseCircle, GroupDot, Trash, VolumeSlash } from "../../../../assets";
import ChatController from "../../../controllers/ChatController";

class Group extends ChatController {
  render() {
    const myusername = this.props.myusername;
    const location = this.props.location.pathname;
    return (
      <div className="group-Conteiner d-flex flex-column align-items-center">
        <div className="w-100 d-flex align-items-center  mb-4 mt-3 create-group">
          <Link
            to="/creategroup"
            className="d-flex align-items-center justify-content-center "
          >
            ایجاد گروه
          </Link>
        </div>
        <div className="w-100 group-List">
          {myusername === false
            ? this.state.userGroups.map((item: any) => {
                let button;
                if (item.isJoin) {
                  button = (
                    <button
                      onClick={() => this.setState({ isShowGroup: item.id })}
                      className={
                        this.state.isShowGroup === item.id
                          ? "d-none"
                          : "open-Options-Btn ms-3"
                      }
                    >
                      <img src={GroupDot} alt="groupDot" />
                    </button>
                  );
                } else if (item.isRequest) {
                  button = (
                    <button
                      className={
                        this.state.isShowGroup === item.id
                          ? "d-none"
                          : "unreq-Btn ms-3"
                      }
                    >
                      لغو درخواست
                    </button>
                  );
                } else if (!item.isJoin && !item.isRequest) {
                  button = <button className="req-Btn ms-3">درخواست</button>;
                }
                return (
                  <div className="w-100 d-flex flex-row justify-content-between align-items-center chat">
                    <Link to="#" key={item.id} className="text-decoration-none">
                      <div className=" d-flex flex-row justify-content-between align-items-center avatar-Group">
                        <img
                          src={item.avatar}
                          className={item.isSeen ? "mx-3" : "mx-3 avatar-Chat"}
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
                    </Link>
                    {button}
                    <div
                      className={
                        this.state.isShowGroup === item.id
                          ? "options-Container fade-in ms-3"
                          : "d-none"
                      }
                    >
                      <button onClick={() => this.setState({ isShowGroup: 0 })}>
                        <img src={CloseCircle} alt="close-circle" />
                      </button>
                      <button>
                        <img src={Trash} alt="trash" />
                      </button>
                      <button>
                        <img src={VolumeSlash} alt="volume" />
                      </button>
                    </div>
                  </div>
                );
              })
            : this.state.group.map((item: any) => (
                <div
                  className={` d-flex flex-row justify-content-between align-items-center chat ${
                    location.includes(item.username) ? "group-Active" : null
                  }`}
                >
                  <Link
                    to={`/chat/group/${item.username}`}
                    key={item.id}
                    className="text-decoration-none "
                  >
                    <div className=" d-flex flex-row justify-content-between align-items-center avatar-Group">
                      <img
                        src={item.avatar}
                        className={item.isSeen ? "mx-3" : "mx-3 avatar-Chat"}
                        alt="avatar-chat"
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
                  </Link>
                  <button
                    onClick={() => this.setState({ isShowGroup: item.id })}
                    className={
                      this.state.isShowGroup === item.id
                        ? "d-none"
                        : "open-Options-Btn ms-3"
                    }
                  >
                    <img src={GroupDot} alt="groupDot" />
                  </button>
                  <div
                    className={
                      this.state.isShowGroup === item.id
                        ? "options-Container fade-in mx-2"
                        : "d-none"
                    }
                  >
                    <button onClick={() => this.setState({ isShowGroup: 0 })}>
                      <img src={CloseCircle} alt="close-circle" />
                    </button>
                    <button>
                      <img src={Trash} alt="trash" />
                    </button>
                    <button>
                      <img src={VolumeSlash} alt="volume" />
                    </button>
                  </div>
                </div>
              ))}
        </div>
      </div>
    );
  }
}

export default Group;
