import React from 'react';
import { Link } from 'react-router-dom';
import history from '../history';

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Calendar
      </Link>
      <div className="right menu">
        <div
          onClick={() => {
            history.push('/');
            window.location.reload(false);
          }}
          className="item today-Refresh"
        >
          Today's Events
        </div>
      </div>
    </div>
  );
};

export default Header;
