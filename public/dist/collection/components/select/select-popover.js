var SelectPopover = /** @class */ (function () {
    function SelectPopover() {
    }
    SelectPopover.prototype.valueChanged = function (val) {
        console.log('Select popover value', val);
    };
    // public get value() {
    //   let checkedOption = this.options.find(option => option.checked);
    //   return checkedOption ? checkedOption.value : undefined;
    // }
    // public set value(value: any) {
    //   let checkedOption = this.options.find(option => option.value === value);
    //   if (checkedOption && checkedOption.handler) {
    //     checkedOption.handler();
    //   }
    //   this.viewController.dismiss(value);
    // }
    SelectPopover.prototype.render = function () {
        console.log(this.options);
        return (h("ion-list", { "a": { "radio-group": true, "value": "{this.value}" } }, this.options.map(function (option) {
            return h("ion-item", 0,
                h("ion-label", 0, option.text),
                h("ion-radio", { "a": { "disabled": option.disabled }, "p": { "checked": option.checked, "value": option.value } }));
        })));
    };
    return SelectPopover;
}());
export { SelectPopover };
