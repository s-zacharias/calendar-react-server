import React, { useState } from 'react';

const EventForm = ({ initialValues, onSubmit }) => {
  const [event, setEvent] = useState(initialValues[0]);
  const [date, setDate] = useState(initialValues[1]);
  const [notes, setNotes] = useState(initialValues[2]);
  const [type, setType] = useState(initialValues[3]);

  const onFormSubmit = (e) => {
    e.preventDefault();
    onSubmit({ event, date, notes, type });
    setEvent('');
    setDate('');
    setNotes('');
    setType('Work');
  };

  return (
    <div>
      <form className="create-event ui form" onSubmit={onFormSubmit}>
        <label>Event Title</label>
        <input
          type="text"
          className="input title"
          value={event}
          onChange={(e) => setEvent(e.target.value)}
        />
        <label>Event Date</label>
        <input
          type="date"
          className="input date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <label>Event Notes</label>
        <input
          type="text"
          className="input notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
        <label>Set Type</label>
        <select
          className="input type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option>Work</option>
          <option>School</option>
          <option>Personal</option>
        </select>
        <button className="ui button">Add</button>
      </form>
    </div>
  );
};

export default EventForm;
