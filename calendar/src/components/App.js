import React from 'react';
import { Router, Route } from 'react-router-dom';

import Home from './Home';
import NewEvent from './events/NewEvent';
import EditEvent from './events/EditEvent';
import DeleteEvent from './events/DeleteEvent';
import Header from './Header';
import history from '../history';
import './styles.css';

const App = () => {
  return (
    <div className="App">
      <Router history={history}>
        <div>
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/events/new" exact component={NewEvent} />
          <Route path="/events/edit/:id" exact component={EditEvent} />
          <Route path="/events/delete/:id" exact component={DeleteEvent} />
        </div>
      </Router>
    </div>
  );
};

export default App;
