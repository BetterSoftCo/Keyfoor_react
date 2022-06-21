import { RiSearch2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Plus } from "../../../assets";
import ChatController from "../../controllers/ChatController";

class AddMember extends ChatController {
  render() {
    const location = this.props.location.pathname;
    console.log(location);
    return (
      <div className="w-100 d-flex flex-column align-items-center ">
        <div className="input-Search d-felx align-items-center justify-content-between my-2 ">
          <RiSearch2Line className="icon-search mx-2" />
          <input
            type="search"
            className="input"
            placeholder="جستجو"
            // onChange={searchHandler}
          />
        </div>
        {this.state.friends.map((friend) => (
          <div
            key={friend.id}
            className="w-100 d-flex flex-row align-items-center justify-content-between py-3 friends"
          >
            <div className="d-flex flex-row align-items-center">
              <img
                src={friend.avatar}
                alt={friend.name}
                className="user-avatar ms-3"
              />
              <div className="d-flex flex-column align-items-start ">
                <span className="name">{friend.name}</span>
                <span className="username">{friend.username}@</span>
              </div>
            </div>
            <button>
              <img src={Plus} />
            </button>
          </div>
        ))}
        <Link
          to={
            location.includes("creategroup")
              ? "/chat/group/spelendor"
              : "/room/chat"
          }
        >
          <button className="create-Room-Btn mt-4">
            {location.includes("creategroup") ? "ایجاد گروه " : "ایجاد اتاق"}
          </button>
        </Link>
      </div>
    );
  }
}

export default AddMember;
