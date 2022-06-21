import { NavLink, Outlet } from "react-router-dom";
import { BaseComponent } from "utilities_js";
import ProfileNav from "../../components/profile-nav";
import Layout from "../../layout/Layout";

export interface IProps {}
export interface IState {}

class GroupSettingPage extends BaseComponent<IProps, IState> {
  state = {};

  render() {
    return (
      <Layout>
        <section className="w-100 d-flex flex-column align-items-center profile-Setting-Page my-3">
          <ProfileNav backLink="/myusername" title="ایجاد گروه" />

          <div className="setting-Tabs">
            <div className="w-100 h-100 d-flex flex-row justify-content-around align-items-center chat-tabs my-4">
              <NavLink
                end
                to="/creategroup"
                className={({ isActive = String }) =>
                  isActive ? "active-Chat-tabs" : ""
                }
              >
                تنظیمات اصلی
              </NavLink>
              <NavLink
                to="/creategroup/addmember"
                className={({ isActive = String }) =>
                  isActive ? "active-Chat-tabs" : ""
                }
              >
                افزودن اعضا
              </NavLink>
            </div>
          </div>
          <div className="group-tabs">
            <Outlet />
          </div>
        </section>
      </Layout>
    );
  }
}

export default GroupSettingPage;
