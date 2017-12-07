/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */

Ionic.loadStyles("ion-avatar_md","ion-avatar {\n  display: block;\n}\n\nion-avatar img {\n  width: 100%;\n  height: 100%;\n}\n\n.avatar-md {\n  border-radius: 50%;\n  width: 64px;\n  height: 64px;\n}\n\n.avatar-md ion-img,\n.avatar-md img {\n  border-radius: 50%;\n  overflow: hidden;\n}\nion-avatar.hydrated{visibility:inherit}","ion-badge_md","ion-badge {\n  padding: 3px 8px;\n  text-align: center;\n  display: inline-block;\n  min-width: 10px;\n  font-size: 1.3rem;\n  font-weight: bold;\n  line-height: 1;\n  white-space: nowrap;\n  vertical-align: baseline;\n  contain: content;\n}\n\nion-badge:empty {\n  display: none;\n}\n\n.badge-md {\n  border-radius: 4px;\n  color: #fff;\n  background-color: #488aff;\n}\n\n.badge-md-primary {\n  color: #fff;\n  background-color: #488aff;\n}\n\n.badge-md-secondary {\n  color: #fff;\n  background-color: #32db64;\n}\n\n.badge-md-danger {\n  color: #fff;\n  background-color: #f53d3d;\n}\n\n.badge-md-light {\n  color: #000;\n  background-color: #f4f4f4;\n}\n\n.badge-md-dark {\n  color: #fff;\n  background-color: #222;\n}\nion-badge.hydrated{visibility:inherit}","ion-thumbnail_md","ion-thumbnail {\n  display: block;\n}\n\n.thumbnail-md {\n  border-radius: 0;\n  width: 48px;\n  height: 48px;\n}\n\n.thumbnail-md ion-img,\n.thumbnail-md img {\n  border-radius: 0;\n  overflow: hidden;\n}\nion-thumbnail.hydrated{visibility:inherit}");
Ionic.loadComponents(

/**** module id (dev mode) ****/
"ion-avatar.md",

/**** component modules ****/
function importComponent(exports, h, Context, publicPath) {
"use strict";
class Avatar {
    render() {
        return h("slot", null);
    }
}

class Badge {
    render() {
        return h("slot", null);
    }
}

class Thumbnail {
    render() {
        return h("slot", null);
    }
}

exports['ion-avatar'] = Avatar;
exports['ion-badge'] = Badge;
exports['ion-thumbnail'] = Thumbnail;
},


/***************** ion-avatar *****************/
[
/** ion-avatar: tag **/
"ion-avatar",

/** ion-avatar: members **/
0 /* no members */,

/** ion-avatar: host **/
{"theme":"avatar"}

],

/***************** ion-badge *****************/
[
/** ion-badge: tag **/
"ion-badge",

/** ion-badge: members **/
[
  [ "color", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "mode", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ]
],

/** ion-badge: host **/
{"theme":"badge"}

],

/***************** ion-thumbnail *****************/
[
/** ion-thumbnail: tag **/
"ion-thumbnail",

/** ion-thumbnail: members **/
0 /* no members */,

/** ion-thumbnail: host **/
{"theme":"thumbnail"}

]
);