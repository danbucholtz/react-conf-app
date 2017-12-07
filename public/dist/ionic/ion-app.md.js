/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */

Ionic.loadStyles("ion-app_md","audio,\ncanvas,\nprogress,\nvideo {\n  vertical-align: baseline;\n}\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\nb,\nstrong {\n  font-weight: bold;\n}\n\nimg {\n  max-width: 100%;\n  border: 0;\n}\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\nfigure {\n  margin: 1em 40px;\n}\n\nhr {\n  height: 1px;\n  border-width: 0;\n  box-sizing: content-box;\n}\n\npre {\n  overflow: auto;\n}\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\nlabel,\ninput,\nselect,\ntextarea {\n  font-family: inherit;\n  line-height: normal;\n}\n\ntextarea {\n  overflow: auto;\n  height: auto;\n  font: inherit;\n  color: inherit;\n}\n\ntextarea::placeholder {\n  padding-left: 2px;\n}\n\nform,\ninput,\noptgroup,\nselect {\n  margin: 0;\n  font: inherit;\n  color: inherit;\n}\n\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  cursor: pointer;\n  -webkit-appearance: button;\n}\n\na,\na div,\na span,\na ion-icon,\na ion-label,\nbutton,\nbutton div,\nbutton span,\nbutton ion-icon,\nbutton ion-label,\n[tappable],\n[tappable] div,\n[tappable] span,\n[tappable] ion-icon,\n[tappable] ion-label,\ninput,\ntextarea {\n  touch-action: manipulation;\n}\n\na ion-label,\nbutton ion-label {\n  pointer-events: none;\n}\n\nbutton {\n  border: 0;\n  border-radius: 0;\n  font-family: inherit;\n  font-style: inherit;\n  font-variant: inherit;\n  line-height: 1;\n  text-transform: none;\n  cursor: pointer;\n  -webkit-appearance: button;\n}\n\n[tappable] {\n  cursor: pointer;\n}\n\na[disabled],\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  padding: 0;\n  box-sizing: border-box;\n}\n\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ntd,\nth {\n  padding: 0;\n}\n\n.hide,\n[hidden],\ntemplate {\n  display: none !important;\n}\n\n.sticky {\n  position: sticky;\n  top: 0;\n}\n\n:focus,\n:active {\n  outline: none;\n}\n\n.focus-outline :focus {\n  outline: thin dotted;\n  outline-offset: -1px;\n}\n\n.focus-outline button:focus,\n.focus-outline [ion-button]:focus {\n  border-color: #51a7e8;\n  outline: 2px solid #51a7e8;\n  box-shadow: 0 0 8px 1px #51a7e8;\n}\n\nion-input :focus {\n  outline: none;\n}\n\n.click-block {\n  display: none;\n}\n\n.click-block-enabled {\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  transform: translate3d(0,  -100%,  0) translateY(1px);\n  position: absolute;\n  z-index: 99999;\n  display: block;\n  opacity: 0;\n  contain: strict;\n}\n\n.click-block-active {\n  transform: translate3d(0,  0,  0);\n}\n\n* {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-touch-callout: none;\n}\n\nhtml {\n  width: 100%;\n  height: 100%;\n  font-size: 62.5%;\n  text-size-adjust: 100%;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  position: fixed;\n  overflow: hidden;\n  width: 100%;\n  max-width: 100%;\n  height: 100%;\n  max-height: 100%;\n  -webkit-font-smoothing: antialiased;\n  font-smoothing: antialiased;\n  text-rendering: optimizeLegibility;\n  -webkit-user-drag: none;\n  -ms-content-zooming: none;\n  touch-action: manipulation;\n  word-wrap: break-word;\n  text-size-adjust: none;\n  user-select: none;\n}\n\na {\n  background-color: transparent;\n}\n\n.enable-hover a:not(.button):hover {\n  opacity: .7;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin-top: 1.6rem;\n  margin-bottom: 1rem;\n  font-weight: 500;\n  line-height: 1.2;\n}\n\n[padding] h1:first-child,\n[padding] h2:first-child,\n[padding] h3:first-child,\n[padding] h4:first-child,\n[padding] h5:first-child,\n[padding] h6:first-child {\n  margin-top: -0.3rem;\n}\n\nh1 + h2,\nh1 + h3,\nh2 + h3 {\n  margin-top: -0.3rem;\n}\n\nh1 {\n  margin-top: 2rem;\n  font-size: 2.6rem;\n}\n\nh2 {\n  margin-top: 1.8rem;\n  font-size: 2.4rem;\n}\n\nh3 {\n  font-size: 2.2rem;\n}\n\nh4 {\n  font-size: 2rem;\n}\n\nh5 {\n  font-size: 1.8rem;\n}\n\nh6 {\n  font-size: 1.6rem;\n}\n\nsmall {\n  font-size: 75%;\n}\n\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline;\n}\n\nsup {\n  top: -.5em;\n}\n\nsub {\n  bottom: -.25em;\n}\n\nion-app,\nion-nav,\nion-tabs,\nion-page,\n.ion-page {\n  left: 0;\n  top: 0;\n  position: absolute;\n  z-index: 0;\n  width: 100%;\n  height: 100%;\n  contain: layout size style;\n}\n\nion-page,\n.ion-page,\n.page-inner {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.hide-page {\n  opacity: 0;\n}\n\nion-header,\nion-footer {\n  position: relative;\n  z-index: 10;\n  display: block;\n  order: 1;\n  width: 100%;\n}\n\nion-header {\n  order: -1;\n}\n\nion-route,\nion-route-controller,\nion-animation-controller,\nion-nav-controller,\nion-menu-controller,\nion-action-sheet-controller,\nion-alert-controller,\nion-loading-controller,\nion-modal-controller,\nion-picker-controller,\nion-toast-controller,\n[app-viewport],\n[overlay-portal],\n[nav-viewport],\n[tab-portal] {\n  display: none;\n}\n\n[text-center] {\n  text-align: center !important;\n}\n\n[text-justify] {\n  text-align: justify !important;\n}\n\n[text-start] {\n  text-align: left;\n  text-align: start !important;\n}\n\n[text-end] {\n  text-align: right;\n  text-align: end !important;\n}\n\n[text-left] {\n  text-align: left !important;\n}\n\n[text-right] {\n  text-align: right !important;\n}\n\n[text-nowrap] {\n  white-space: nowrap !important;\n}\n\n[text-wrap] {\n  white-space: normal !important;\n}\n\n\@media (min-width: 576px) {\n  [text-sm-center] {\n    text-align: center !important;\n  }\n  [text-sm-justify] {\n    text-align: justify !important;\n  }\n  [text-sm-start] {\n    text-align: left;\n    text-align: start !important;\n  }\n  [text-sm-end] {\n    text-align: right;\n    text-align: end !important;\n  }\n  [text-sm-left] {\n    text-align: left !important;\n  }\n  [text-sm-right] {\n    text-align: right !important;\n  }\n  [text-sm-nowrap] {\n    white-space: nowrap !important;\n  }\n  [text-sm-wrap] {\n    white-space: normal !important;\n  }\n}\n\n\@media (min-width: 768px) {\n  [text-md-center] {\n    text-align: center !important;\n  }\n  [text-md-justify] {\n    text-align: justify !important;\n  }\n  [text-md-start] {\n    text-align: left;\n    text-align: start !important;\n  }\n  [text-md-end] {\n    text-align: right;\n    text-align: end !important;\n  }\n  [text-md-left] {\n    text-align: left !important;\n  }\n  [text-md-right] {\n    text-align: right !important;\n  }\n  [text-md-nowrap] {\n    white-space: nowrap !important;\n  }\n  [text-md-wrap] {\n    white-space: normal !important;\n  }\n}\n\n\@media (min-width: 992px) {\n  [text-lg-center] {\n    text-align: center !important;\n  }\n  [text-lg-justify] {\n    text-align: justify !important;\n  }\n  [text-lg-start] {\n    text-align: left;\n    text-align: start !important;\n  }\n  [text-lg-end] {\n    text-align: right;\n    text-align: end !important;\n  }\n  [text-lg-left] {\n    text-align: left !important;\n  }\n  [text-lg-right] {\n    text-align: right !important;\n  }\n  [text-lg-nowrap] {\n    white-space: nowrap !important;\n  }\n  [text-lg-wrap] {\n    white-space: normal !important;\n  }\n}\n\n\@media (min-width: 1200px) {\n  [text-xl-center] {\n    text-align: center !important;\n  }\n  [text-xl-justify] {\n    text-align: justify !important;\n  }\n  [text-xl-start] {\n    text-align: left;\n    text-align: start !important;\n  }\n  [text-xl-end] {\n    text-align: right;\n    text-align: end !important;\n  }\n  [text-xl-left] {\n    text-align: left !important;\n  }\n  [text-xl-right] {\n    text-align: right !important;\n  }\n  [text-xl-nowrap] {\n    white-space: nowrap !important;\n  }\n  [text-xl-wrap] {\n    white-space: normal !important;\n  }\n}\n\n[text-uppercase] {\n  text-transform: uppercase !important;\n}\n\n[text-lowercase] {\n  text-transform: lowercase !important;\n}\n\n[text-capitalize] {\n  text-transform: capitalize !important;\n}\n\n\@media (min-width: 576px) {\n  [text-sm-uppercase] {\n    text-transform: uppercase !important;\n  }\n  [text-sm-lowercase] {\n    text-transform: lowercase !important;\n  }\n  [text-sm-capitalize] {\n    text-transform: capitalize !important;\n  }\n}\n\n\@media (min-width: 768px) {\n  [text-md-uppercase] {\n    text-transform: uppercase !important;\n  }\n  [text-md-lowercase] {\n    text-transform: lowercase !important;\n  }\n  [text-md-capitalize] {\n    text-transform: capitalize !important;\n  }\n}\n\n\@media (min-width: 992px) {\n  [text-lg-uppercase] {\n    text-transform: uppercase !important;\n  }\n  [text-lg-lowercase] {\n    text-transform: lowercase !important;\n  }\n  [text-lg-capitalize] {\n    text-transform: capitalize !important;\n  }\n}\n\n\@media (min-width: 1200px) {\n  [text-xl-uppercase] {\n    text-transform: uppercase !important;\n  }\n  [text-xl-lowercase] {\n    text-transform: lowercase !important;\n  }\n  [text-xl-capitalize] {\n    text-transform: capitalize !important;\n  }\n}\n\n[float-left] {\n  float: left !important;\n}\n\n[float-right] {\n  float: right !important;\n}\n\n[float-start] {\n  float: left !important;\n}\n\n[float-end] {\n  float: right !important;\n}\n\n\@media (min-width: 576px) {\n  [float-sm-left] {\n    float: left !important;\n  }\n  [float-sm-right] {\n    float: right !important;\n  }\n  [float-sm-start] {\n    float: left !important;\n  }\n  [float-sm-end] {\n    float: right !important;\n  }\n}\n\n\@media (min-width: 768px) {\n  [float-md-left] {\n    float: left !important;\n  }\n  [float-md-right] {\n    float: right !important;\n  }\n  [float-md-start] {\n    float: left !important;\n  }\n  [float-md-end] {\n    float: right !important;\n  }\n}\n\n\@media (min-width: 992px) {\n  [float-lg-left] {\n    float: left !important;\n  }\n  [float-lg-right] {\n    float: right !important;\n  }\n  [float-lg-start] {\n    float: left !important;\n  }\n  [float-lg-end] {\n    float: right !important;\n  }\n}\n\n\@media (min-width: 1200px) {\n  [float-xl-left] {\n    float: left !important;\n  }\n  [float-xl-right] {\n    float: right !important;\n  }\n  [float-xl-start] {\n    float: left !important;\n  }\n  [float-xl-end] {\n    float: right !important;\n  }\n}\n\n.app-md {\n  font-family: \"Roboto\", \"Helvetica Neue\", sans-serif;\n  font-size: 1.4rem;\n  background-color: #fff;\n}\n\n.app-md ion-tabs ion-tabbar:not(.placement-top) {\n  padding-bottom: calc(constant(safe-area-inset-bottom) + 0);\n  padding-bottom: calc(env(safe-area-inset-bottom) + 0);\n  height: calc(5.6rem + constant(safe-area-inset-bottom));\n  height: calc(5.6rem + env(safe-area-inset-bottom));\n}\n\n.app-md ion-footer .toolbar:last-child {\n  padding-bottom: calc(constant(safe-area-inset-bottom) + 4px);\n  padding-bottom: calc(env(safe-area-inset-bottom) + 4px);\n  min-height: calc(56px + constant(safe-area-inset-bottom));\n  min-height: calc(56px + env(safe-area-inset-bottom));\n}\n\n.app-md .ion-page > .toolbar.statusbar-padding:first-child,\n.app-md .ion-page > ion-header > .toolbar.statusbar-padding:first-child,\n.app-md ion-tab ion-nav .ion-page > ion-header > .toolbar.statusbar-padding:first-child,\n.app-md ion-menu > .menu-inner > .toolbar.statusbar-padding:first-child,\n.app-md ion-menu > .menu-inner > ion-header > .toolbar.statusbar-padding:first-child {\n  padding-top: calc(20px + 4px);\n  padding-top: calc(constant(safe-area-inset-top) + 4px);\n  padding-top: calc(env(safe-area-inset-top) + 4px);\n  min-height: calc(56px + 20px);\n  min-height: calc(56px + constant(safe-area-inset-top));\n  min-height: calc(56px + env(safe-area-inset-top));\n}\n\n.app-md .ion-page > ion-content.statusbar-padding:first-child .scroll-content,\n.app-md .ion-page > ion-header > ion-content.statusbar-padding:first-child .scroll-content,\n.app-md ion-tab ion-nav .ion-page > ion-header > ion-content.statusbar-padding:first-child .scroll-content,\n.app-md ion-menu > .menu-inner > ion-content.statusbar-padding:first-child .scroll-content,\n.app-md ion-menu > .menu-inner > ion-header > ion-content.statusbar-padding:first-child .scroll-content {\n  padding-top: 20px;\n  padding-top: calc(constant(safe-area-inset-top) + 0px);\n  padding-top: calc(env(safe-area-inset-top) + 0px);\n}\n\n.app-md .ion-page > ion-content.statusbar-padding:first-child[padding] .scroll-content,\n.app-md .ion-page > ion-content.statusbar-padding:first-child[padding-top] .scroll-content,\n.app-md .ion-page > ion-header > ion-content.statusbar-padding:first-child[padding] .scroll-content,\n.app-md .ion-page > ion-header > ion-content.statusbar-padding:first-child[padding-top] .scroll-content,\n.app-md ion-tab ion-nav .ion-page > ion-header > ion-content.statusbar-padding:first-child[padding] .scroll-content,\n.app-md ion-tab ion-nav .ion-page > ion-header > ion-content.statusbar-padding:first-child[padding-top] .scroll-content,\n.app-md ion-menu > .menu-inner > ion-content.statusbar-padding:first-child[padding] .scroll-content,\n.app-md ion-menu > .menu-inner > ion-content.statusbar-padding:first-child[padding-top] .scroll-content,\n.app-md ion-menu > .menu-inner > ion-header > ion-content.statusbar-padding:first-child[padding] .scroll-content,\n.app-md ion-menu > .menu-inner > ion-header > ion-content.statusbar-padding:first-child[padding-top] .scroll-content {\n  padding-top: calc(16px + 20px);\n  padding-top: calc(constant(safe-area-inset-top) + 0px);\n  padding-top: calc(env(safe-area-inset-top) + 0px);\n}\n\na {\n  color: #488aff;\n}\n\n.icon-md-primary {\n  fill: #488aff;\n}\n\n.icon-md-secondary {\n  fill: #32db64;\n}\n\n.icon-md-danger {\n  fill: #f53d3d;\n}\n\n.icon-md-light {\n  fill: #f4f4f4;\n}\n\n.icon-md-dark {\n  fill: #222;\n}\nion-app.hydrated{visibility:inherit}","ion-content_md","ion-content {\n  position: relative;\n  display: block;\n  flex: 1;\n  width: 100%;\n  contain: layout size style;\n  padding: 0 !important;\n}\n\nion-scroll {\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  position: absolute;\n  z-index: 1;\n  display: block;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  -webkit-overflow-scrolling: touch;\n  will-change: scroll-position;\n  contain: size style layout;\n}\n\nion-content.js-scroll ion-scroll {\n  position: relative;\n  min-height: 100%;\n  overflow-x: initial;\n  overflow-y: initial;\n  -webkit-overflow-scrolling: auto;\n  will-change: initial;\n}\n\nion-content.has-refresher ion-scroll {\n  background-color: inherit;\n}\n\nion-app [no-padding],\nion-app [no-padding] ion-scroll {\n  padding: 0;\n}\n\nion-app [no-margin],\nion-app [no-margin] ion-scroll {\n  margin: 0;\n}\n\n.content-md {\n  color: #000;\n  background-color: #fff;\n}\n\n.content-md hr {\n  background-color: rgba(0, 0, 0, 0.08);\n}\n\n.app-md [padding],\n.app-md [padding] .scroll-inner {\n  padding: 16px;\n}\n\n.app-md [padding-top],\n.app-md [padding-top] .scroll-inner {\n  padding-top: 16px;\n}\n\n.app-md [padding-left],\n.app-md [padding-left] .scroll-inner {\n  padding-left: 16px;\n}\n\n.app-md [padding-right],\n.app-md [padding-right] .scroll-inner {\n  padding-right: 16px;\n}\n\n.app-md [padding-bottom],\n.app-md [padding-bottom] .scroll-inner {\n  padding-bottom: 16px;\n}\n\n.app-md [padding-vertical],\n.app-md [padding-vertical] .scroll-inner {\n  padding-top: 16px;\n  padding-bottom: 16px;\n}\n\n.app-md [padding-horizontal],\n.app-md [padding-horizontal] .scroll-inner {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\n.app-md [margin],\n.app-md [margin] ion-scroll {\n  margin: 16px;\n}\n\n.app-md [margin-top],\n.app-md [margin-top] ion-scroll {\n  margin-top: 16px;\n}\n\n.app-md [margin-left],\n.app-md [margin-left] ion-scroll {\n  margin-left: 16px;\n}\n\n.app-md [margin-start],\n.app-md [margin-start] ion-scroll {\n  margin-left: 16px;\n}\n\n.app-md [margin-right],\n.app-md [margin-right] ion-scroll {\n  margin-right: 16px;\n}\n\n.app-md [margin-end],\n.app-md [margin-end] ion-scroll {\n  margin-right: 16px;\n}\n\n.app-md [margin-bottom],\n.app-md [margin-bottom] ion-scroll {\n  margin-bottom: 16px;\n}\n\n.app-md [margin-vertical],\n.app-md [margin-vertical] ion-scroll {\n  margin-top: 16px;\n  margin-bottom: 16px;\n}\n\n.app-md [margin-horizontal],\n.app-md [margin-horizontal] ion-scroll {\n  margin-left: 16px;\n  margin-right: 16px;\n}\nion-content.hydrated{visibility:inherit}","ion-footer_md","\nion-footer.hydrated{visibility:inherit}","ion-header_md","\nion-header.hydrated{visibility:inherit}","ion-navbar_md","\nion-navbar.hydrated{visibility:inherit}","ion-page_md","\nion-page.hydrated{visibility:inherit}","ion-scroll_md","\nion-scroll.hydrated{visibility:inherit}","ion-title_md","ion-title {\n  display: flex;\n  flex: 1;\n  align-items: center;\n  transform: translateZ(0);\n}\n\n.toolbar-title {\n  display: block;\n  overflow: hidden;\n  width: 100%;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.toolbar-title-md {\n  padding: 0 12px;\n  font-size: 2rem;\n  font-weight: 500;\n  color: #424242;\n}\n\n.toolbar-primary .toolbar-title-md {\n  color: #fff;\n}\n\n.toolbar-secondary .toolbar-title-md {\n  color: #fff;\n}\n\n.toolbar-danger .toolbar-title-md {\n  color: #fff;\n}\n\n.toolbar-light .toolbar-title-md {\n  color: #000;\n}\n\n.toolbar-dark .toolbar-title-md {\n  color: #fff;\n}\nion-title.hydrated{visibility:inherit}","ion-toolbar_md",".toolbar {\n  position: relative;\n  z-index: 10;\n  display: flex;\n  overflow: hidden;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  contain: content;\n}\n\n.toolbar-background {\n  left: 0;\n  top: 0;\n  position: absolute;\n  z-index: -1;\n  width: 100%;\n  height: 100%;\n  border: 0;\n  transform: translateZ(0);\n  pointer-events: none;\n  contain: strict;\n}\n\nion-buttons {\n  margin: 0 0.2rem;\n  display: block;\n  transform: translateZ(0);\n  pointer-events: none;\n}\n\nion-buttons button,\nion-buttons a,\nion-buttons input,\nion-buttons textarea,\nion-buttons div {\n  pointer-events: auto;\n}\n\n.toolbar[transparent] .toolbar-background {\n  border-color: transparent;\n  background: transparent;\n}\n\nion-buttons,\n.bar-button-menutoggle {\n  z-index: 99;\n  transform: translateZ(0);\n}\n\nion-navbar.toolbar {\n  display: flex;\n  transform: translateZ(0);\n}\n\n.bar-button {\n  margin: 0;\n  padding: 0;\n  text-align: center;\n  -moz-appearance: none;\n  -ms-appearance: none;\n  -webkit-appearance: none;\n  appearance: none;\n  position: relative;\n  display: inline-block;\n  line-height: 1;\n  text-overflow: ellipsis;\n  text-transform: none;\n  white-space: nowrap;\n  cursor: pointer;\n  vertical-align: top;\n  vertical-align: -webkit-baseline-middle;\n  user-select: none;\n}\n\n.bar-button::after {\n  left: -2px;\n  right: -2px;\n  top: -7px;\n  bottom: -6px;\n  position: absolute;\n  content: \"\";\n}\n\n.bar-button-menutoggle {\n  display: flex;\n  align-items: center;\n}\n\n.back-button {\n  display: none;\n}\n\n.back-button.show-back-button {\n  display: inline-block;\n}\n\n.back-button-text {\n  display: flex;\n  align-items: center;\n}\n\n.toolbar-md {\n  padding: 4px;\n  min-height: 56px;\n}\n\n.toolbar-background-md {\n  border-color: #b2b2b2;\n  background: #f8f8f8;\n}\n\n.header-md::after,\n.tabs-md[tabsPlacement=\"top\"] > .tabbar::after,\n.footer-md::before,\n.tabs-md[tabsPlacement=\"bottom\"] > .tabbar::before {\n  left: 0;\n  bottom: -5px;\n  background-position: left 0 top -2px;\n  position: absolute;\n  width: 100%;\n  height: 5px;\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAHBAMAAADzDtBxAAAAD1BMVEUAAAAAAAAAAAAAAAAAAABPDueNAAAABXRSTlMUCS0gBIh/TXEAAAAaSURBVAjXYxCEAgY4UIICBmMogMsgFLtAAQCNSwXZKOdPxgAAAABJRU5ErkJggg==\");\n  background-repeat: repeat-x;\n  content: \"\";\n}\n\n.footer-md::before,\n.tabs-md[tabsPlacement=\"bottom\"] > .tabbar::before {\n  top: -2px;\n  bottom: auto;\n  background-position: left 0 top 0;\n  height: 2px;\n}\n\n.header-md[no-border]::after,\n.footer-md[no-border]::before,\n.tabs-md[tabsPlacement=\"top\"][no-border] > .tabbar::after,\n.tabs-md[tabsPlacement=\"bottom\"][no-border] > .tabbar::before {\n  display: none;\n}\n\n.toolbar-content-md {\n  flex: 1;\n  order: 3;\n  min-width: 0;\n  max-width: 100%;\n}\n\n.bar-buttons-md {\n  order: 4;\n  transform: translateZ(0);\n}\n\n.bar-buttons-md[slot=\"start\"] {\n  order: 2;\n}\n\n.bar-button-md:first-child {\n  margin-left: 0;\n}\n\n.bar-buttons-md[slot=\"mode-end\"] {\n  text-align: right;\n  text-align: end;\n  order: 5;\n}\n\n.bar-buttons-md[slot=\"end\"] {\n  text-align: right;\n  order: 6;\n}\n\n.bar-button-md {\n  margin: 0 0.2rem;\n  padding: 0 5px;\n  border-radius: 2px;\n  height: 32px;\n  border: 0;\n  font-size: 1.4rem;\n  font-weight: 500;\n  text-transform: uppercase;\n}\n\n.bar-button-solid-md,\n.bar-button-outline-md {\n  overflow: hidden;\n}\n\n.bar-button-outline-md {\n  border-width: 1px;\n  border-style: solid;\n  border-color: #424242;\n  color: #424242;\n  background-color: transparent;\n}\n\n.bar-button-outline-md:hover:not(.disable-hover) {\n  opacity: .4;\n}\n\n.bar-button-outline-md.activated {\n  background-color: transparent;\n}\n\n.bar-button-outline-md .button-effect {\n  background-color: #424242;\n}\n\n.bar-button-solid-md {\n  color: #fff;\n  background-color: #424242;\n}\n\n.bar-button-solid-md:hover:not(.disable-hover) {\n  color: #fff;\n}\n\n.bar-button-solid-md.activated {\n  color: #fff;\n  background-color: #515151;\n}\n\n.bar-button-md ion-icon[slot=\"start\"] {\n  padding-right: 0.3em;\n  font-size: 1.4em;\n  line-height: .67;\n  pointer-events: none;\n}\n\n.bar-button-md ion-icon[slot=\"end\"] {\n  padding-left: 0.4em;\n  font-size: 1.4em;\n  line-height: .67;\n  pointer-events: none;\n}\n\n.bar-button-md ion-icon[slot=\"icon-only\"] {\n  padding: 0;\n  min-width: 28px;\n  font-size: 1.8em;\n  line-height: .67;\n  pointer-events: none;\n}\n\n.back-button-md {\n  margin: 0 6px;\n  min-width: 44px;\n  box-shadow: none;\n}\n\n.back-button-icon-md {\n  margin: 0;\n  padding: 0 6px;\n  text-align: left;\n  text-align: start;\n  font-size: 2.4rem;\n  font-weight: normal;\n}\n\n.bar-button-menutoggle-md {\n  margin: 0 6px;\n  padding: 0 2px;\n  order: 1;\n  min-width: 44px;\n}\n\n.bar-button-menutoggle-md ion-icon {\n  padding: 0 6px;\n  font-size: 2.4rem;\n}\n\n.bar-button-menutoggle-md[slot=\"mode-end\"],\n.bar-button-menutoggle-md[slot=\"end\"] {\n  margin: 0 2px;\n  order: 7;\n  min-width: 28px;\n}\n\n.bar-button-default-md,\n.bar-button-clear-md-default,\n.bar-button-md-default {\n  color: #424242;\n  background-color: transparent;\n}\n\n.bar-button-default-md:hover:not(.disable-hover),\n.bar-button-clear-md-default:hover:not(.disable-hover),\n.bar-button-md-default:hover:not(.disable-hover) {\n  color: #424242;\n}\n\n.bar-button-clear-md,\n.bar-button-clear-md-clear,\n.bar-button-md-clear {\n  color: #424242;\n  background-color: transparent;\n}\n\n.bar-button-clear-md:hover:not(.disable-hover),\n.bar-button-clear-md-clear:hover:not(.disable-hover),\n.bar-button-md-clear:hover:not(.disable-hover) {\n  color: #424242;\n}\n\n.toolbar-md-primary .toolbar-background-md {\n  background: #488aff;\n}\n\n.toolbar-md-primary .bar-button-clear-md,\n.toolbar-md-primary .bar-button-default-md,\n.toolbar-md-primary .bar-button-outline-md,\n.toolbar-md-primary .toolbar-title-md {\n  color: #fff;\n}\n\n.toolbar-md-primary .bar-button-clear-md .button-effect,\n.toolbar-md-primary .bar-button-default-md .button-effect,\n.toolbar-md-primary .bar-button-outline-md .button-effect {\n  background-color: #fff;\n}\n\n.toolbar-md-primary .bar-button-outline-md {\n  border-color: #fff;\n}\n\n.toolbar-md-primary .bar-button-primary-md,\n.toolbar-md-primary .bar-button-clear-md-primary,\n.toolbar-md-primary .bar-button-md-primary {\n  color: #488aff;\n  background-color: transparent;\n}\n\n.toolbar-md-primary .bar-button-primary-md:hover:not(.disable-hover),\n.toolbar-md-primary .bar-button-clear-md-primary:hover:not(.disable-hover),\n.toolbar-md-primary .bar-button-md-primary:hover:not(.disable-hover) {\n  color: #488aff;\n}\n\n.toolbar-md-primary .bar-button-outline-md-primary {\n  border-color: #427feb;\n  color: #427feb;\n  background-color: transparent;\n}\n\n.toolbar-md-primary .bar-button-outline-md-primary.activated {\n  background-color: transparent;\n}\n\n.toolbar-md-primary .bar-button-outline-md-primary .button-effect {\n  background-color: #427feb;\n}\n\n.toolbar-md-primary .bar-button-solid-md-primary {\n  color: #fff;\n  background-color: #488aff;\n}\n\n.toolbar-md-primary .bar-button-solid-md-primary.activated {\n  color: #fff;\n  background-color: #427feb;\n}\n\n.toolbar-md-primary .bar-button-secondary-md,\n.toolbar-md-primary .bar-button-clear-md-secondary,\n.toolbar-md-primary .bar-button-md-secondary {\n  color: #32db64;\n  background-color: transparent;\n}\n\n.toolbar-md-primary .bar-button-secondary-md:hover:not(.disable-hover),\n.toolbar-md-primary .bar-button-clear-md-secondary:hover:not(.disable-hover),\n.toolbar-md-primary .bar-button-md-secondary:hover:not(.disable-hover) {\n  color: #32db64;\n}\n\n.toolbar-md-primary .bar-button-outline-md-secondary {\n  border-color: #2ec95c;\n  color: #2ec95c;\n  background-color: transparent;\n}\n\n.toolbar-md-primary .bar-button-outline-md-secondary.activated {\n  background-color: transparent;\n}\n\n.toolbar-md-primary .bar-button-outline-md-secondary .button-effect {\n  background-color: #2ec95c;\n}\n\n.toolbar-md-primary .bar-button-solid-md-secondary {\n  color: #fff;\n  background-color: #32db64;\n}\n\n.toolbar-md-primary .bar-button-solid-md-secondary.activated {\n  color: #fff;\n  background-color: #2ec95c;\n}\n\n.toolbar-md-primary .bar-button-danger-md,\n.toolbar-md-primary .bar-button-clear-md-danger,\n.toolbar-md-primary .bar-button-md-danger {\n  color: #f53d3d;\n  background-color: transparent;\n}\n\n.toolbar-md-primary .bar-button-danger-md:hover:not(.disable-hover),\n.toolbar-md-primary .bar-button-clear-md-danger:hover:not(.disable-hover),\n.toolbar-md-primary .bar-button-md-danger:hover:not(.disable-hover) {\n  color: #f53d3d;\n}\n\n.toolbar-md-primary .bar-button-outline-md-danger {\n  border-color: #e13838;\n  color: #e13838;\n  background-color: transparent;\n}\n\n.toolbar-md-primary .bar-button-outline-md-danger.activated {\n  background-color: transparent;\n}\n\n.toolbar-md-primary .bar-button-outline-md-danger .button-effect {\n  background-color: #e13838;\n}\n\n.toolbar-md-primary .bar-button-solid-md-danger {\n  color: #fff;\n  background-color: #f53d3d;\n}\n\n.toolbar-md-primary .bar-button-solid-md-danger.activated {\n  color: #fff;\n  background-color: #e13838;\n}\n\n.toolbar-md-primary .bar-button-light-md,\n.toolbar-md-primary .bar-button-clear-md-light,\n.toolbar-md-primary .bar-button-md-light {\n  color: #f4f4f4;\n  background-color: transparent;\n}\n\n.toolbar-md-primary .bar-button-light-md:hover:not(.disable-hover),\n.toolbar-md-primary .bar-button-clear-md-light:hover:not(.disable-hover),\n.toolbar-md-primary .bar-button-md-light:hover:not(.disable-hover) {\n  color: #f4f4f4;\n}\n\n.toolbar-md-primary .bar-button-outline-md-light {\n  border-color: #e0e0e0;\n  color: #e0e0e0;\n  background-color: transparent;\n}\n\n.toolbar-md-primary .bar-button-outline-md-light.activated {\n  background-color: transparent;\n}\n\n.toolbar-md-primary .bar-button-outline-md-light .button-effect {\n  background-color: #e0e0e0;\n}\n\n.toolbar-md-primary .bar-button-solid-md-light {\n  color: #424242;\n  background-color: #f4f4f4;\n}\n\n.toolbar-md-primary .bar-button-solid-md-light.activated {\n  color: #424242;\n  background-color: #e0e0e0;\n}\n\n.toolbar-md-primary .bar-button-dark-md,\n.toolbar-md-primary .bar-button-clear-md-dark,\n.toolbar-md-primary .bar-button-md-dark {\n  color: #222;\n  background-color: transparent;\n}\n\n.toolbar-md-primary .bar-button-dark-md:hover:not(.disable-hover),\n.toolbar-md-primary .bar-button-clear-md-dark:hover:not(.disable-hover),\n.toolbar-md-primary .bar-button-md-dark:hover:not(.disable-hover) {\n  color: #222;\n}\n\n.toolbar-md-primary .bar-button-outline-md-dark {\n  border-color: #343434;\n  color: #343434;\n  background-color: transparent;\n}\n\n.toolbar-md-primary .bar-button-outline-md-dark.activated {\n  background-color: transparent;\n}\n\n.toolbar-md-primary .bar-button-outline-md-dark .button-effect {\n  background-color: #343434;\n}\n\n.toolbar-md-primary .bar-button-solid-md-dark {\n  color: #fff;\n  background-color: #222;\n}\n\n.toolbar-md-primary .bar-button-solid-md-dark.activated {\n  color: #fff;\n  background-color: #343434;\n}\n\n.bar-button-primary-md,\n.bar-button-clear-md-primary,\n.bar-button-md-primary {\n  color: #488aff;\n  background-color: transparent;\n}\n\n.bar-button-primary-md:hover:not(.disable-hover),\n.bar-button-clear-md-primary:hover:not(.disable-hover),\n.bar-button-md-primary:hover:not(.disable-hover) {\n  color: #488aff;\n}\n\n.bar-button-outline-md-primary {\n  border-color: #427feb;\n  color: #427feb;\n  background-color: transparent;\n}\n\n.bar-button-outline-md-primary.activated {\n  background-color: transparent;\n}\n\n.bar-button-outline-md-primary .button-effect {\n  background-color: #427feb;\n}\n\n.bar-button-solid-md-primary {\n  color: #fff;\n  background-color: #488aff;\n}\n\n.bar-button-solid-md-primary.activated {\n  color: #fff;\n  background-color: #427feb;\n}\n\n.toolbar-md-secondary .toolbar-background-md {\n  background: #32db64;\n}\n\n.toolbar-md-secondary .bar-button-clear-md,\n.toolbar-md-secondary .bar-button-default-md,\n.toolbar-md-secondary .bar-button-outline-md,\n.toolbar-md-secondary .toolbar-title-md {\n  color: #fff;\n}\n\n.toolbar-md-secondary .bar-button-clear-md .button-effect,\n.toolbar-md-secondary .bar-button-default-md .button-effect,\n.toolbar-md-secondary .bar-button-outline-md .button-effect {\n  background-color: #fff;\n}\n\n.toolbar-md-secondary .bar-button-outline-md {\n  border-color: #fff;\n}\n\n.toolbar-md-secondary .bar-button-primary-md,\n.toolbar-md-secondary .bar-button-clear-md-primary,\n.toolbar-md-secondary .bar-button-md-primary {\n  color: #488aff;\n  background-color: transparent;\n}\n\n.toolbar-md-secondary .bar-button-primary-md:hover:not(.disable-hover),\n.toolbar-md-secondary .bar-button-clear-md-primary:hover:not(.disable-hover),\n.toolbar-md-secondary .bar-button-md-primary:hover:not(.disable-hover) {\n  color: #488aff;\n}\n\n.toolbar-md-secondary .bar-button-outline-md-primary {\n  border-color: #427feb;\n  color: #427feb;\n  background-color: transparent;\n}\n\n.toolbar-md-secondary .bar-button-outline-md-primary.activated {\n  background-color: transparent;\n}\n\n.toolbar-md-secondary .bar-button-outline-md-primary .button-effect {\n  background-color: #427feb;\n}\n\n.toolbar-md-secondary .bar-button-solid-md-primary {\n  color: #fff;\n  background-color: #488aff;\n}\n\n.toolbar-md-secondary .bar-button-solid-md-primary.activated {\n  color: #fff;\n  background-color: #427feb;\n}\n\n.toolbar-md-secondary .bar-button-secondary-md,\n.toolbar-md-secondary .bar-button-clear-md-secondary,\n.toolbar-md-secondary .bar-button-md-secondary {\n  color: #32db64;\n  background-color: transparent;\n}\n\n.toolbar-md-secondary .bar-button-secondary-md:hover:not(.disable-hover),\n.toolbar-md-secondary .bar-button-clear-md-secondary:hover:not(.disable-hover),\n.toolbar-md-secondary .bar-button-md-secondary:hover:not(.disable-hover) {\n  color: #32db64;\n}\n\n.toolbar-md-secondary .bar-button-outline-md-secondary {\n  border-color: #2ec95c;\n  color: #2ec95c;\n  background-color: transparent;\n}\n\n.toolbar-md-secondary .bar-button-outline-md-secondary.activated {\n  background-color: transparent;\n}\n\n.toolbar-md-secondary .bar-button-outline-md-secondary .button-effect {\n  background-color: #2ec95c;\n}\n\n.toolbar-md-secondary .bar-button-solid-md-secondary {\n  color: #fff;\n  background-color: #32db64;\n}\n\n.toolbar-md-secondary .bar-button-solid-md-secondary.activated {\n  color: #fff;\n  background-color: #2ec95c;\n}\n\n.toolbar-md-secondary .bar-button-danger-md,\n.toolbar-md-secondary .bar-button-clear-md-danger,\n.toolbar-md-secondary .bar-button-md-danger {\n  color: #f53d3d;\n  background-color: transparent;\n}\n\n.toolbar-md-secondary .bar-button-danger-md:hover:not(.disable-hover),\n.toolbar-md-secondary .bar-button-clear-md-danger:hover:not(.disable-hover),\n.toolbar-md-secondary .bar-button-md-danger:hover:not(.disable-hover) {\n  color: #f53d3d;\n}\n\n.toolbar-md-secondary .bar-button-outline-md-danger {\n  border-color: #e13838;\n  color: #e13838;\n  background-color: transparent;\n}\n\n.toolbar-md-secondary .bar-button-outline-md-danger.activated {\n  background-color: transparent;\n}\n\n.toolbar-md-secondary .bar-button-outline-md-danger .button-effect {\n  background-color: #e13838;\n}\n\n.toolbar-md-secondary .bar-button-solid-md-danger {\n  color: #fff;\n  background-color: #f53d3d;\n}\n\n.toolbar-md-secondary .bar-button-solid-md-danger.activated {\n  color: #fff;\n  background-color: #e13838;\n}\n\n.toolbar-md-secondary .bar-button-light-md,\n.toolbar-md-secondary .bar-button-clear-md-light,\n.toolbar-md-secondary .bar-button-md-light {\n  color: #f4f4f4;\n  background-color: transparent;\n}\n\n.toolbar-md-secondary .bar-button-light-md:hover:not(.disable-hover),\n.toolbar-md-secondary .bar-button-clear-md-light:hover:not(.disable-hover),\n.toolbar-md-secondary .bar-button-md-light:hover:not(.disable-hover) {\n  color: #f4f4f4;\n}\n\n.toolbar-md-secondary .bar-button-outline-md-light {\n  border-color: #e0e0e0;\n  color: #e0e0e0;\n  background-color: transparent;\n}\n\n.toolbar-md-secondary .bar-button-outline-md-light.activated {\n  background-color: transparent;\n}\n\n.toolbar-md-secondary .bar-button-outline-md-light .button-effect {\n  background-color: #e0e0e0;\n}\n\n.toolbar-md-secondary .bar-button-solid-md-light {\n  color: #424242;\n  background-color: #f4f4f4;\n}\n\n.toolbar-md-secondary .bar-button-solid-md-light.activated {\n  color: #424242;\n  background-color: #e0e0e0;\n}\n\n.toolbar-md-secondary .bar-button-dark-md,\n.toolbar-md-secondary .bar-button-clear-md-dark,\n.toolbar-md-secondary .bar-button-md-dark {\n  color: #222;\n  background-color: transparent;\n}\n\n.toolbar-md-secondary .bar-button-dark-md:hover:not(.disable-hover),\n.toolbar-md-secondary .bar-button-clear-md-dark:hover:not(.disable-hover),\n.toolbar-md-secondary .bar-button-md-dark:hover:not(.disable-hover) {\n  color: #222;\n}\n\n.toolbar-md-secondary .bar-button-outline-md-dark {\n  border-color: #343434;\n  color: #343434;\n  background-color: transparent;\n}\n\n.toolbar-md-secondary .bar-button-outline-md-dark.activated {\n  background-color: transparent;\n}\n\n.toolbar-md-secondary .bar-button-outline-md-dark .button-effect {\n  background-color: #343434;\n}\n\n.toolbar-md-secondary .bar-button-solid-md-dark {\n  color: #fff;\n  background-color: #222;\n}\n\n.toolbar-md-secondary .bar-button-solid-md-dark.activated {\n  color: #fff;\n  background-color: #343434;\n}\n\n.bar-button-secondary-md,\n.bar-button-clear-md-secondary,\n.bar-button-md-secondary {\n  color: #32db64;\n  background-color: transparent;\n}\n\n.bar-button-secondary-md:hover:not(.disable-hover),\n.bar-button-clear-md-secondary:hover:not(.disable-hover),\n.bar-button-md-secondary:hover:not(.disable-hover) {\n  color: #32db64;\n}\n\n.bar-button-outline-md-secondary {\n  border-color: #2ec95c;\n  color: #2ec95c;\n  background-color: transparent;\n}\n\n.bar-button-outline-md-secondary.activated {\n  background-color: transparent;\n}\n\n.bar-button-outline-md-secondary .button-effect {\n  background-color: #2ec95c;\n}\n\n.bar-button-solid-md-secondary {\n  color: #fff;\n  background-color: #32db64;\n}\n\n.bar-button-solid-md-secondary.activated {\n  color: #fff;\n  background-color: #2ec95c;\n}\n\n.toolbar-md-danger .toolbar-background-md {\n  background: #f53d3d;\n}\n\n.toolbar-md-danger .bar-button-clear-md,\n.toolbar-md-danger .bar-button-default-md,\n.toolbar-md-danger .bar-button-outline-md,\n.toolbar-md-danger .toolbar-title-md {\n  color: #fff;\n}\n\n.toolbar-md-danger .bar-button-clear-md .button-effect,\n.toolbar-md-danger .bar-button-default-md .button-effect,\n.toolbar-md-danger .bar-button-outline-md .button-effect {\n  background-color: #fff;\n}\n\n.toolbar-md-danger .bar-button-outline-md {\n  border-color: #fff;\n}\n\n.toolbar-md-danger .bar-button-primary-md,\n.toolbar-md-danger .bar-button-clear-md-primary,\n.toolbar-md-danger .bar-button-md-primary {\n  color: #488aff;\n  background-color: transparent;\n}\n\n.toolbar-md-danger .bar-button-primary-md:hover:not(.disable-hover),\n.toolbar-md-danger .bar-button-clear-md-primary:hover:not(.disable-hover),\n.toolbar-md-danger .bar-button-md-primary:hover:not(.disable-hover) {\n  color: #488aff;\n}\n\n.toolbar-md-danger .bar-button-outline-md-primary {\n  border-color: #427feb;\n  color: #427feb;\n  background-color: transparent;\n}\n\n.toolbar-md-danger .bar-button-outline-md-primary.activated {\n  background-color: transparent;\n}\n\n.toolbar-md-danger .bar-button-outline-md-primary .button-effect {\n  background-color: #427feb;\n}\n\n.toolbar-md-danger .bar-button-solid-md-primary {\n  color: #fff;\n  background-color: #488aff;\n}\n\n.toolbar-md-danger .bar-button-solid-md-primary.activated {\n  color: #fff;\n  background-color: #427feb;\n}\n\n.toolbar-md-danger .bar-button-secondary-md,\n.toolbar-md-danger .bar-button-clear-md-secondary,\n.toolbar-md-danger .bar-button-md-secondary {\n  color: #32db64;\n  background-color: transparent;\n}\n\n.toolbar-md-danger .bar-button-secondary-md:hover:not(.disable-hover),\n.toolbar-md-danger .bar-button-clear-md-secondary:hover:not(.disable-hover),\n.toolbar-md-danger .bar-button-md-secondary:hover:not(.disable-hover) {\n  color: #32db64;\n}\n\n.toolbar-md-danger .bar-button-outline-md-secondary {\n  border-color: #2ec95c;\n  color: #2ec95c;\n  background-color: transparent;\n}\n\n.toolbar-md-danger .bar-button-outline-md-secondary.activated {\n  background-color: transparent;\n}\n\n.toolbar-md-danger .bar-button-outline-md-secondary .button-effect {\n  background-color: #2ec95c;\n}\n\n.toolbar-md-danger .bar-button-solid-md-secondary {\n  color: #fff;\n  background-color: #32db64;\n}\n\n.toolbar-md-danger .bar-button-solid-md-secondary.activated {\n  color: #fff;\n  background-color: #2ec95c;\n}\n\n.toolbar-md-danger .bar-button-danger-md,\n.toolbar-md-danger .bar-button-clear-md-danger,\n.toolbar-md-danger .bar-button-md-danger {\n  color: #f53d3d;\n  background-color: transparent;\n}\n\n.toolbar-md-danger .bar-button-danger-md:hover:not(.disable-hover),\n.toolbar-md-danger .bar-button-clear-md-danger:hover:not(.disable-hover),\n.toolbar-md-danger .bar-button-md-danger:hover:not(.disable-hover) {\n  color: #f53d3d;\n}\n\n.toolbar-md-danger .bar-button-outline-md-danger {\n  border-color: #e13838;\n  color: #e13838;\n  background-color: transparent;\n}\n\n.toolbar-md-danger .bar-button-outline-md-danger.activated {\n  background-color: transparent;\n}\n\n.toolbar-md-danger .bar-button-outline-md-danger .button-effect {\n  background-color: #e13838;\n}\n\n.toolbar-md-danger .bar-button-solid-md-danger {\n  color: #fff;\n  background-color: #f53d3d;\n}\n\n.toolbar-md-danger .bar-button-solid-md-danger.activated {\n  color: #fff;\n  background-color: #e13838;\n}\n\n.toolbar-md-danger .bar-button-light-md,\n.toolbar-md-danger .bar-button-clear-md-light,\n.toolbar-md-danger .bar-button-md-light {\n  color: #f4f4f4;\n  background-color: transparent;\n}\n\n.toolbar-md-danger .bar-button-light-md:hover:not(.disable-hover),\n.toolbar-md-danger .bar-button-clear-md-light:hover:not(.disable-hover),\n.toolbar-md-danger .bar-button-md-light:hover:not(.disable-hover) {\n  color: #f4f4f4;\n}\n\n.toolbar-md-danger .bar-button-outline-md-light {\n  border-color: #e0e0e0;\n  color: #e0e0e0;\n  background-color: transparent;\n}\n\n.toolbar-md-danger .bar-button-outline-md-light.activated {\n  background-color: transparent;\n}\n\n.toolbar-md-danger .bar-button-outline-md-light .button-effect {\n  background-color: #e0e0e0;\n}\n\n.toolbar-md-danger .bar-button-solid-md-light {\n  color: #424242;\n  background-color: #f4f4f4;\n}\n\n.toolbar-md-danger .bar-button-solid-md-light.activated {\n  color: #424242;\n  background-color: #e0e0e0;\n}\n\n.toolbar-md-danger .bar-button-dark-md,\n.toolbar-md-danger .bar-button-clear-md-dark,\n.toolbar-md-danger .bar-button-md-dark {\n  color: #222;\n  background-color: transparent;\n}\n\n.toolbar-md-danger .bar-button-dark-md:hover:not(.disable-hover),\n.toolbar-md-danger .bar-button-clear-md-dark:hover:not(.disable-hover),\n.toolbar-md-danger .bar-button-md-dark:hover:not(.disable-hover) {\n  color: #222;\n}\n\n.toolbar-md-danger .bar-button-outline-md-dark {\n  border-color: #343434;\n  color: #343434;\n  background-color: transparent;\n}\n\n.toolbar-md-danger .bar-button-outline-md-dark.activated {\n  background-color: transparent;\n}\n\n.toolbar-md-danger .bar-button-outline-md-dark .button-effect {\n  background-color: #343434;\n}\n\n.toolbar-md-danger .bar-button-solid-md-dark {\n  color: #fff;\n  background-color: #222;\n}\n\n.toolbar-md-danger .bar-button-solid-md-dark.activated {\n  color: #fff;\n  background-color: #343434;\n}\n\n.bar-button-danger-md,\n.bar-button-clear-md-danger,\n.bar-button-md-danger {\n  color: #f53d3d;\n  background-color: transparent;\n}\n\n.bar-button-danger-md:hover:not(.disable-hover),\n.bar-button-clear-md-danger:hover:not(.disable-hover),\n.bar-button-md-danger:hover:not(.disable-hover) {\n  color: #f53d3d;\n}\n\n.bar-button-outline-md-danger {\n  border-color: #e13838;\n  color: #e13838;\n  background-color: transparent;\n}\n\n.bar-button-outline-md-danger.activated {\n  background-color: transparent;\n}\n\n.bar-button-outline-md-danger .button-effect {\n  background-color: #e13838;\n}\n\n.bar-button-solid-md-danger {\n  color: #fff;\n  background-color: #f53d3d;\n}\n\n.bar-button-solid-md-danger.activated {\n  color: #fff;\n  background-color: #e13838;\n}\n\n.toolbar-md-light .toolbar-background-md {\n  background: #f4f4f4;\n}\n\n.toolbar-md-light .bar-button-clear-md,\n.toolbar-md-light .bar-button-default-md,\n.toolbar-md-light .bar-button-outline-md,\n.toolbar-md-light .toolbar-title-md {\n  color: #424242;\n}\n\n.toolbar-md-light .bar-button-clear-md .button-effect,\n.toolbar-md-light .bar-button-default-md .button-effect,\n.toolbar-md-light .bar-button-outline-md .button-effect {\n  background-color: #424242;\n}\n\n.toolbar-md-light .bar-button-outline-md {\n  border-color: #424242;\n}\n\n.toolbar-md-light .bar-button-primary-md,\n.toolbar-md-light .bar-button-clear-md-primary,\n.toolbar-md-light .bar-button-md-primary {\n  color: #488aff;\n  background-color: transparent;\n}\n\n.toolbar-md-light .bar-button-primary-md:hover:not(.disable-hover),\n.toolbar-md-light .bar-button-clear-md-primary:hover:not(.disable-hover),\n.toolbar-md-light .bar-button-md-primary:hover:not(.disable-hover) {\n  color: #488aff;\n}\n\n.toolbar-md-light .bar-button-outline-md-primary {\n  border-color: #427feb;\n  color: #427feb;\n  background-color: transparent;\n}\n\n.toolbar-md-light .bar-button-outline-md-primary.activated {\n  background-color: transparent;\n}\n\n.toolbar-md-light .bar-button-outline-md-primary .button-effect {\n  background-color: #427feb;\n}\n\n.toolbar-md-light .bar-button-solid-md-primary {\n  color: #fff;\n  background-color: #488aff;\n}\n\n.toolbar-md-light .bar-button-solid-md-primary.activated {\n  color: #fff;\n  background-color: #427feb;\n}\n\n.toolbar-md-light .bar-button-secondary-md,\n.toolbar-md-light .bar-button-clear-md-secondary,\n.toolbar-md-light .bar-button-md-secondary {\n  color: #32db64;\n  background-color: transparent;\n}\n\n.toolbar-md-light .bar-button-secondary-md:hover:not(.disable-hover),\n.toolbar-md-light .bar-button-clear-md-secondary:hover:not(.disable-hover),\n.toolbar-md-light .bar-button-md-secondary:hover:not(.disable-hover) {\n  color: #32db64;\n}\n\n.toolbar-md-light .bar-button-outline-md-secondary {\n  border-color: #2ec95c;\n  color: #2ec95c;\n  background-color: transparent;\n}\n\n.toolbar-md-light .bar-button-outline-md-secondary.activated {\n  background-color: transparent;\n}\n\n.toolbar-md-light .bar-button-outline-md-secondary .button-effect {\n  background-color: #2ec95c;\n}\n\n.toolbar-md-light .bar-button-solid-md-secondary {\n  color: #fff;\n  background-color: #32db64;\n}\n\n.toolbar-md-light .bar-button-solid-md-secondary.activated {\n  color: #fff;\n  background-color: #2ec95c;\n}\n\n.toolbar-md-light .bar-button-danger-md,\n.toolbar-md-light .bar-button-clear-md-danger,\n.toolbar-md-light .bar-button-md-danger {\n  color: #f53d3d;\n  background-color: transparent;\n}\n\n.toolbar-md-light .bar-button-danger-md:hover:not(.disable-hover),\n.toolbar-md-light .bar-button-clear-md-danger:hover:not(.disable-hover),\n.toolbar-md-light .bar-button-md-danger:hover:not(.disable-hover) {\n  color: #f53d3d;\n}\n\n.toolbar-md-light .bar-button-outline-md-danger {\n  border-color: #e13838;\n  color: #e13838;\n  background-color: transparent;\n}\n\n.toolbar-md-light .bar-button-outline-md-danger.activated {\n  background-color: transparent;\n}\n\n.toolbar-md-light .bar-button-outline-md-danger .button-effect {\n  background-color: #e13838;\n}\n\n.toolbar-md-light .bar-button-solid-md-danger {\n  color: #fff;\n  background-color: #f53d3d;\n}\n\n.toolbar-md-light .bar-button-solid-md-danger.activated {\n  color: #fff;\n  background-color: #e13838;\n}\n\n.toolbar-md-light .bar-button-light-md,\n.toolbar-md-light .bar-button-clear-md-light,\n.toolbar-md-light .bar-button-md-light {\n  color: #f4f4f4;\n  background-color: transparent;\n}\n\n.toolbar-md-light .bar-button-light-md:hover:not(.disable-hover),\n.toolbar-md-light .bar-button-clear-md-light:hover:not(.disable-hover),\n.toolbar-md-light .bar-button-md-light:hover:not(.disable-hover) {\n  color: #f4f4f4;\n}\n\n.toolbar-md-light .bar-button-outline-md-light {\n  border-color: #e0e0e0;\n  color: #e0e0e0;\n  background-color: transparent;\n}\n\n.toolbar-md-light .bar-button-outline-md-light.activated {\n  background-color: transparent;\n}\n\n.toolbar-md-light .bar-button-outline-md-light .button-effect {\n  background-color: #e0e0e0;\n}\n\n.toolbar-md-light .bar-button-solid-md-light {\n  color: #424242;\n  background-color: #f4f4f4;\n}\n\n.toolbar-md-light .bar-button-solid-md-light.activated {\n  color: #424242;\n  background-color: #e0e0e0;\n}\n\n.toolbar-md-light .bar-button-dark-md,\n.toolbar-md-light .bar-button-clear-md-dark,\n.toolbar-md-light .bar-button-md-dark {\n  color: #222;\n  background-color: transparent;\n}\n\n.toolbar-md-light .bar-button-dark-md:hover:not(.disable-hover),\n.toolbar-md-light .bar-button-clear-md-dark:hover:not(.disable-hover),\n.toolbar-md-light .bar-button-md-dark:hover:not(.disable-hover) {\n  color: #222;\n}\n\n.toolbar-md-light .bar-button-outline-md-dark {\n  border-color: #343434;\n  color: #343434;\n  background-color: transparent;\n}\n\n.toolbar-md-light .bar-button-outline-md-dark.activated {\n  background-color: transparent;\n}\n\n.toolbar-md-light .bar-button-outline-md-dark .button-effect {\n  background-color: #343434;\n}\n\n.toolbar-md-light .bar-button-solid-md-dark {\n  color: #fff;\n  background-color: #222;\n}\n\n.toolbar-md-light .bar-button-solid-md-dark.activated {\n  color: #fff;\n  background-color: #343434;\n}\n\n.bar-button-light-md,\n.bar-button-clear-md-light,\n.bar-button-md-light {\n  color: #f4f4f4;\n  background-color: transparent;\n}\n\n.bar-button-light-md:hover:not(.disable-hover),\n.bar-button-clear-md-light:hover:not(.disable-hover),\n.bar-button-md-light:hover:not(.disable-hover) {\n  color: #f4f4f4;\n}\n\n.bar-button-outline-md-light {\n  border-color: #e0e0e0;\n  color: #e0e0e0;\n  background-color: transparent;\n}\n\n.bar-button-outline-md-light.activated {\n  background-color: transparent;\n}\n\n.bar-button-outline-md-light .button-effect {\n  background-color: #e0e0e0;\n}\n\n.bar-button-solid-md-light {\n  color: #424242;\n  background-color: #f4f4f4;\n}\n\n.bar-button-solid-md-light.activated {\n  color: #424242;\n  background-color: #e0e0e0;\n}\n\n.toolbar-md-dark .toolbar-background-md {\n  background: #222;\n}\n\n.toolbar-md-dark .bar-button-clear-md,\n.toolbar-md-dark .bar-button-default-md,\n.toolbar-md-dark .bar-button-outline-md,\n.toolbar-md-dark .toolbar-title-md {\n  color: #fff;\n}\n\n.toolbar-md-dark .bar-button-clear-md .button-effect,\n.toolbar-md-dark .bar-button-default-md .button-effect,\n.toolbar-md-dark .bar-button-outline-md .button-effect {\n  background-color: #fff;\n}\n\n.toolbar-md-dark .bar-button-outline-md {\n  border-color: #fff;\n}\n\n.toolbar-md-dark .bar-button-primary-md,\n.toolbar-md-dark .bar-button-clear-md-primary,\n.toolbar-md-dark .bar-button-md-primary {\n  color: #488aff;\n  background-color: transparent;\n}\n\n.toolbar-md-dark .bar-button-primary-md:hover:not(.disable-hover),\n.toolbar-md-dark .bar-button-clear-md-primary:hover:not(.disable-hover),\n.toolbar-md-dark .bar-button-md-primary:hover:not(.disable-hover) {\n  color: #488aff;\n}\n\n.toolbar-md-dark .bar-button-outline-md-primary {\n  border-color: #427feb;\n  color: #427feb;\n  background-color: transparent;\n}\n\n.toolbar-md-dark .bar-button-outline-md-primary.activated {\n  background-color: transparent;\n}\n\n.toolbar-md-dark .bar-button-outline-md-primary .button-effect {\n  background-color: #427feb;\n}\n\n.toolbar-md-dark .bar-button-solid-md-primary {\n  color: #fff;\n  background-color: #488aff;\n}\n\n.toolbar-md-dark .bar-button-solid-md-primary.activated {\n  color: #fff;\n  background-color: #427feb;\n}\n\n.toolbar-md-dark .bar-button-secondary-md,\n.toolbar-md-dark .bar-button-clear-md-secondary,\n.toolbar-md-dark .bar-button-md-secondary {\n  color: #32db64;\n  background-color: transparent;\n}\n\n.toolbar-md-dark .bar-button-secondary-md:hover:not(.disable-hover),\n.toolbar-md-dark .bar-button-clear-md-secondary:hover:not(.disable-hover),\n.toolbar-md-dark .bar-button-md-secondary:hover:not(.disable-hover) {\n  color: #32db64;\n}\n\n.toolbar-md-dark .bar-button-outline-md-secondary {\n  border-color: #2ec95c;\n  color: #2ec95c;\n  background-color: transparent;\n}\n\n.toolbar-md-dark .bar-button-outline-md-secondary.activated {\n  background-color: transparent;\n}\n\n.toolbar-md-dark .bar-button-outline-md-secondary .button-effect {\n  background-color: #2ec95c;\n}\n\n.toolbar-md-dark .bar-button-solid-md-secondary {\n  color: #fff;\n  background-color: #32db64;\n}\n\n.toolbar-md-dark .bar-button-solid-md-secondary.activated {\n  color: #fff;\n  background-color: #2ec95c;\n}\n\n.toolbar-md-dark .bar-button-danger-md,\n.toolbar-md-dark .bar-button-clear-md-danger,\n.toolbar-md-dark .bar-button-md-danger {\n  color: #f53d3d;\n  background-color: transparent;\n}\n\n.toolbar-md-dark .bar-button-danger-md:hover:not(.disable-hover),\n.toolbar-md-dark .bar-button-clear-md-danger:hover:not(.disable-hover),\n.toolbar-md-dark .bar-button-md-danger:hover:not(.disable-hover) {\n  color: #f53d3d;\n}\n\n.toolbar-md-dark .bar-button-outline-md-danger {\n  border-color: #e13838;\n  color: #e13838;\n  background-color: transparent;\n}\n\n.toolbar-md-dark .bar-button-outline-md-danger.activated {\n  background-color: transparent;\n}\n\n.toolbar-md-dark .bar-button-outline-md-danger .button-effect {\n  background-color: #e13838;\n}\n\n.toolbar-md-dark .bar-button-solid-md-danger {\n  color: #fff;\n  background-color: #f53d3d;\n}\n\n.toolbar-md-dark .bar-button-solid-md-danger.activated {\n  color: #fff;\n  background-color: #e13838;\n}\n\n.toolbar-md-dark .bar-button-light-md,\n.toolbar-md-dark .bar-button-clear-md-light,\n.toolbar-md-dark .bar-button-md-light {\n  color: #f4f4f4;\n  background-color: transparent;\n}\n\n.toolbar-md-dark .bar-button-light-md:hover:not(.disable-hover),\n.toolbar-md-dark .bar-button-clear-md-light:hover:not(.disable-hover),\n.toolbar-md-dark .bar-button-md-light:hover:not(.disable-hover) {\n  color: #f4f4f4;\n}\n\n.toolbar-md-dark .bar-button-outline-md-light {\n  border-color: #e0e0e0;\n  color: #e0e0e0;\n  background-color: transparent;\n}\n\n.toolbar-md-dark .bar-button-outline-md-light.activated {\n  background-color: transparent;\n}\n\n.toolbar-md-dark .bar-button-outline-md-light .button-effect {\n  background-color: #e0e0e0;\n}\n\n.toolbar-md-dark .bar-button-solid-md-light {\n  color: #424242;\n  background-color: #f4f4f4;\n}\n\n.toolbar-md-dark .bar-button-solid-md-light.activated {\n  color: #424242;\n  background-color: #e0e0e0;\n}\n\n.toolbar-md-dark .bar-button-dark-md,\n.toolbar-md-dark .bar-button-clear-md-dark,\n.toolbar-md-dark .bar-button-md-dark {\n  color: #222;\n  background-color: transparent;\n}\n\n.toolbar-md-dark .bar-button-dark-md:hover:not(.disable-hover),\n.toolbar-md-dark .bar-button-clear-md-dark:hover:not(.disable-hover),\n.toolbar-md-dark .bar-button-md-dark:hover:not(.disable-hover) {\n  color: #222;\n}\n\n.toolbar-md-dark .bar-button-outline-md-dark {\n  border-color: #343434;\n  color: #343434;\n  background-color: transparent;\n}\n\n.toolbar-md-dark .bar-button-outline-md-dark.activated {\n  background-color: transparent;\n}\n\n.toolbar-md-dark .bar-button-outline-md-dark .button-effect {\n  background-color: #343434;\n}\n\n.toolbar-md-dark .bar-button-solid-md-dark {\n  color: #fff;\n  background-color: #222;\n}\n\n.toolbar-md-dark .bar-button-solid-md-dark.activated {\n  color: #fff;\n  background-color: #343434;\n}\n\n.bar-button-dark-md,\n.bar-button-clear-md-dark,\n.bar-button-md-dark {\n  color: #222;\n  background-color: transparent;\n}\n\n.bar-button-dark-md:hover:not(.disable-hover),\n.bar-button-clear-md-dark:hover:not(.disable-hover),\n.bar-button-md-dark:hover:not(.disable-hover) {\n  color: #222;\n}\n\n.bar-button-outline-md-dark {\n  border-color: #343434;\n  color: #343434;\n  background-color: transparent;\n}\n\n.bar-button-outline-md-dark.activated {\n  background-color: transparent;\n}\n\n.bar-button-outline-md-dark .button-effect {\n  background-color: #343434;\n}\n\n.bar-button-solid-md-dark {\n  color: #fff;\n  background-color: #222;\n}\n\n.bar-button-solid-md-dark.activated {\n  color: #fff;\n  background-color: #343434;\n}\n\n.bar-button-strong-md {\n  font-weight: bold;\n}\nion-toolbar.hydrated{visibility:inherit}");
Ionic.loadComponents(

/**** module id (dev mode) ****/
"ion-app.md",

/**** component modules ****/
function importComponent(exports, h, Context, publicPath) {
"use strict";
/** @hidden */








function getParentElement(elm) {
    if (elm.parentElement) {
        // normal element with a parent element
        return elm.parentElement;
    }
    if (elm.parentNode && elm.parentNode.host) {
        // shadow dom's document fragment
        return elm.parentNode.host;
    }
    return null;
}
function getPageElement(el) {
    const tabs = el.closest('ion-tabs');
    if (tabs) {
        return tabs;
    }
    const page = el.closest('ion-page,.ion-page,page-inner');
    if (page) {
        return page;
    }
    return getParentElement(el);
}


/**
 * @hidden
 * Given a side, return if it should be on the right
 * based on the value of dir
 * @param side the side
 * @param isRTL whether the application dir is rtl
 * @param defaultRight whether the default side is right
 */

/** @hidden */



/** @hidden */








/**
 * @private
 */

const rootNavs = new Map();
class App {
    constructor() {
        this.hoverCSS = false;
        this.useRouter = false;
    }
    componentWillLoad() {
        this.modeCode = this.config.get('mode');
        this.useRouter = this.config.getBoolean('useRouter', false);
        this.hoverCSS = this.config.getBoolean('hoverCSS', true);
    }
    registerRootNav(event) {
        rootNavs.set(event.detail.navId, event.detail);
    }
    getRootNavs() {
        const navs = [];
        rootNavs.forEach((rootNav) => {
            navs.push(rootNav);
        });
        return navs;
    }
    isScrolling() {
        // TODO - sync with Manu
        return false;
    }
    getActiveNavs(rootNavId) {
        /*const portal = portals.get(PORTAL_MODAL);
        if (portal && portal.views && portal.views.length) {
          return findTopNavs(portal);
        }
        */
        // TODO - figure out if a modal is open, don't use portal
        if (!rootNavs.size) {
            return [];
        }
        if (rootNavId) {
            return findTopNavs(rootNavs.get(rootNavId));
        }
        if (rootNavs.size === 1) {
            return findTopNavs(rootNavs.values().next().value);
        }
        // fallback to just using all root navs
        let activeNavs = [];
        rootNavs.forEach(nav => {
            activeNavs = activeNavs.concat(findTopNavs(nav));
        });
        return activeNavs;
    }
    getNavByIdOrName(nameOrId) {
        const navs = Array.from(rootNavs.values());
        for (const navContainer of navs) {
            const match = getNavByIdOrNameImpl(navContainer, nameOrId);
            if (match) {
                return match;
            }
        }
        return null;
    }
    hostData() {
        return {
            class: {
                [this.modeCode]: true,
                'enable-hover': this.hoverCSS
            }
        };
    }
    render() {
        const dom = [h("slot", null)];
        if (this.useRouter) {
            dom.push(h("ion-router-controller", null));
        }
        return dom;
    }
}
function findTopNavs(nav) {
    let containers = [];
    const childNavs = nav.getActiveChildNavs();
    if (!childNavs || !childNavs.length) {
        containers.push(nav);
    }
    else {
        childNavs.forEach(childNav => {
            const topNavs = findTopNavs(childNav);
            containers = containers.concat(topNavs);
        });
    }
    return containers;
}
function getNavByIdOrNameImpl(nav, id) {
    if (nav.id === id || nav.name === id) {
        return nav;
    }
    for (const child of nav.getAllChildNavs()) {
        const tmp = getNavByIdOrNameImpl(child, id);
        if (tmp) {
            return tmp;
        }
    }
    return null;
}

// @stencil/core

/**
 * Create the mode and color classes for the component based on the classes passed in
 */
function createThemedClasses(mode, color, classes) {
    let classObj = {};
    return classes.split(' ')
        .reduce((classObj, classString) => {
        classObj[classString] = true;
        if (mode) {
            classObj[`${classString}-${mode}`] = true;
            if (color) {
                classObj[`${classString}-${color}`] = true;
                classObj[`${classString}-${mode}-${color}`] = true;
            }
        }
        return classObj;
    }, classObj);
}
/**
 * Get the classes from a class list and return them as an object
 */
function getElementClassObject(classList) {
    let classObj = {};
    for (var i = 0; i < classList.length; i++) {
        classObj[classList[i]] = true;
    }
    return classObj;
}

class Content {
    constructor() {
        this.cTop = 0;
        this.cBottom = 0;
        this.dirty = false;
        /**
         * @input {boolean} If true, the content will scroll behind the headers
         * and footers. This effect can easily be seen by setting the toolbar
         * to transparent.
         */
        this.fullscreen = false;
    }
    onNavChanged() {
        this.resize();
    }
    componentDidLoad() {
        this.scrollEl = this.el.querySelector('ion-scroll');
        this.resize();
    }
    componentDidUnload() {
        this.scrollEl = null;
    }
    hostData() {
        return {
            class: {
                'statusbar-padding': this.config.getBoolean('statusbarPadding')
            }
        };
    }
    enableJsScroll() {
        this.scrollEl.jsScroll = true;
    }
    /**
     * Scroll to the top of the content component.
     *
     * @param {number} [duration]  Duration of the scroll animation in milliseconds. Defaults to `300`.
     * @returns {Promise} Returns a promise which is resolved when the scroll has completed.
     */
    scrollToTop(duration = 300) {
        return this.scrollEl.scrollToTop(duration);
    }
    /**
     * Scroll to the bottom of the content component.
     *
     * @param {number} [duration]  Duration of the scroll animation in milliseconds. Defaults to `300`.
     * @returns {Promise} Returns a promise which is resolved when the scroll has completed.
     */
    scrollToBottom(duration = 300) {
        return this.scrollEl.scrollToBottom(duration);
    }
    resize() {
        if (!this.scrollEl) {
            return;
        }
        if (this.fullscreen) {
            Context.dom.raf(() => {
                Context.dom.read(this.readDimensions.bind(this));
                Context.dom.write(this.writeDimensions.bind(this));
            });
        }
        else {
            this.cTop = this.cBottom = null;
            Context.dom.write(() => this.scrollEl.removeAttribute('style'));
        }
    }
    readDimensions() {
        const page = getPageElement(this.el);
        const top = Math.max(this.el.offsetTop, 0);
        const bottom = Math.max(page.offsetHeight - top - this.el.offsetHeight, 0);
        this.dirty = top !== this.cTop || bottom !== this.cBottom;
        this.cTop = top;
        this.cBottom = bottom;
    }
    writeDimensions() {
        if (this.dirty && this.scrollEl) {
            const style = this.scrollEl.style;
            style.paddingTop = this.cTop + 'px';
            style.paddingBottom = this.cBottom + 'px';
            style.top = -this.cTop + 'px';
            style.bottom = -this.cBottom + 'px';
            this.dirty = false;
        }
    }
    render() {
        const themedClasses = createThemedClasses(this.mode, this.color, 'content');
        const hostClasses = getElementClassObject(this.el.classList);
        const scrollClasses = Object.assign({}, themedClasses, hostClasses);
        this.resize();
        return [
            h("ion-scroll", { class: scrollClasses },
                h("slot", null)),
            h("slot", { name: 'fixed' })
        ];
    }
}

class Footer {
    constructor() {
        /**
         * @input {boolean} If true, adds transparency to the footer.
         * Note: In order to scroll content behind the footer, the `fullscreen`
         * attribute needs to be set on the content.
         * Only affects `ios` mode. Defaults to `false`.
         */
        this.translucent = false;
    }
    hostData() {
        const themedClasses = this.translucent ? createThemedClasses(this.mode, this.color, 'header-translucent') : {};
        const hostClasses = Object.assign({}, themedClasses);
        return {
            class: hostClasses
        };
    }
    render() {
        return h("slot", null);
    }
}

class Header {
    constructor() {
        /**
         * @input {boolean} If true, adds transparency to the header.
         * Note: In order to scroll content behind the header, the `fullscreen`
         * attribute needs to be set on the content.
         * Only affects `ios` mode. Defaults to `false`.
         */
        this.translucent = false;
    }
    hostData() {
        const themedClasses = this.translucent ? createThemedClasses(this.mode, this.color, 'header-translucent') : {};
        const hostClasses = Object.assign({}, themedClasses);
        return {
            class: hostClasses
        };
    }
    render() {
        return h("slot", null);
    }
}

class Navbar {
    constructor() {
        this.hideBackButton = false;
        this.hidden = false;
    }
    backButtonClick(ev) {
        ev.preventDefault();
        ev.stopPropagation();
        console.log('back button click');
    }
    componentDidLoad() {
        const buttons = this.el.querySelectorAll('ion-button');
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].setAttribute('button-type', 'bar-button');
        }
    }
    hostData() {
        return {
            class: {
                'statusbar-padding': this.config.getBoolean('statusbarPadding')
            }
        };
    }
    render() {
        const backButtonIcon = this.backButtonIcon || this.config.get('backButtonText', 'Back');
        const backButtonText = this.backButtonText || this.config.get('backButtonIcon', 'Back');
        const backgroundCss = createThemedClasses(this.mode, this.color, 'toolbar-background');
        const contentCss = createThemedClasses(this.mode, this.color, 'toolbar-content');
        const backButtonCss = createThemedClasses(this.mode, this.color, 'back-button');
        const backButtonIconCss = createThemedClasses(this.mode, this.color, 'back-button-icon');
        const backButtonTextCss = createThemedClasses(this.mode, this.color, 'back-button-text');
        return [
            h("div", { class: backgroundCss }),
            h("button", { onClick: this.backButtonClick.bind(this), class: backButtonCss, hidden: this.hideBackButton },
                backButtonIcon
                    ? h("ion-icon", { class: backButtonIconCss, name: backButtonIcon })
                    : null,
                h("span", { class: backButtonTextCss }, backButtonText)),
            h("slot", { name: 'start' }),
            h("slot", { name: 'mode-start' }),
            h("slot", { name: 'mode-end' }),
            h("slot", { name: 'end' }),
            h("div", { class: contentCss },
                h("slot", null))
        ];
    }
}

class Page {
    render() {
        return h("slot", null);
    }
}

class GestureController {
    constructor() {
        this.gestureId = 0;
        this.requestedStart = {};
        this.disabledGestures = {};
        this.disabledScroll = new Set();
        this.capturedId = null;
    }
    createGesture(gestureName, gesturePriority, disableScroll) {
        return new GestureDelegate(this, this.newID(), gestureName, gesturePriority, disableScroll);
    }
    createBlocker(opts = {}) {
        return new BlockerDelegate(this.newID(), this, opts.disable, !!opts.disableScroll);
    }
    newID() {
        return this.gestureId++;
    }
    start(gestureName, id, priority) {
        if (!this.canStart(gestureName)) {
            delete this.requestedStart[id];
            return false;
        }
        this.requestedStart[id] = priority;
        return true;
    }
    capture(gestureName, id, priority) {
        if (!this.start(gestureName, id, priority)) {
            return false;
        }
        let requestedStart = this.requestedStart;
        let maxPriority = -10000;
        for (let gestureID in requestedStart) {
            maxPriority = Math.max(maxPriority, requestedStart[gestureID]);
        }
        if (maxPriority === priority) {
            this.capturedId = id;
            this.requestedStart = {};
            return true;
        }
        delete requestedStart[id];
        return false;
    }
    release(id) {
        delete this.requestedStart[id];
        if (this.capturedId && id === this.capturedId) {
            this.capturedId = null;
        }
    }
    disableGesture(gestureName, id) {
        let set = this.disabledGestures[gestureName];
        if (!set) {
            set = new Set();
            this.disabledGestures[gestureName] = set;
        }
        set.add(id);
    }
    enableGesture(gestureName, id) {
        let set = this.disabledGestures[gestureName];
        if (set) {
            set.delete(id);
        }
    }
    disableScroll(id) {
        // let isEnabled = !this.isScrollDisabled();
        this.disabledScroll.add(id);
        // if (this._app && isEnabled && this.isScrollDisabled()) {
        //   console.debug('GestureController: Disabling scrolling');
        //   this._app._setDisableScroll(true);
        // }
    }
    enableScroll(id) {
        // let isDisabled = this.isScrollDisabled();
        this.disabledScroll.delete(id);
        // if (this._app && isDisabled && !this.isScrollDisabled()) {
        //   console.debug('GestureController: Enabling scrolling');
        //   this._app._setDisableScroll(false);
        // }
    }
    canStart(gestureName) {
        if (this.capturedId) {
            // a gesture already captured
            return false;
        }
        if (this.isDisabled(gestureName)) {
            return false;
        }
        return true;
    }
    isCaptured() {
        return !!this.capturedId;
    }
    isScrollDisabled() {
        return this.disabledScroll.size > 0;
    }
    isDisabled(gestureName) {
        let disabled = this.disabledGestures[gestureName];
        if (disabled && disabled.size > 0) {
            return true;
        }
        return false;
    }
}
class GestureDelegate {
    constructor(ctrl, gestureDelegateId, name, priority, disableScroll) {
        this.ctrl = ctrl;
        this.gestureDelegateId = gestureDelegateId;
        this.name = name;
        this.priority = priority;
        this.disableScroll = disableScroll;
    }
    canStart() {
        if (!this.ctrl) {
            return false;
        }
        return this.ctrl.canStart(this.name);
    }
    start() {
        if (!this.ctrl) {
            return false;
        }
        return this.ctrl.start(this.name, this.gestureDelegateId, this.priority);
    }
    capture() {
        if (!this.ctrl) {
            return false;
        }
        let captured = this.ctrl.capture(this.name, this.gestureDelegateId, this.priority);
        if (captured && this.disableScroll) {
            this.ctrl.disableScroll(this.gestureDelegateId);
        }
        return captured;
    }
    release() {
        if (this.ctrl) {
            this.ctrl.release(this.gestureDelegateId);
            if (this.disableScroll) {
                this.ctrl.enableScroll(this.gestureDelegateId);
            }
        }
    }
    destroy() {
        this.release();
        this.ctrl = null;
    }
}
class BlockerDelegate {
    constructor(blockerDelegateId, controller, disable, disableScroll) {
        this.blockerDelegateId = blockerDelegateId;
        this.controller = controller;
        this.disable = disable;
        this.disableScroll = disableScroll;
        this.blocked = false;
    }
    block() {
        if (!this.controller) {
            return;
        }
        if (this.disable) {
            this.disable.forEach(gesture => {
                this.controller.disableGesture(gesture, this.blockerDelegateId);
            });
        }
        if (this.disableScroll) {
            this.controller.disableScroll(this.blockerDelegateId);
        }
        this.blocked = true;
    }
    unblock() {
        if (!this.controller) {
            return;
        }
        if (this.disable) {
            this.disable.forEach(gesture => {
                this.controller.enableGesture(gesture, this.blockerDelegateId);
            });
        }
        if (this.disableScroll) {
            this.controller.enableScroll(this.blockerDelegateId);
        }
        this.blocked = false;
    }
    destroy() {
        this.unblock();
        this.controller = null;
    }
}

class Scroll {
    constructor() {
        this.positions = [];
        this.queued = false;
        this.isScrolling = false;
        this.detail = {};
        this.enabled = true;
        this.jsScroll = false;
    }
    jsScrollChanged(js) {
        if (js) {
            throw 'jsScroll: TODO!';
        }
    }
    componentDidLoad() {
        if (Context.isServer) {
            return;
        }
        const gestureCtrl = Context.gesture = Context.gesture || new GestureController;
        this.gesture = gestureCtrl.createGesture('scroll', 100, false);
    }
    componentDidUnload() {
        this.gesture && this.gesture.destroy();
        this.gesture = this.detail = this.detail.event = null;
    }
    scrollToTop(duration) {
        return this.scrollToPoint(0, 0, duration);
    }
    scrollToBottom(duration) {
        const y = (this.el)
            ? this.el.scrollHeight - this.el.clientHeight
            : 0;
        return this.scrollToPoint(0, y, duration);
    }
    scrollToPoint(x, y, duration, done) {
        // scroll animation loop w/ easing
        // credit https://gist.github.com/dezinezync/5487119
        let promise;
        if (done === undefined) {
            // only create a promise if a done callback wasn't provided
            // done can be a null, which avoids any functions
            promise = new Promise(resolve => {
                done = resolve;
            });
        }
        const self = this;
        const el = self.el;
        if (!el) {
            // invalid element
            done();
            return promise;
        }
        if (duration < 32) {
            self.setTop(y);
            self.setLeft(x);
            done();
            return promise;
        }
        const fromY = el.scrollTop;
        const fromX = el.scrollLeft;
        const maxAttempts = (duration / 16) + 100;
        let startTime;
        let attempts = 0;
        let stopScroll = false;
        // scroll loop
        function step(timeStamp) {
            attempts++;
            if (!self.el || stopScroll || attempts > maxAttempts) {
                self.isScrolling = false;
                el.style.transform = el.style.webkitTransform = '';
                done();
                return;
            }
            let time = Math.min(1, ((timeStamp - startTime) / duration));
            // where .5 would be 50% of time on a linear scale easedT gives a
            // fraction based on the easing method
            let easedT = (--time) * time * time + 1;
            if (fromY !== y) {
                self.setTop((easedT * (y - fromY)) + fromY);
            }
            if (fromX !== x) {
                self.setLeft(Math.floor((easedT * (x - fromX)) + fromX));
            }
            if (easedT < 1) {
                // do not use DomController here
                // must use nativeRaf in order to fire in the next frame
                Context.dom.raf(step);
            }
            else {
                stopScroll = true;
                self.isScrolling = false;
                el.style.transform = el.style.webkitTransform = '';
                done();
            }
        }
        // start scroll loop
        self.isScrolling = true;
        // chill out for a frame first
        Context.dom.write(() => {
            Context.dom.write(timeStamp => {
                startTime = timeStamp;
                step(timeStamp);
            });
        });
        return promise;
    }
    // Native Scroll *************************
    onNativeScroll() {
        if (!this.queued) {
            this.queued = true;
            Context.dom.read((timeStamp) => {
                this.queued = false;
                this.onScroll(timeStamp);
            });
        }
    }
    onScroll(timeStamp) {
        const detail = this.detail;
        const positions = this.positions;
        detail.timeStamp = timeStamp;
        // get the current scrollTop
        // ******** DOM READ ****************
        detail.scrollTop = this.getTop();
        // get the current scrollLeft
        // ******** DOM READ ****************
        detail.scrollLeft = this.getLeft();
        if (!this.isScrolling) {
            // currently not scrolling, so this is a scroll start
            this.isScrolling = true;
            // remember the start positions
            detail.startY = detail.scrollTop;
            detail.startX = detail.scrollLeft;
            // new scroll, so do some resets
            detail.velocityY = detail.velocityX = detail.deltaY = detail.deltaX = positions.length = 0;
            // emit only on the first scroll event
            if (this.onionScrollStart) {
                this.onionScrollStart(detail);
            }
            else {
                this.ionScrollStart.emit(detail);
            }
        }
        // actively scrolling
        positions.push(detail.scrollTop, detail.scrollLeft, detail.timeStamp);
        if (positions.length > 3) {
            // we've gotten at least 2 scroll events so far
            detail.deltaY = (detail.scrollTop - detail.startY);
            detail.deltaX = (detail.scrollLeft - detail.startX);
            var endPos = (positions.length - 1);
            var startPos = endPos;
            var timeRange = (detail.timeStamp - 100);
            // move pointer to position measured 100ms ago
            for (var i = endPos; i > 0 && positions[i] > timeRange; i -= 3) {
                startPos = i;
            }
            if (startPos !== endPos) {
                // compute relative movement between these two points
                var deltaY = (positions[startPos - 2] - positions[endPos - 2]);
                var deltaX = (positions[startPos - 1] - positions[endPos - 1]);
                var factor = 1 / (positions[startPos] - positions[endPos]);
                // based on XXms compute the movement to apply for each render step
                detail.velocityY = deltaY * factor;
                detail.velocityX = deltaX * factor;
            }
        }
        clearTimeout(this.tmr);
        this.tmr = setTimeout(() => {
            // haven't scrolled in a while, so it's a scrollend
            this.isScrolling = false;
            Context.dom.read((timeStamp) => {
                if (!this.isScrolling) {
                    this.onEnd(timeStamp);
                }
            });
        }, 80);
        // emit on each scroll event
        if (this.onionScroll) {
            this.onionScroll(detail);
        }
        else {
            this.ionScroll.emit(detail);
        }
    }
    onEnd(timeStamp) {
        const detail = this.detail;
        detail.timeStamp = timeStamp;
        // emit that the scroll has ended
        if (this.onionScrollEnd) {
            this.onionScrollEnd(detail);
        }
        else {
            this.ionScrollEnd.emit(detail);
        }
    }
    /** DOM READ */
    getTop() {
        if (this.jsScroll) {
            return this._t;
        }
        return this._t = this.el.scrollTop;
    }
    /** DOM READ */
    getLeft() {
        if (this.jsScroll) {
            return 0;
        }
        return this._l = this.el.scrollLeft;
    }
    /** DOM WRITE */
    setTop(top) {
        this._t = top;
        if (this.jsScroll) {
            this.el.style.transform = this.el.style.webkitTransform = `translate3d(${this._l * -1}px,${top * -1}px,0px)`;
        }
        else {
            this.el.scrollTop = top;
        }
    }
    /** DOM WRITE */
    setLeft(left) {
        this._l = left;
        if (this.jsScroll) {
            this.el.style.transform = this.el.style.webkitTransform = `translate3d(${left * -1}px,${this._t * -1}px,0px)`;
        }
        else {
            this.el.scrollLeft = left;
        }
    }
    render() {
        return (
        // scroll-inner is used to keep custom user padding
        h("div", { class: 'scroll-inner' },
            h("slot", null)));
    }
}

class ToolbarTitle {
    render() {
        const themedClasses = createThemedClasses(this.mode, this.color, 'toolbar-title');
        return [
            h("div", { class: themedClasses },
                h("slot", null))
        ];
    }
}

class Toolbar {
    constructor() {
        /**
         * @input {boolean} If true, adds transparency to the header.
         * Note: In order to scroll content behind the header, the `fullscreen`
         * attribute needs to be set on the content.
         * Only affects `ios` mode. Defaults to `false`.
         */
        this.translucent = false;
    }
    componentDidLoad() {
        const buttons = this.el.querySelectorAll('ion-button');
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].setAttribute('button-type', 'bar-button');
        }
    }
    hostData() {
        const themedClasses = this.translucent ? createThemedClasses(this.mode, this.color, 'toolbar-translucent') : {};
        const hostClasses = Object.assign({}, themedClasses, { 'statusbar-padding': this.config.getBoolean('statusbarPadding') });
        return {
            class: hostClasses
        };
    }
    render() {
        const backgroundCss = createThemedClasses(this.mode, this.color, 'toolbar-background');
        const contentCss = createThemedClasses(this.mode, this.color, 'toolbar-content');
        return [
            h("div", { class: backgroundCss }),
            h("slot", { name: 'start' }),
            h("slot", { name: 'mode-start' }),
            h("slot", { name: 'mode-end' }),
            h("slot", { name: 'end' }),
            h("div", { class: contentCss },
                h("slot", null))
        ];
    }
}

exports['ion-app'] = App;
exports['ion-content'] = Content;
exports['ion-footer'] = Footer;
exports['ion-header'] = Header;
exports['ion-navbar'] = Navbar;
exports['ion-page'] = Page;
exports['ion-scroll'] = Scroll;
exports['ion-title'] = ToolbarTitle;
exports['ion-toolbar'] = Toolbar;
},


/***************** ion-app *****************/
[
/** ion-app: tag **/
"ion-app",

/** ion-app: members **/
[
  [ "config", /** prop context **/ 3, /** do not observe attribute **/ 0, /** type any **/ 1, /** context ***/ "config" ],
  [ "element", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "getActiveNavs", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "getNavByIdOrName", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "getRootNavs", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "hoverCSS", /** state **/ 5, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "isScrolling", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "modeCode", /** state **/ 5, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "useRouter", /** state **/ 5, /** do not observe attribute **/ 0, /** type any **/ 1 ]
],

/** ion-app: host **/
{"theme":"app"}

],

/***************** ion-content *****************/
[
/** ion-content: tag **/
"ion-content",

/** ion-content: members **/
[
  [ "config", /** prop context **/ 3, /** do not observe attribute **/ 0, /** type any **/ 1, /** context ***/ "config" ],
  [ "el", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "enableJsScroll", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "fullscreen", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "ionScroll", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "ionScrollEnd", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "ionScrollStart", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "scrollToBottom", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "scrollToTop", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ]
],

/** ion-content: host **/
{}

],

/***************** ion-footer *****************/
[
/** ion-footer: tag **/
"ion-footer",

/** ion-footer: members **/
[
  [ "translucent", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ]
],

/** ion-footer: host **/
{"theme":"footer"}

],

/***************** ion-header *****************/
[
/** ion-header: tag **/
"ion-header",

/** ion-header: members **/
[
  [ "translucent", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ]
],

/** ion-header: host **/
{"theme":"header"}

],

/***************** ion-navbar *****************/
[
/** ion-navbar: tag **/
"ion-navbar",

/** ion-navbar: members **/
[
  [ "backButtonIcon", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "backButtonText", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "config", /** prop context **/ 3, /** do not observe attribute **/ 0, /** type any **/ 1, /** context ***/ "config" ],
  [ "el", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "hidden", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "hideBackButton", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ]
],

/** ion-navbar: host **/
{"theme":"toolbar"}

],

/***************** ion-page *****************/
[
/** ion-page: tag **/
"ion-page",

/** ion-page: members **/
0 /* no members */,

/** ion-page: host **/
{}

],

/***************** ion-scroll *****************/
[
/** ion-scroll: tag **/
"ion-scroll",

/** ion-scroll: members **/
[
  [ "config", /** prop context **/ 3, /** do not observe attribute **/ 0, /** type any **/ 1, /** context ***/ "config" ],
  [ "el", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "enabled", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "jsScroll", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "onionScroll", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "onionScrollEnd", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "onionScrollStart", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "scrollToBottom", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "scrollToPoint", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "scrollToTop", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ]
],

/** ion-scroll: host **/
{},

/** ion-scroll: events **/
[
  [
    /*****  ion-scroll ionScrollStart ***** /
    /* event name ***/ "ionScrollStart"
  ],
  [
    /*****  ion-scroll ionScroll ***** /
    /* event name ***/ "ionScroll"
  ],
  [
    /*****  ion-scroll ionScrollEnd ***** /
    /* event name ***/ "ionScrollEnd"
  ]
],

/** ion-scroll: propWillChanges **/
0 /* no prop will change methods */,

/** ion-scroll: propDidChanges **/
[
  [
    /*****  ion-scroll prop did change [0] ***** /
    /* prop name **/ "jsScroll",
    /* call fn *****/ "jsScrollChanged"
  ]
]

],

/***************** ion-title *****************/
[
/** ion-title: tag **/
"ion-title",

/** ion-title: members **/
0 /* no members */,

/** ion-title: host **/
{"theme":"title"}

],

/***************** ion-toolbar *****************/
[
/** ion-toolbar: tag **/
"ion-toolbar",

/** ion-toolbar: members **/
[
  [ "color", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "config", /** prop context **/ 3, /** do not observe attribute **/ 0, /** type any **/ 1, /** context ***/ "config" ],
  [ "el", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "mode", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "translucent", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ]
],

/** ion-toolbar: host **/
{"theme":"toolbar"}

]
);