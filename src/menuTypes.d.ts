export interface MenuItem {
    id: number;
    name: string;
    course: "starter" | "main" | "dessert"; // value restriction
    price: number;
    nutrition: {
        calories: number;
        allergens: string[];
    };
    discountPercent?: number; // optional property
    availableFrom?: Date; // optional property
}

export interface ComboDeal {
    id: number;
    name: string;
    items: MenuItem[];
    price: number;
}

export type OrderLine = MenuItem | ComboDeal; 
// ALIAS: order line is either a MenuItem or a ComboDeal

export type KitchenTicket = Readonly<Pick<MenuItem, "name" | "course">>

export type AllergyCard = Omit<MenuItem, "nutrition"> & { warning: string }