import { User } from '../models/user.model';

export class Security {
    private static petshopUser = 'petshop.user';
    private static petshopToken = 'petshop.token';

    public static set(user: User, token: string) {
        const data = JSON.stringify(user);

        localStorage.setItem(this.petshopUser, btoa(data));
        localStorage.setItem(this.petshopToken, token);
    }

    public static setUser(user: User) {
        const data = JSON.stringify(user);
        localStorage.setItem(this.petshopUser, btoa(data));
    }

    public static setToken(token: string) {
        localStorage.setItem(this.petshopToken, token);
    }

    public static getUser(): User {
        const data = localStorage.getItem(this.petshopUser);
        if (data) {
            return JSON.parse(atob(data));
        } else {
            return null;
        }
    }

    public static getToken(): string {
        const data = localStorage.getItem(this.petshopToken);
        if (data) {
            return data;
        } else {
            return null;
        }
    }

    public static hasToken(): boolean {
        if (this.getToken()) {
            return true;
        } else {
            return false;
        }
    }

    public static clear() {
        localStorage.removeItem(this.petshopUser);
        localStorage.removeItem(this.petshopToken);
    }
}
