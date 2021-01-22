import React from 'react';
import { connect } from 'react-redux';
import { fetchEvents } from '../../redux/actions';

class DayEventSummary extends React.Component {
  componentDidMount() {
    this.props.fetchEvents();
  }

  renderDailyEvents() {
    if (!this.props.events) {
      return <div>Loading...</div>;
    } else {
      return this.props.events.map((event, i) => {
        if (event.date === this.props.date) {
          return (
            <div key={i} className={`summary ${event.type}`}>
              {event.event}
            </div>
          );
        } else {
          return undefined;
        }
      });
    }
  }

  render() {
    return <div>{this.renderDailyEvents()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    events: Object.values(state.event),
  };
};
export default connect(mapStateToProps, { fetchEvents })(DayEventSummary);
