import React from 'react';
import Calendar from './calendar';
import DayEventDisplay from './events';

const Home = () => {
  return (
    <div className="home">
      <div className="type-key">
        Key:
        <div className="Work">Work</div>
        <div className="School">School</div>
        <div className="Personal">Personal</div>
      </div>
      <Calendar />
      <DayEventDisplay />
    </div>
  );
};

export default Home;
