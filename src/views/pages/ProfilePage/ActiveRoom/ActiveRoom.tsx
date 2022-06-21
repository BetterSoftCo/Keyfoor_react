import { BaseComponent } from "utilities_js";
import { RoomCard } from "../../../components/room_card";

export interface IProps {}
export interface IState {}

class ActiveRoom extends BaseComponent<IProps, IState> {
  state = {};

  render() {
    return (
      <div className="row w-100  mt-4 active-Room-Profile">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div className="col-md-6 mb-2" key={item}>
            <RoomCard />
          </div>
        ))}
      </div>
    );
  }
}

export default ActiveRoom;
