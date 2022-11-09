import React, { Component } from "react";
import Root from "./Root";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./components/Home";

import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";

class App extends Component {
  render() {
    return (
      <div>
        <Root>
          <ToastContainer hideProgressBar={true} newestOnTop={true} />
          <Switch>
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
            <Route exact path="/" component={Home} />
          </Switch>
        </Root>
      </div>
    );
  }
}
// class App extends Component {
//   render() {
//     return (
//       <div>
//         <BrowserRouter>
//           <Routes>
//               <Route path="/signup" component={<Signup/>} />
//               <Route path="/login" component={<Login/>} />
//               <Route path="/dashboard" component={<Dashboard/>} />
//               <Route path="/" component={<Home/>} />
//           </Routes>
//         </BrowserRouter>
//       </div>
//     );
//   }
// }

export default App;

//https://stackoverflow.com/questions/63124161/attempted-import-error-switch-is-not-exported-from-react-router-dom
