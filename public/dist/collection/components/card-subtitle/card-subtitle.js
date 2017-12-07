export class CardSubtitle {
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
