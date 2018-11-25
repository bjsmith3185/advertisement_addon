import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../src/Pages/Home";
import Admin from "../src/Pages/Admin";
import AllAds from "../src/Pages/AllAds";

const App = () => (
<Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/admin/all" component={AllAds} />
      </Switch>
    </div>
  </Router>
);
    


export default App;
