import React, { Component } from 'react';
import { render } from 'react-dom';
import HelpScreenshot from './HelpScreenshot';
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      helpData: require('./assets/help.json')
    };
  }

  render() {
    return (
      <div class="screenshot-container">
        <HelpScreenshot data={this.state.helpData} />
      </div>
    );
  }
}

