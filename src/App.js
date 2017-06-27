import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    total = 200;

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      percentageValue: 0
    }
  }

  handleOnChange = (e) => {
    console.log('handleOnChange called');
    this.setState({
      value: e.target.value.replace(/\D/g, '')
    })
  }

  calculatePercentage = (value) => {
    return (value / 200) * 100;
  }
  handleOnSubmit = (e) => {
    e.preventDefault();
    const percent = this.calculatePercentage(this.state.value);
    this.setState({
      percentageValue: percent
    })
  }

  render() {
    const style = {
      backgroundColor: 'green',
      width: this.state.percentageValue + '%',
      height: '50px',
      margin: '30px',   
    };
    const styleBar={
      display:'flex', 
      justifyContent:'left'
    }
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Progress Bar in React</h2>
        </div>
          <br/>
          <br/>
          
        <p className="App-intro">
        Please Enter the percentage with respect to 200%.
        </p>
        <form onSubmit={this.handleOnSubmit}>
         <div style={styleBar}> <div style={style}></div>
          </div>
          <input type='text' onChange={this.handleOnChange} />
          <br/>
          <br/>
          <button type='submit'> Enter </button>
        </form>
      </div>
    );
  }
}

export default App;
