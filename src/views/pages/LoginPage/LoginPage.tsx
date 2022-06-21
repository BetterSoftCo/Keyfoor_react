import { BaseComponent } from "utilities_js";
import LoginComponent from "../../components/login_Component";
import Layout from "../../layout/Layout";

export interface IProps {}
export interface IState {}

class LoginPage extends BaseComponent<IProps, IState> {
  state = {};

  render() {
    return (
      <Layout>
        <section className="w-100 d-flex flex-column align-items-center  login-Page">
          <LoginComponent />
        </section>
      </Layout>
    );
  }
}

export default LoginPage;
