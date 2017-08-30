import React, { Component } from 'react';

import PageOne from './PageOne';
import { Delegate } from './delegate';
import { wc } from '../utils/stencil';

export default class AppStart extends Component {

  render() {
    return [
      <ion-nav-controller ref={wc({}, {
        delegate: Delegate
      })}></ion-nav-controller>,
      <ion-nav ref={wc({},{
        root: PageOne
      })}></ion-nav>
    ];
  }
}
