import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import PropTypes from 'prop-types';

class EventCard extends Component {
  render() {
    return (
      <div>
        <Card className="rounded-0">
          <CardImg
            top
            width="100%"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>Título del evento</CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi ut facere ea facilis, culpa vitae,
              temporibus hic suscipit iste commodi inventore doloribus possimus velit ab in porro! Dolores, fugit sed!
            </CardText>
            <a className="btn btn-info btn-block" href="http://stivencastillo.com" target="_bkank">
              MÁS INFORMACIÓN
            </a>
          </CardBody>
        </Card>
      </div>
    );
  }
}

EventCard.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string,
};

EventCard.defaultProps = {
  image: null,
};

export default EventCard;
