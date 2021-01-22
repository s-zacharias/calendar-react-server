import React from 'react';
import { connect } from 'react-redux';
import { fetchEvents } from '../../redux/actions';
import { Link } from 'react-router-dom';
import SingleEvent from './SingleEvent';

class EventList extends React.Component {
  componentDidMount() {
    this.props.fetchEvents();
  }
  renderedList() {
    return this.props.events.map((event, index) => {
      if (event.date === this.props.selectedDay) {
        return <SingleEvent event={event} key={index} id={event.id} />;
      } else {
        return undefined;
      }
    });
  }

  renderCreate() {
    return (
      <div style={{ textAlign: 'right' }}>
        <Link to="/events/new" className="ui button add-Event">
          Add Event
        </Link>
      </div>
    );
  }

  render() {
    return (
      <div>
        <div className="ui celled list">{this.renderedList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    events: Object.values(state.event),
  };
};

export default connect(mapStateToProps, { fetchEvents })(EventList);
