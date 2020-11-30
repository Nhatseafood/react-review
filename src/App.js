import React from 'react';

import Calculator from './components/calculator';

import logo from './logo.svg';
import './App.css';
//======================================================
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: 'Maverick',
    }
  }
  
  render() {
    return (
      <div className="App">
        <Calculator />
      </div>
    )
  }
}
//======================================================
export default App;
