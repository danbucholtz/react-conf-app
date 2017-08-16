import React, { Component } from 'react';

import PageTwo from './PageTwo';

export default class PageThree extends Component {

  constructor() {
    super();
    this.style = {
      height: '100%'
    };
    this.state = {
      content: 'page three - ' + 50
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
      this.setState({ content: 'page three - ' + Math.random() * 1000});
    }, 1000);
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
            <ion-title>Page three</ion-title>
          </ion-navbar>
        </ion-header>
        <ion-content>
          Page Three
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
