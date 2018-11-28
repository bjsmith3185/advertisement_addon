import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../src/Pages/Home";
import Admin from "../src/Pages/Admin";
import AllAds from "../src/Pages/AllAds";
import Business from "../src/Pages/Business";

const App = () => (
<Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/admin/all" component={AllAds} />
        <Route exact path="/admin/business" component={Business} />
      </Switch>
    </div>
  </Router>
);
    


export default App;
