
// quite handy if you want to create a typed store mutation without creating a mutation for each property

export function updatePropertyOfObject<Object, Property extends keyof Object>({
  object,
  property,
  value
}: {
  object: Object,
  property: Property,
  value: Object[Property]
}) {
  object[property] = value;
}

// example of usage

type ShoppingList = {
  fruits: string[];
  money: number;
}

const myShoppingList: ShoppingList = {
  fruits: [],
  money: 20
}

updatePropertyOfObject({
  object: myShoppingList,
  property: "fruits",
  value: ["apple", "pear"]
})





