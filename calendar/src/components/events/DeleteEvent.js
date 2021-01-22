import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import history from '../../history';
import { fetchEvent, deleteEvent } from '../../redux/actions';

class DeleteEvent extends React.Component {
  componentDidMount() {
    this.props.fetchEvent(this.props.match.params.id);
  }

  renderActions() {
    const { id } = this.props.match.params;

    return (
      <>
        <button
          onClick={() => this.props.deleteEvent(id)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/events/show" className="ui button">
          Cancel
        </Link>
      </>
    );
  }

  renderContent() {
    if (!this.props.event) {
      return 'Are you sure you want to delete this event?';
    } else {
      return `Are you sure you want to delete the event: ${this.props.event.event}`;
    }
  }

  render() {
    return (
      <div>
        <Modal
          title="Delete Event"
          content={this.renderContent()}
          actions={this.renderActions()}
          onDismiss={() => history.push('/events/show')}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    event: state.event[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchEvent, deleteEvent })(
  DeleteEvent
);
