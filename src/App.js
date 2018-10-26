import React, { Component } from 'react';
import { Container } from 'reactstrap';
import './App.css';
// Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import FilterBar from './components/FilterBar/FilterBar';
import EventList from './components/Event/EventList';
import { getCategories } from './utils/api';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      events: [],
    };
  }

  componentDidMount() {
    getCategories()
      .then(res => {
        this.setState({
          categories: res.data.categories,
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { events, categories } = this.state;
    return (
      <div className="App">
        <Header />

        <FilterBar categories={categories} />

        <Container className="pt-4 mb-4">
          <EventList events={events} />
        </Container>

        <Footer />
      </div>
    );
  }
}

export default App;
