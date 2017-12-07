/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */

Ionic.loadStyles("ion-note_md",".note-md {\n  color: #c5c5c5;\n}\n\n.note-md-primary {\n  color: #488aff;\n}\n\n.note-md-secondary {\n  color: #32db64;\n}\n\n.note-md-danger {\n  color: #f53d3d;\n}\n\n.note-md-light {\n  color: #f4f4f4;\n}\n\n.note-md-dark {\n  color: #222;\n}\nion-note.hydrated{visibility:inherit}");
Ionic.loadComponents(

/**** module id (dev mode) ****/
"ion-note.md",

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