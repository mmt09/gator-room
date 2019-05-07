import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import StudentPortal from './views/StudentPortal';
import LandlordPortal from './views/LandlordPortal';

import App from './views/App';
import SearchResults from './views/SearchResults';
import About from './views/About';
import NotFound from './views/NotFound';
import ListingPage from './views/ListingPage/ListingPage';
import LoginPage from './views/common/LoginPage';
import SignUpPage from './views/common/SignUpPage';

// Community Members
import JakhongirProfile from './views/aboutPages/JakhongirKhusanov/Profile';
import MichaelTranProfile from './views/aboutPages/MichaelTran/Profile';
import FeonaProfile from './views/aboutPages/FeonaGarcia/Profile';
import CarlosProfile from './views/aboutPages/CarlosVelasco/Profile';
import NicoProfile from './views/aboutPages/NicoGraves/Profile';
import MichaelNelsonProfile from './views/aboutPages/MichaelNelson/Profile';
import DavidProfile from './views/aboutPages/DavidHernandez/Profile';

const Routes = props => {
  return (
    <Router {...props}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Feona" component={FeonaProfile} />
        <Route exact path="/MichaelTran" component={MichaelTranProfile} />
        <Route exact path="/Carlos" component={CarlosProfile} />
        <Route exact path="/Nico" component={NicoProfile} />
        <Route exact path="/MichaelNelson" component={MichaelNelsonProfile} />
        <Route exact path="/Jakhongir" component={JakhongirProfile} />
        <Route exact path="/David" component={DavidProfile} />
        <Route exact path="/searchResults" component={SearchResults} />
        <Route exact path="/StudentPortal" component={StudentPortal} />
        <Route exact path="/LandlordPortal" component={LandlordPortal} />
        <Route path="/listings/:id" component={ListingPage} />
        <Route path="/LoginPage" component={LoginPage} />
        <Route path="/SignUpPage" component={SignUpPage} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};
export default Routes;
