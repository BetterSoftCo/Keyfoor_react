import { NavLink } from "react-router-dom";
import { BaseComponent } from "utilities_js";

export interface IProps {
  location: any;
  searched: any[];
}
export interface IState {}
class AllChats extends BaseComponent<IProps, IState> {
  render() {
    const location = this.props.location;
    return (
      <div className="friends-Container d-flex flex-row align-items-center">
        <div className="w-100 group-List all-Chats">
          {this.props.searched.map((item: any) => (
            <div
              className={`d-flex flex-row  align-items-center chat ${
                location.includes(item.username)
                  ? "group-Active justify-content-start"
                  : "justify-content-between"
              }`}
              key={`${item.id} ${item.to}`}
            >
              <NavLink
                to={`/chat/${item.isJoin ? "group" : "friends"}/${
                  item.username
                }`}
                className={({ isActive = String }) =>
                  isActive
                    ? "group-Active text-decoration-none"
                    : "text-decoration-none"
                }
              >
                <div
                  className={` d-flex flex-row justify-content-between align-items-center ${
                    item.isJoin ? "avatar-Group" : "avatar-Friends"
                  }`}
                >
                  <img
                    src={item.avatar}
                    className={
                      item.isSeen
                        ? "mx-3"
                        : `mx-3 ${
                            item.isJoin ? "avatar-Chat" : "avatar-Friend-Chat"
                          }`
                    }
                    alt="avatar"
                  />
                  <div className="d-flex flex-column justify-content-between align-items-start">
                    <div className="d-flex flex-row justify-content-between align-items-center group-name">
                      <span>{item.name}</span>
                      {item.isSeen ? null : (
                        <span
                          className={`mx-2 ${
                            item.isJoin ? "numOfNotSeenGroup" : "numOfNotSeen"
                          }`}
                        >
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
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default AllChats;
