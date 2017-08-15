import React, { Component } from 'react';

import PageThree from './PageThree';

export default class PageTwo extends Component {

  constructor() {
    super();
    this.style = {
      height: '100%'
    };
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter');
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter');
  }

  goToNext() {
    const nav = this.element.closest('ion-nav');
    nav.push(PageThree);
  }

  goBack() {
    const nav = this.element.closest('ion-nav');
    nav.pop();
  }

  render() {
    return [
      <div style={this.style} ref={(element) => this.element = element}>
        <ion-header>
          <ion-navbar>
            <ion-title>Page Two</ion-title>
          </ion-navbar>
        </ion-header>
        <ion-content>
          Page Two
          <div>
            <ion-button onClick={() => this.goToNext()}>Go to Page Three</ion-button>
          </div>
          <div>
            <ion-button onClick={() => this.goBack()}>Go Back</ion-button>
          </div>
        </ion-content>
      </div>
    ];
  }
}
