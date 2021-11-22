import React from 'react';

import './App.css';
import DiningList from './components/diningList';
import ReservationList from './components/reservationList';

function App() {
  return (
    <div className="App">
      <div className="app-restaurant">
        <div className="reservation-section">
          <ReservationList />
        </div>
        <div className="dining-section">
          <DiningList />
        </div>

      </div>

    </div>
  );
}

export default App;
