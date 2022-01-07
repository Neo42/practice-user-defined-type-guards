/* eslint-disable @typescript-eslint/no-unused-vars */
interface Fruit {
  name: string;
  sweetness: number;
  color: unknown;
}

// Add the necessary return types and implementation for these
// user-defined type guards
function isString(maybeString: unknown): maybeString is string {
  return typeof maybeString === "string";
}
function isFruit(maybeFruit: unknown): maybeFruit is Fruit {
  return !!(
    typeof maybeFruit === "object" &&
    maybeFruit &&
    "sweetness" in maybeFruit
  );
}
function assertIsFruit(maybeFruit: unknown): asserts maybeFruit is Fruit {
  if (
    !(typeof maybeFruit === "object" && maybeFruit && "sweetness" in maybeFruit)
  )
    throw new Error("maybeFruit is not a fruit.");
}

// Don't change anything in this function
function checkFruit(fruit: unknown) {
  if (isFruit(fruit)) {
    if (isString(fruit.color)) {
      console.log(fruit.color.toUpperCase());
    }
  }
  assertIsFruit(fruit);

  console.log(`This fruit is ${fruit.name}`);
}
