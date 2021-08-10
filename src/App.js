// Import Global Things
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Import CSS
import './App.scss';

// Import Components
import Layout from './components/Layout';

// Import pages
import home from './pages/home';
import projects from './pages/projects';
import working from './pages/working-at-rt';
import sponsored from './pages/sponsored';

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={home} />
          <Route path="/projects" component={projects} />
          <Route path="/working-at-rt" component={working} />
          <Route path="/sponsored" component={sponsored} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
