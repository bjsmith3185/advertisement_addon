import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../src/Pages/Home";
import NewCompany from "../src/Pages/NewCompany";
import Modify from "../src/Pages/Modify";
import Business from "../src/Pages/Business";
import Search from "../src/Pages/Search";
import UpdateAd from "../src/Pages/UpdateAd";
import ViewAllCompanies from "./Pages/ViewAllCompanies";
import AdminHome from "./Pages/AdminHome";
import ModifyUserSearches from "./Pages/ModifyUserSearches";


const App = () => (
<Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/admin" component={AdminHome} />
        <Route exact path="/admin/new" component={NewCompany} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/admin/modify" component={Modify} />
        <Route exact path="/admin/business" component={Business} />
        <Route exact path="/admin/update" component={UpdateAd} />
        <Route exact path="/admin/companies" component={ViewAllCompanies} />
        <Route exact path="/admin/searches" component={ModifyUserSearches} />
      </Switch>
    </div>
  </Router>
);
    


export default App;
