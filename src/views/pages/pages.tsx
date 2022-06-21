import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import LoginPage from "./LoginPage/LoginPage";
import ActiveRoom from "./ProfilePage/ActiveRoom/ActiveRoom";
import Group from "./ProfilePage/Group/Group";
import ProfilePage from "./ProfilePage/ProfilePage";
import EditSetting from "./ProfileSettingPage/EditSetting/EditSetting";
import PrivacySetting from "./ProfileSettingPage/PrivacySetting/PrivacySetting";
import ProfileSettingPage from "./ProfileSettingPage/ProfileSettingPage";
import SecuritySetting from "./ProfileSettingPage/SecuritySetting/SecuritySetting";
import SignupPage from "./SignupPage/SignupPage";
import Follower from "./ProfilePage/Follower/Follower";
import Following from "./ProfilePage/Following/Following";
import ChatPage from "./ChatPage/ChatPage";
import Friends from "./ChatPage/Friends/Friends";
import GameDetailPage from "./GameDetailPage/GameDrtailPage";
import AddMember from "./RoomSettingPage/AddMember";
import Honors from "./ProfilePage/Honors/Honors";
import WinLose from "./ProfilePage/Win&Lose/Win&Lose";
import Mahdi_1 from "./Group/Edit";
import MainRoomSetting from "./RoomSettingPage/MainRoomSetting";
import MainGroupSetting from "./GroupSettingPage/MainGroupSetting";
import RoomSettingPage from "./RoomSettingPage/RoomSettingPage";
import GroupSettingPage from "./GroupSettingPage/GroupSettingPage";
import Privacy from "./Room/Privacy";
import Manager from "./Room/Manager";
import AccessManager from "./Room/AccessManager";
import AccessManagerGroup from "./Group/AccessManager";
import ManagerGroup from "./Group/Manager";
import PrivacyGroup from "./Group/Privacy";
import Room from "../components/room";
import Groups from "../components/groups";
import EditRoom from "./Room/Edit";
import EditGroup from "./Group/Edit";
import ChatRoom from "./RoomSettingPage/ChatRoom";

const Pages = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <Routes>
      <Route
        path="/chat/*"
        element={<ChatPage location={location} navigate={navigate} />}
      >
        <Route
          path="group"
          element={<Group myusername={true} location={location} />}
        >
          <Route path=":username" element={<Friends location={location} />} />
        </Route>
        <Route
          path="friends/:username"
          element={<Friends location={location} />}
        />
        <Route path="" element={<Friends location={location} />}></Route>
      </Route>
      <Route path="/room/chat" element={<ChatRoom location={location} />} />
      <Route path="/room/setting" element={<Room />} />
      <Route path="/room/edit" element={<EditRoom />} />
      <Route path="/room/privacy" element={<Privacy />} />
      <Route path="/room/manager" element={<Manager />} />
      <Route path="/room/access-manager" element={<AccessManager />} />
      <Route path="/group/setting" element={<Groups />} />
      <Route path="/groups/edit" element={<EditGroup />} />
      <Route path="/groups/privacy" element={<PrivacyGroup />} />
      <Route path="/groups/manager" element={<ManagerGroup />} />
      <Route path="/groups/access-manager" element={<AccessManagerGroup />} />
      <Route path="/createroom" element={<RoomSettingPage />}>
        <Route path="" element={<MainRoomSetting />} />
        <Route path="addmember" element={<AddMember location={location} />} />
      </Route>
      <Route path="/creategroup" element={<GroupSettingPage />}>
        <Route path="" element={<MainGroupSetting />} />
        <Route path="addmember" element={<AddMember location={location} />} />
      </Route>
      <Route path="/:username/followers" element={<Follower />} />
      <Route path="/:username/followings" element={<Following />} />
      <Route path="/:username" element={<ProfilePage />}>
        <Route
          path=""
          element={<Group myusername={false} location={location} />}
        />
        <Route path="activeroom" element={<ActiveRoom />} />
        <Route path="honors" element={<Honors />} />
        <Route path="win&lose" element={<WinLose />} />
      </Route>
      <Route path="/myusername" element={<ProfilePage />}>
        <Route
          path=""
          element={<Group myusername={true} location={location} />}
        />
        <Route path="activeroom" element={<ActiveRoom />} />
        <Route path="honors" element={<Honors />} />
        <Route path="win&lose" element={<WinLose />} />
      </Route>
      <Route path="gamedetail" element={<GameDetailPage />} />
      <Route path="/myusername/setting" element={<ProfileSettingPage />} />
      <Route path="/myusername/setting/edit" element={<EditSetting />} />
      <Route path="/myusername/setting/privacy" element={<PrivacySetting />} />
      <Route
        path="/myusername/setting/security"
        element={<SecuritySetting />}
      />
      <Route path="signup" element={<SignupPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route index element={<HomePage />} />
    </Routes>
  );
};

export default Pages;
