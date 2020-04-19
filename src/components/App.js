import React from 'react';
import './App.css';

import Dashboard from './Dashboard';

const App = () => {
  return (
    <div className="App">
      <Dashboard zones={[
        'livingroom',
        'bedroom',
        'office',
        'guestroom',
        'bathroom', 
        'sauna']} />
    </div>
  );
}

export default App;
