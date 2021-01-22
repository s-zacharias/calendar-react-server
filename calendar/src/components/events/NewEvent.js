import React from 'react';
import { connect } from 'react-redux';
import { createEvent } from '../../redux/actions';
import EventForm from './EventForm';

const NewEvent = ({ createEvent }) => {
  const onSubmit = (e) => {
    createEvent(e);
  };

  const initialValues = ['', '', '', 'Work'];

  return (
    <div>
      <h3>Add an Event</h3>
      <EventForm initialValues={initialValues} onSubmit={onSubmit} />
    </div>
  );
};

export default connect(null, { createEvent })(NewEvent);
