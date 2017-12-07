import { ItemSliding } from '../item-sliding/item-sliding';
export declare class List {
    private openedItem;
    getOpenedItem(): ItemSliding;
    setOpenedItem(itemSliding: ItemSliding): void;
    closeSlidingItems(): boolean;
    render(): JSX.Element;
}
