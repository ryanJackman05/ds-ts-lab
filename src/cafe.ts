import { MenuItem, ComboDeal, OrderLine, KitchenTicket, AllergyCard } from "./menuTypes";
// ---------------------------------------------------------------
// 1. THE MENU
// ---------------------------------------------------------------

const soup: MenuItem = {
  id: 1,
  name: "Roast Tomato Soup",
  course: "starter",
  price: 5.5,
  nutrition: {
    calories: 180,
    allergens: ["celery"],
  },
};

const risotto: MenuItem = {
  id: 2,
  name: "Mushroom Risotto",
  // TS: One of the objects below will fail to compile. Good.
  course: "main",
  price: 14.0,
  nutrition: {
    calories: 620,
    allergens: ["milk"],
  },
  availableFrom: new Date("2024-06-01"),
};

const brownie: MenuItem = {
  id: 3,
  name: "Chocolate Brownie",
  course: "dessert",
  price: 6.0,
  nutrition: {
    calories: 450,
    allergens: ["milk", "eggs", "gluten"],
  },
  discountPercent: 10,
};

const menu = [soup, risotto, brownie];

const lunchCombo : ComboDeal = {
  id: 101,
  name: "Soup & Sweet",
  items: [soup, brownie],
  price: 10.0,
};

const currentOrder : OrderLine[] = [risotto, lunchCombo, soup]; // each 'line' is one part of an order

// ---------------------------------------------------------------
// 2. FUNCTIONS
// ---------------------------------------------------------------

function describe(item : MenuItem) : string {
  return `${item.name} (${item.course}) - EUR ${item.price.toFixed(2)}`;
}

function lineTotal(line : OrderLine) {
  if ("items" in line) {
    return line.price;
  }
  return line.price;
}

function orderTotal(lines : OrderLine[]) {
  return lines.reduce((total, line) => total + lineTotal(line), 0);
}

function filterMenu(items : MenuItem[], predicate : (item: MenuItem) => boolean) {
  return items.filter(predicate);
}

function cheapest(items : MenuItem[], max? : number) {
  const sorted = items.sort((a, b) => a.price - b.price);
  return sorted.slice(0, max !== undefined ? max : sorted.length);
}

function firstMatch<T> (data : T[], criteria : (d:T) => boolean) : T | undefined {
  return data.find(criteria);
}

function updateItem(item : MenuItem, changes : Partial<MenuItem>) {
  return { ...item, ...changes };
}

function kitchenTicket(item : MenuItem) : KitchenTicket {
  return {
    name: item.name,
    course: item.course,
  };
}

function allergyCard(item : MenuItem) : AllergyCard {
  return {
    id: item.id,
    name: item.name,
    course: item.course,
    price: item.price,
    warning: `Contains: ${item.nutrition.allergens.join(", ")}`, // auto-suggested by VSC
  };
}

// ---------------------------------------------------------------
// 3. TESTS
// ---------------------------------------------------------------

console.log(describe(risotto));
console.log(orderTotal(currentOrder));
console.log(filterMenu(menu, (i) => i.nutrition.calories < 500));
console.log(cheapest(menu, 2));
console.log(cheapest(menu));
console.log(firstMatch(menu, (i) => i.course === "dessert"));
console.log(updateItem(soup, { price: 6.0, discountPercent: 10 }));
console.log(kitchenTicket(brownie));
console.log(allergyCard(brownie));

// kitchenTicket(brownie).name = "Something else"; 
// // Due to being Readonly, this line can not compile, as the returned KitchenTicket properties can not be changed.

console.log(describe(risotto)); // lunchCombo is not a menuItem, changed to risotto
console.log(updateItem(soup, { price: 7.00 })); // wrong type for price, converted to float
console.log(firstMatch(menu, (i) => i.nutrition.calories < 300)); // calories property is under nutrition
