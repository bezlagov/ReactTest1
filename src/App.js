import React from 'react';
import './App.css';
import TestComponent from './components/TestComponent';
import FunctionalComponent from './components/FunctionalComponent';
import Homework from './components/Homework';
import HelloWorld from './components/HelloWorld';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <TestComponent name="Class Component" />
        <FunctionalComponent name="app" />
        <HelloWorld />
        <Homework text="some text for par" />
      </div>
    );
  }
}

export default App;
