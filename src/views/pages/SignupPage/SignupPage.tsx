import { BaseComponent } from "utilities_js";
import SignupComponent from "../../components/signup_Component";
import Layout from "../../layout/Layout";
import Navbar from "../../layout/Navbar/Navbar";
import SideBar from "../../layout/Sidebar/Sidebar";

export interface IProps {}
export interface IState {}

class SignupPage extends BaseComponent<IProps, IState> {
  state = {};

  render() {
    return (
      <Layout>
        <section className="w-100 d-flex flex-column align-items-center signup-Page">
          <SignupComponent />
        </section>
      </Layout>
    );
  }
}

export default SignupPage;
