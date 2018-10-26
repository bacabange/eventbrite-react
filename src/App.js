import React, { Component } from 'react';
import { Container } from 'reactstrap';
import './App.css';
// Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import FilterBar from './components/FilterBar/FilterBar';
import EventList from './components/Event/EventList';

class App extends Component {
  render() {
    let events = [];
    return (
      <div className="App">
        <Header />

        <FilterBar />

        <Container className="pt-4 mb-4">
          <EventList events={events} />
        </Container>

        <Footer />
      </div>
    );
  }
}

export default App;
