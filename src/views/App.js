import logo from "./logo.svg";
import "./App.scss";
import Nav from "./Navigation/Nav";
import MyComponent from "./Example/MyComponent";
import MainComponent from "./toDoApps/MainComponent";
import Home from "./Example/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ListUsers from "./Users/ListUsers";
import DetailUser from "./Users/DetailUser";
// import MainComponent from "./toDoApps/MainComponent";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/about">
              <MyComponent />
            </Route>
            <Route path="/todo">
              <MainComponent />
            </Route>
            <Route path="/user" exact>
              <ListUsers />
            </Route>
            <Route path="/user/:id">
              <DetailUser />
            </Route>
          </Switch>
        </header>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
