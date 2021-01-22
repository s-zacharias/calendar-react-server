import React from 'react';
import { Link } from 'react-router-dom';

// make each event look better

const SingleEvent = ({ id, event }) => {
  return (
    <div id={id} className="item">
      <div className="right floated content">
        <Link to={`/events/edit/${id}`} className="ui button">
          Edit
        </Link>
        <Link to={`/events/delete/${id}`} className="ui button delete-Event">
          Delete
        </Link>
      </div>
      <strong>{event.event}</strong>
      <p>{event.notes}</p>
    </div>
  );
};

export default SingleEvent;
