export declare class Header {
    mode: string;
    color: string;
    /**
     * @input {boolean} If true, adds transparency to the header.
     * Note: In order to scroll content behind the header, the `fullscreen`
     * attribute needs to be set on the content.
     * Only affects `ios` mode. Defaults to `false`.
     */
    translucent: boolean;
    hostData(): {
        class: {
            [x: string]: boolean;
        };
    };
    render(): JSX.Element;
}
