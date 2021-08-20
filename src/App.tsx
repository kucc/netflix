import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./view/main";
import MyProfile from "./view/myProfile";
import Profile from "./view/profile";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/myProfile" component={MyProfile} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
