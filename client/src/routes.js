import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './components/App';

import TitlebarGridList from './components/TitlebarGridList';

//Community Members
import JakhongirProfile from './components/aboutPages/JakhongirKhusanov/Profile';
import MichaelTranProfile from './components/aboutPages/MichaelTran/Profile';
import FeonaProfile from './components/aboutPages/FeonaGarcia/Profile';
import CarlosProfile from './components/aboutPages/CarlosVelasco/Profile';
import NicoProfile from './components/aboutPages/NicoGraves/Profile';
import MichaelNelsonProfile from './components/aboutPages/MichaelNelson/Profile';
import DavidProfile from './components/aboutPages/DavidHernandez/Profile';

const Routes = props => {
  return (
    <Router {...props}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/Feona" component={FeonaProfile} />
        <Route exact path="/MichaelTran" component={MichaelTranProfile} />
        <Route exact path="/Carlos" component={CarlosProfile} />
        <Route exact path="/Nico" component={NicoProfile} />
        <Route exact path="/MichaelNelson" component={MichaelNelsonProfile} />
        <Route exact path="/Jakhongir" component={JakhongirProfile} />
        <Route exact path="/David" component={DavidProfile} />
        <Route exact path="/table" component={TitlebarGridList} />
      </Switch>
    </Router>
  );
};
export default Routes;
