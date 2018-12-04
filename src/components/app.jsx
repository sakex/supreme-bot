//import 'babel-polyfill';
import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    height: 500px;
    width: 500px;
  }
`;
var port = chrome.runtime.connect();

class App extends Component {
  constructor() {
    super();

    this.state = {
      item: 'Box Logo Crewneck Sweatshirt',
      color: 'Black',
      size: 'Large'
    };

    this.itemChange = this.itemChange.bind(this);
    this.colorChange = this.colorChange.bind(this);
    this.launch = this.launch.bind(this);
  }

  itemChange(e) {
    this.setState({ item: e.target.value });
  }

  colorChange(e) {
    this.setState({ color: e.target.value });
  }

  sizeChange(e) {
    this.setState({ size: e.target.value });
  }

  launch() {
    //bot(this.state.item, this.state.color)
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      chrome.tabs.sendMessage(tabs[0].id, this.state, response => {
        if (response.found == false) {
          setTimeout(this.launch, 2000);
        }
      });
    });
  }

  render() {
    return (
      <div>
        <GlobalStyle whiteColor />
        <p>
          Item name: <br />
          <input
            type="text"
            onChange={this.itemChange}
            value={this.state.item ? this.state.item : ''}
          />
        </p>
        <p>
          Color: <br />
          <input
            type="text"
            onChange={this.colorChange}
            value={this.state.color ? this.state.color : ''}
          />
        </p>
        <p>
          Size: <br />
          <input
            type="text"
            onChange={this.sizeChange}
            value={this.state.size ? this.state.size : ''}
          />
        </p>
        <button onClick={this.launch}>Start bot</button>
      </div>
    );
  }
}

export default App;
