import { Animation, Menu } from '../../../index';
import baseAnimation from './base';
/**
 * @hidden
 * Menu Push Type
 * The content slides over to reveal the menu underneath.
 * The menu itself also slides over to reveal its bad self.
 */
export default function (Animation, _, menu) {
    let contentOpenedX, menuClosedX;
    const width = menu.width;
    if (menu.isRightSide) {
        contentOpenedX = -width + 'px';
        menuClosedX = width + 'px';
    }
    else {
        contentOpenedX = width + 'px';
        menuClosedX = -width + 'px';
    }
    const menuAni = new Animation()
        .addElement(menu.menuInnerEl)
        .fromTo('translateX', menuClosedX, '0px');
    const contentAni = new Animation()
        .addElement(menu.contentEl)
        .fromTo('translateX', '0px', contentOpenedX);
    const backdropAni = new Animation()
        .addElement(menu.backdropEl)
        .fromTo('opacity', 0.01, 0.2);
    return baseAnimation(Animation)
        .add(menuAni)
        .add(backdropAni)
        .add(contentAni);
}
