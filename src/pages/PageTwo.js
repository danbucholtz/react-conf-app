import React, { Component } from 'react';

import PageThree from './PageThree';

export default class PageTwo extends Component {

  constructor() {
    super();
    this.style = {
      height: '100%'
    };
    this.state = {
      content: 'page two - ' + 50
    }
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter');
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter');
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ content: 'page two - ' + Math.random() * 1000});
    }, 1000);
  }

  goToNext() {
    const nav = this.element.closest('ion-nav');
    nav.push(PageThree, { paramOne: 'Michael Scott'});
  }

  goBack() {
    const nav = this.element.closest('ion-nav');
    nav.pop();
  }

  render() {
    return [
      <ion-page style={this.style} ref={(element) => this.element = element}>
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
          <div>
            Some random content: {this.state.content}
          </div>
          <div>
            Props : {this.props.paramOne}
          </div>
        </ion-content>
      </ion-page>
    ];
  }
}
