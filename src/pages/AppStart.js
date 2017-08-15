import React, { Component } from 'react';

import PageOne from './PageOne';
import { Delegate } from './delegate'
export default class AppStart extends Component {

  render() {
    return [
      <ion-nav root={PageOne} delegate={Delegate}></ion-nav>
    ];
  }
}
