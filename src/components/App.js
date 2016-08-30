import React, { Component } from 'react';
import ToDos from './ToDos'

export default class App extends Component {
  render() {
    return (
      <div className="app-container">
          <ToDos/>
      </div>
    );
  }
}