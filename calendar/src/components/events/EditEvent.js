import React from 'react';
import { connect } from 'react-redux';
import { fetchEvent, editEvent } from '../../redux/actions';
import EventForm from './EventForm';

class EditEvent extends React.Component {
  componentDidMount() {
    this.props.fetchEvent(this.props.match.params.id);
  }

  onSubmit = (e) => {
    this.props.editEvent(this.props.match.params.id, e);
  };

  render() {
    if (!this.props.event) {
      return <div>Loading</div>;
    } else {
      const initialValues = [
        this.props.event.event,
        this.props.event.date,
        this.props.event.notes,
        this.props.event.type,
      ];

      return (
        <div>
          <h3>Edit an Event</h3>
          <EventForm initialValues={initialValues} onSubmit={this.onSubmit} />
        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    event: state.event[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchEvent, editEvent })(EditEvent);
