import React, { Component } from 'react';
import './App.css';
// Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import FilterBar from './components/FilterBar/FilterBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <FilterBar />

        <Footer />
      </div>
    );
  }
}

export default App;
