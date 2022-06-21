import { RiSearch2Line } from "react-icons/ri";
import { NavLink, Outlet } from "react-router-dom";
import { CloseCircle } from "../../../assets";
import Chat from "../../components/Chat";
import ChatController from "../../controllers/ChatController";
import Layout from "../../layout/Layout";
import AllChats from "./AllChats/AllChats";

class ChatPage extends ChatController {
  componentDidMount() {
    if (window.screen.width > 991 && !window.location.href.includes("group"))
      this.props.navigate(`chat/friends/${this.state.friends[0].username}`);
  }
  render() {
    const location = this.props.location.pathname;
    const username = location.split("/")[3];
    const group = this.state.group;
    const friends = this.state.friends;
    const allChat: any = [...friends, ...group];
    const searchHandler = (e: any) => {
      this.setState({ inputValue: e.target.value });
      if (e.target.value) {
        const filter = allChat.filter(
          (item: any) =>
            item.username
              .toLowerCase()
              .includes(e.target.value.toLowerCase()) ||
            item.name.includes(e.target.value)
        );
        const friendsFilter = filter.filter(
          (item: any) => item.isJoin == undefined
        );
        const groupFilter = filter.filter(
          (item: any) => item.isJoin !== undefined
        );
        console.log(friendsFilter);
        console.log(groupFilter);
        this.setState({
          searched: filter,
          friendsSearch: friendsFilter,
          groupSearch: groupFilter,
        });
      }
    };
    return (
      <Layout>
        <section className="chat-Page d-flex flex-row align-items-start justify-content-start">
          <div className={username ? "chat-List my-4" : "chat-List2  my-4"}>
            <div
              className={`input-Search d-felx align-items-center justify-content-between ${
                this.state.isFocus ? "inputFocused" : null
              } `}
              onFocus={() => this.setState({ isFocus: true })}
              onBlur={() => this.setState({ isFocus: false })}
            >
              {this.state.inputValue !== "" ? (
                <button
                  onClick={() =>
                    this.setState({ isFocus: false, inputValue: "" })
                  }
                >
                  <img src={CloseCircle} alt="close" />
                </button>
              ) : (
                <RiSearch2Line className="icon-search mx-2" />
              )}
              <input
                type="search"
                className="input"
                placeholder="جستجو"
                value={this.state.inputValue}
                onChange={searchHandler}
              />
            </div>
            <div className="w-100  d-flex flex-row justify-content-around align-items-center chat-tabs my-4">
              {this.state.inputValue !== "" ? (
                <NavLink end to="#" className="active-Chat-tabs">
                  همه
                </NavLink>
              ) : null}
              <NavLink
                end
                to={
                  window.screen.width > 991
                    ? `/chat/friends/${this.state.friends[0].username}`
                    : "/chat"
                }
                onClick={() =>
                  this.setState({ isFocus: false, inputValue: "" })
                }
                className={({ isActive = String }) =>
                  (isActive && !this.state.inputValue) ||
                  (location.includes("/friends/") && !this.state.inputValue)
                    ? "active-Chat-tabs"
                    : ""
                }
              >
                دوستان
              </NavLink>
              <NavLink
                to={
                  window.screen.width > 991
                    ? `/chat/group/${this.state.group[0].username}`
                    : "/chat/group"
                }
                onClick={() =>
                  this.setState({ isFocus: false, inputValue: "" })
                }
                className={({ isActive = String }) =>
                  isActive && !this.state.inputValue ? "active-Chat-tabs" : ""
                }
              >
                گروه ها
              </NavLink>
            </div>
            {this.state.inputValue ? (
              <AllChats location={location} searched={this.state.searched} />
            ) : (
              <Outlet />
            )}
          </div>
          <Chat state={this.state} />
        </section>
      </Layout>
    );
  }
}

export default ChatPage;
