/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
Ionic.loadComponents(

/**** module id (dev mode) ****/
"ion-checkbox",

/**** component modules ****/
function importComponent(exports, h, t, Context, publicPath) {
var Checkbox = /** @class */ (function () {
    function Checkbox() {
        /*
         * @input {boolean} If true, the checkbox is checked. Default false.
         */
        this.checked = false;
        /*
         * @input {boolean} If true, the user cannot interact with this element. Default false.
         */
        this.disabled = false;
    }
    Checkbox.prototype["componentWillLoad"] = function () {
        this.emitStyle();
    };
    Checkbox.prototype.checkedChanged = function (val) {
        this.ionChange.emit({ checked: val });
        this.emitStyle();
    };
    Checkbox.prototype.disabledChanged = function () {
        this.emitStyle();
    };
    Checkbox.prototype.emitStyle = function () {
        var _this = this;
        clearTimeout(this.styleTmr);
        this.styleTmr = setTimeout(function () {
            _this.ionStyle.emit({
                'checkbox-disabled': _this.disabled,
                'checkbox-checked': _this.checked,
            });
        });
    };
    Checkbox.prototype.onSpace = function (ev) {
        this.toggle();
        ev.stopPropagation();
        ev.preventDefault();
    };
    Checkbox.prototype.toggle = function () {
        this.checked = !this.checked;
    };
    Checkbox.prototype.hostData = function () {
        return {
            class: {
                'checkbox-checked': this.checked,
                'checkbox-disabled': this.disabled
            }
        };
    };
    Checkbox.prototype.render = function () {
        var _this = this;
        var checkboxClasses = {
            'checkbox-icon': true,
            'checkbox-checked': this.checked
        };
        return [
            h("div", { "c": checkboxClasses },
                h("div", { "c": { "checkbox-inner": true } })),
            h("button", { "c": { "checkbox-cover": true }, "o": { "click": function () { return _this.toggle(); } }, "a": { "aria-checked": this.checked ? 'true' : false, "aria-disabled": this.disabled ? 'true' : false, "aria-labelledby": this.labelId, "role": 'checkbox' }, "p": { "id": this.id, "tabIndex": 0 } })
        ];
    };
    return Checkbox;
}());

exports['ION-CHECKBOX'] = Checkbox;
},


/***************** ion-checkbox *****************/
[
/** ion-checkbox: tag **/
"ION-CHECKBOX",

/** ion-checkbox: members **/
[
  [ "checked", /** prop state **/ 2, /** type boolean **/ 1 ],
  [ "disabled", /** prop state **/ 2, /** type boolean **/ 1 ],
  [ "value", /** prop state **/ 2 ]
],

/** ion-checkbox: host **/
{"theme":"checkbox"},

/** ion-checkbox: events **/
[
  [
    /*****  ion-checkbox ionChange ***** /
    /* event name ***/ "ionChange"
  ],
  [
    /*****  ion-checkbox ionStyle ***** /
    /* event name ***/ "ionStyle"
  ]
],

/** ion-checkbox: propWillChanges **/
0 /* no prop will change methods */,

/** ion-checkbox: propDidChanges **/
[
  [
    /*****  ion-checkbox prop did change [0] ***** /
    /* prop name **/ "checked",
    /* call fn *****/ "checkedChanged"
  ],
  [
    /*****  ion-checkbox prop did change [1] ***** /
    /* prop name **/ "disabled",
    /* call fn *****/ "disabledChanged"
  ]
]

]
)