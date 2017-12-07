import { ComponentDidLoad, EventEmitter } from '@stencil/core';
import { HTMLIonRadioElementEvent } from '../radio/radio';
import { RadioGroupInput, TextInputChangeEvent } from '../../utils/input-interfaces';
export declare class RadioGroup implements ComponentDidLoad, RadioGroupInput {
    radios: HTMLIonRadioElement[];
    el: HTMLElement;
    labelId: string;
    allowEmptySelection: boolean;
    disabled: boolean;
    /**
     * The name of the control, which is submitted with the form data.
     */
    name: string;
    /**
     * @input {string} the value of the radio group.
     */
    value: string;
    valueChanged(): void;
    /**
     * @output {Event} Emitted when the value has changed.
     */
    ionChange: EventEmitter<TextInputChangeEvent>;
    onRadioDidLoad(ev: HTMLIonRadioElementEvent): void;
    onRadioDidUnload(ev: HTMLIonRadioElementEvent): void;
    onRadioSelect(ev: HTMLIonRadioElementEvent): void;
    componentWillLoad(): void;
    componentDidLoad(): void;
    hostData(): any;
    render(): JSX.Element;
}
