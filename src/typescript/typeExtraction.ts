//// I'm too hungry, well I have to do some groceries
// but which fruits and vegetables are available at the produce market?

import { isString } from "../tools/type-guards";

const fruits = ["apple", "pear", "orange"] as const;
type Fruit = typeof fruits[number];

const vegetables = {
  carrot: undefined,
  tomato: null,
  potato: 0
} as const;
type Vegetable = keyof typeof vegetables;

type Produce = Fruit | Vegetable;

// ok, let's write down what I want to buy

type GroceryListWithEveryKindOfProduce = {
  [key in Produce]: number;
}

type GroceryList = Partial<GroceryListWithEveryKindOfProduce>

const myGroceryList: GroceryList = {
  orange: 4,
  potato: 10,
  carrot: 10
}

// bro: hey, can you buy me some stuff?
// sure

const brosWishlist: {[key: string]: number} = {
  tomato: 5,
  carrot: 5,
  pasta: 1
} as const;

// wait bro, they don't sale pasta at the market
// bro: ok ignore it then

function isProduce(thing: unknown): thing is Produce {
  if (!isString(thing)) {
    return false;
  }
  return thing in fruits || vegetables.hasOwnProperty(thing);
}

function addToGroceryList(originalGroceryList: GroceryList, extraThingsToBuy: {[key: string]: number}): GroceryList {
  const updatedGroceryList: GroceryList = {...originalGroceryList};
  for (const thing in extraThingsToBuy) {
    if (isProduce(thing)) {
      if (thing in updatedGroceryList) {
        updatedGroceryList[thing] = (updatedGroceryList[thing] ?? 0) + extraThingsToBuy[thing];
      } else {
        updatedGroceryList[thing] = extraThingsToBuy[thing] ?? 0;
      }
    }
  }
  return updatedGroceryList;
}

const updatedGroceryList = addToGroceryList(myGroceryList, brosWishlist);
