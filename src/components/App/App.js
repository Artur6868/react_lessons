import React, { Component } from 'react';
import './App.css';

import Body from '../Body';
import Header from '../Header';


export default class App extends Component  {
  render() {
    return (
      <div>
        <Header />
        <Body />
      </div>
    );
  }
 
}


