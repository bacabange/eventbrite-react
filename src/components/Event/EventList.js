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
            <EventCard title="Nombre del evento" text="texto del evento" />
          </Col>

          <Col xs="4" className="mb-4">
            <EventCard title="Nombre del evento" text="texto del evento" />
          </Col>

          <Col xs="4" className="mb-4">
            <EventCard title="Nombre del evento" text="texto del evento" />
          </Col>

          <Col xs="4" className="mb-4">
            <EventCard title="Nombre del evento" text="texto del evento" />
          </Col>

          <Col xs="4" className="mb-4">
            <EventCard title="Nombre del evento" text="texto del evento" />
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
