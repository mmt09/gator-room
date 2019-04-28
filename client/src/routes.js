import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import App from './views/App';
import SearchResults from './views/SearchResults';
import About from './views/About';
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
        <Route path="/About" component={About} />
        <Route exact path="/Feona" component={FeonaProfile} />
        <Route exact path="/MichaelTran" component={MichaelTranProfile} />
        <Route exact path="/Carlos" component={CarlosProfile} />
        <Route exact path="/Nico" component={NicoProfile} />
        <Route exact path="/MichaelNelson" component={MichaelNelsonProfile} />
        <Route exact path="/Jakhongir" component={JakhongirProfile} />
        <Route exact path="/David" component={DavidProfile} />
        <Route exact path="/searchResults" component={SearchResults} />
      </Switch>
    </Router>
  );
};
export default Routes;
