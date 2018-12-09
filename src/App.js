import React, { Component } from 'react';
import './App.css';
import Title from './components/Title';
import Form from './components/Form';


class App extends Component {
  render() {
    return (
      <div>
      <Title />
      <Form />
      </div>
    );
  }
}

export default App;
