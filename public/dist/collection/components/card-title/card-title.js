export class CardTitle {
    hostData() {
        return {
            'role': 'heading',
            'aria-level': '2'
        };
    }
    render() {
        return h("slot", null);
    }
}
