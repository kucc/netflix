import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./view/main";
import MyProfile from "./view/myProfile";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/myProfile" component={MyProfile} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
