import { BaseComponent } from "utilities_js";
import { ImgAvatar, PeopleBlack } from "../../assets";

interface IProps {
  
}
interface IState {
  isCheck: string;
}

class RoomController extends BaseComponent<IProps, IState> {
  state = {
    isCheck: "",
  }
}
export default RoomController;
