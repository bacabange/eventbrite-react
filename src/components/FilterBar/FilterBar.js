import React, { Component } from 'react';
import styles from './FilterBar.module.scss';
import { Container, Row, Col, Button, Form, FormGroup, Input } from 'reactstrap';
import PropTypes from 'prop-types';

class FilterBar extends Component {
  onSearch = () => {
    console.log('Buscar');
  };

  render() {
    return (
      <div className={styles.container}>
        <p className={styles.title}>Busca tus eventos favoritos</p>
        <Container>
          <Form>
            <Row>
              <Col xs="4">
                <FormGroup>
                  <Input type="text" className="rounded-0" name="criteria" placeholder="Criterio" />
                </FormGroup>
              </Col>
              <Col xs="4">
                <FormGroup>
                  <Input type="select" className="rounded-0" name="category" placeholder="Categoría">
                    <option value={0}>Categoría</option>
                    <option value={2}>Categoría 2</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col xs="4">
                <Button onClick={this.onSearch} className={styles.buttonSearch} block>
                  BUSCAR
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </div>
    );
  }
}

FilterBar.propTypes = {
  categories: PropTypes.array.isRequired,
  onSearch: PropTypes.func,
};

FilterBar.defaultProps = {
  categories: [],
};

export default FilterBar;
