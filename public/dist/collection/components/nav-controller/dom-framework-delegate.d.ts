import { FrameworkDelegate, FrameworkMountingData } from '../../index';
export declare class DomFrameworkDelegate implements FrameworkDelegate {
    attachViewToDom(parentElement: HTMLElement, tagOrElement: string | HTMLElement, propsOrDataObj?: any, classesToAdd?: string[]): Promise<FrameworkMountingData>;
    removeViewFromDom(parentElement: HTMLElement, childElement: HTMLElement): Promise<FrameworkMountingData>;
}
