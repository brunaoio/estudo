import { Cart } from '../models/cart.model';
import { CartItem } from '../models/cart-item.model';

export class CartUtil {
    private static cartkey = 'petshopcart';
    public static get(): Cart {
        const data = localStorage.getItem(this.cartkey);
        if (!data) {
            return new Cart();
        }
        return JSON.parse(data);
    }

    public static loadQuantity() {
        let qtd = 0;
        const cart = this.get();
        cart.itens.forEach((item) => {
            qtd += item.quantity;
        });
        return qtd;
    }

    public static add(id: string, product: string, quantity: number, price: number, image: string) {
        const cart = this.get();
        const item = new CartItem(id, product, quantity, price, image);
        cart.itens.push(item);
        localStorage.setItem(this.cartkey, JSON.stringify(cart));
    }

    public static update(cart: Cart) {
        localStorage.setItem(this.cartkey, JSON.stringify(cart));
    }

    public static clear() {
        localStorage.removeItem(this.cartkey);
    }
}
