import { BaseComponent } from "utilities_js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter } from "react-router-dom";
import Pages from "./views/pages/pages";

interface IProps {
  title?: string;
}

interface IState {
  hello?: string;
}

export default class App extends BaseComponent<IProps, IState> {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Pages />
        </BrowserRouter>
      </div>
    );
  }
}
