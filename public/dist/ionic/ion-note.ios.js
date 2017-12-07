/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */

Ionic.loadStyles("ion-note_ios",".note-ios {\n  color: #aeacb4;\n}\n\n.note-ios-primary {\n  color: #488aff;\n}\n\n.note-ios-secondary {\n  color: #32db64;\n}\n\n.note-ios-danger {\n  color: #f53d3d;\n}\n\n.note-ios-light {\n  color: #f4f4f4;\n}\n\n.note-ios-dark {\n  color: #222;\n}\nion-note.hydrated{visibility:inherit}");
Ionic.loadComponents(

/**** module id (dev mode) ****/
"ion-note.ios",

/**** component modules ****/
function importComponent(exports, h, Context, publicPath) {
"use strict";
class Note {
    render() {
        return h("slot", null);
    }
}

exports['ion-note'] = Note;
},


/***************** ion-note *****************/
[
/** ion-note: tag **/
"ion-note",

/** ion-note: members **/
[
  [ "color", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "mode", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ]
],

/** ion-note: host **/
{"theme":"note"}

]
);