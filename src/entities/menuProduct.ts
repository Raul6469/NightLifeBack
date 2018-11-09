import { ObjectID } from "mongodb";
import { Entity } from "./entity.abstract";
import { Product } from "./product";

export class MenuProduct extends Entity {
    public product: Product;
    public price: number;

    constructor(menuProduct: MenuProduct) {
        super();

        this.product = menuProduct.product;
        this.price = menuProduct.price;
    }
}
