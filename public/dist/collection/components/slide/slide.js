export class Slide {
    hostData() {
        return {
            class: {
                'slide-zoom': true,
                'swiper-slide': true
            }
        };
    }
    render() {
        return h("slot", null);
    }
}
