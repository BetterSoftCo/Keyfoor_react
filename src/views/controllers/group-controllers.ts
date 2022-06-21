import { BaseComponent } from "utilities_js";
import { ImgAvatar, PeopleBlack } from "../../assets";

interface IProps {
  
}
interface IState {
  isCheck: string;
}

class GroupController extends BaseComponent<IProps, IState> {
  state = {
    isCheck: "",
  }
}
export default GroupController;
