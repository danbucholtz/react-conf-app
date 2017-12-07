export declare class Footer {
    mode: string;
    color: string;
    /**
     * @input {boolean} If true, adds transparency to the footer.
     * Note: In order to scroll content behind the footer, the `fullscreen`
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
