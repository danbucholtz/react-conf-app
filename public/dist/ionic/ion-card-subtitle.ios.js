/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */

Ionic.loadStyles("ion-card-subtitle_ios","ion-card-subtitle {\n  position: relative;\n  display: block;\n}\n\n.card-subtitle-ios {\n  padding: 0;\n  font-size: 1.6rem;\n  font-weight: 700;\n  letter-spacing: 0.06rem;\n  text-transform: uppercase;\n  color: rgba(0, 0, 0, 0.4);\n}\n\n.card-ios-primary .card-subtitle-ios {\n  color: #fff;\n}\n\n.card-ios-primary .card-subtitle-ios-primary {\n  color: #488aff;\n}\n\n.card-ios-primary .card-subtitle-ios-secondary {\n  color: #32db64;\n}\n\n.card-ios-primary .card-subtitle-ios-danger {\n  color: #f53d3d;\n}\n\n.card-ios-primary .card-subtitle-ios-light {\n  color: #f4f4f4;\n}\n\n.card-ios-primary .card-subtitle-ios-dark {\n  color: #222;\n}\n\n.card-subtitle-ios-primary {\n  color: #488aff;\n}\n\n.card-ios-secondary .card-subtitle-ios {\n  color: #fff;\n}\n\n.card-ios-secondary .card-subtitle-ios-primary {\n  color: #488aff;\n}\n\n.card-ios-secondary .card-subtitle-ios-secondary {\n  color: #32db64;\n}\n\n.card-ios-secondary .card-subtitle-ios-danger {\n  color: #f53d3d;\n}\n\n.card-ios-secondary .card-subtitle-ios-light {\n  color: #f4f4f4;\n}\n\n.card-ios-secondary .card-subtitle-ios-dark {\n  color: #222;\n}\n\n.card-subtitle-ios-secondary {\n  color: #32db64;\n}\n\n.card-ios-danger .card-subtitle-ios {\n  color: #fff;\n}\n\n.card-ios-danger .card-subtitle-ios-primary {\n  color: #488aff;\n}\n\n.card-ios-danger .card-subtitle-ios-secondary {\n  color: #32db64;\n}\n\n.card-ios-danger .card-subtitle-ios-danger {\n  color: #f53d3d;\n}\n\n.card-ios-danger .card-subtitle-ios-light {\n  color: #f4f4f4;\n}\n\n.card-ios-danger .card-subtitle-ios-dark {\n  color: #222;\n}\n\n.card-subtitle-ios-danger {\n  color: #f53d3d;\n}\n\n.card-ios-light .card-subtitle-ios {\n  color: #000;\n}\n\n.card-ios-light .card-subtitle-ios-primary {\n  color: #488aff;\n}\n\n.card-ios-light .card-subtitle-ios-secondary {\n  color: #32db64;\n}\n\n.card-ios-light .card-subtitle-ios-danger {\n  color: #f53d3d;\n}\n\n.card-ios-light .card-subtitle-ios-light {\n  color: #f4f4f4;\n}\n\n.card-ios-light .card-subtitle-ios-dark {\n  color: #222;\n}\n\n.card-subtitle-ios-light {\n  color: #f4f4f4;\n}\n\n.card-ios-dark .card-subtitle-ios {\n  color: #fff;\n}\n\n.card-ios-dark .card-subtitle-ios-primary {\n  color: #488aff;\n}\n\n.card-ios-dark .card-subtitle-ios-secondary {\n  color: #32db64;\n}\n\n.card-ios-dark .card-subtitle-ios-danger {\n  color: #f53d3d;\n}\n\n.card-ios-dark .card-subtitle-ios-light {\n  color: #f4f4f4;\n}\n\n.card-ios-dark .card-subtitle-ios-dark {\n  color: #222;\n}\n\n.card-subtitle-ios-dark {\n  color: #222;\n}\nion-card-subtitle.hydrated{visibility:inherit}");
Ionic.loadComponents(

/**** module id (dev mode) ****/
"ion-card-subtitle.ios",

/**** component modules ****/
function importComponent(exports, h, Context, publicPath) {
"use strict";
class CardSubtitle {
    hostData() {
        return {
            'role': 'heading',
            'aria-level': '3'
        };
    }
    render() {
        return h("slot", null);
    }
}

exports['ion-card-subtitle'] = CardSubtitle;
},


/***************** ion-card-subtitle *****************/
[
/** ion-card-subtitle: tag **/
"ion-card-subtitle",

/** ion-card-subtitle: members **/
[
  [ "color", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "mode", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ]
],

/** ion-card-subtitle: host **/
{"theme":"card-subtitle"}

]
);