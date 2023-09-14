import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login';
import Callback from './Callback';

const App = () => {
  return (
    <Router>
      <Route path="/auth/callback" component={Callback} />
      <Route path="/login" component={Login} />
    </Router>
  );
};

export default App;