import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./view/login";
import SignUp from "./view/signUp";
import Main from "./view/main";
import MyProfile from "./view/myProfile";
import Notification from "./view/notification";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/notification" component={Notification} />
          <Route exact path="/myProfile" component={MyProfile} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
