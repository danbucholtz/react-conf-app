import React, { Component } from 'react';

import PageOne from './PageOne';
import { Delegate } from './delegate';
import { wc } from '../../utils/stencil';
export default class AppStart extends Component {

  render() {
    return [
      <ion-nav ref={wc({},{
        root: PageOne
        delegate: Delegate
      })}></ion-nav>
    ];
  }
}
