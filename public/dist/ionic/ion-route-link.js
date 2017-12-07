/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */

Ionic.loadComponents(

/**** module id (dev mode) ****/
"ion-route-link",

/**** component modules ****/
function importComponent(exports, h, Context, publicPath) {
"use strict";
class RouteLink {
    handleClick(e) {
        console.log('Route link click', e);
        /*
        router.navigateTo(this.url)
        */
    }
    render() {
        /*
        const router = document.querySelector(this.router);
        const match = router.match
        console.log(`  <ion-route-link> Rendering route ${this.url}`, router, match);
    
        return (
          <a onClick={this.handleClick.bind(this)}><slot></slot></a>
        );
        */
    }
}

exports['ion-route-link'] = RouteLink;
},


/***************** ion-route-link *****************/
[
/** ion-route-link: tag **/
"ion-route-link",

/** ion-route-link: members **/
[
  [ "router", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "url", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ]
],

/** ion-route-link: host **/
{}

]
);