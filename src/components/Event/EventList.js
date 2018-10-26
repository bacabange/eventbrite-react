import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import EventCard from './EventCard';
import { PropTypes } from 'prop-types';

class EventList extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col xs="4" className="mb-4">
            <EventCard />
          </Col>

          <Col xs="4" className="mb-4">
            <EventCard />
          </Col>

          <Col xs="4" className="mb-4">
            <EventCard />
          </Col>

          <Col xs="4" className="mb-4">
            <EventCard />
          </Col>

          <Col xs="4" className="mb-4">
            <EventCard />
          </Col>
        </Row>
      </div>
    );
  }
}

EventList.propTypes = {
  events: PropTypes.array.isRequired,
};

export default EventList;
