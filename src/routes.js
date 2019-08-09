import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { CampaignListBoard, CreativeListBoard } from './containers';
import { HeaderComponent } from './components';

const Routes = () => (
  <Router>
    <div>
      <HeaderComponent />
      <Route exact path="/" component={CampaignListBoard} />
      <Route path="/creatives" component={CreativeListBoard} />
    </div>
  </Router>
);

export default Routes;
