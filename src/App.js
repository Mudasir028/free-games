import { Switch, Route, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import Home from "./components/home";
import SigleGame from "./components/singleGame";
import Category from "./components/category";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";





function App() {
  return (
    <>
      <ToastContainer />
      <div id="page-container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/game/:id" component={SigleGame} />
            <Route path="/category/:name" component={Category} />
            {/* <Redirect from="*" to="/" /> */}
            <Redirect to="/" />
          </Switch>
        </div>
    </>
  );
}

export default App;
