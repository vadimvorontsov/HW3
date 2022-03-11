// eslint-disable-next-line @typescript-eslint/no-explicit-any
type FIXME = any;

const orderStates = [
  "initial",
  "inWork",
  "buyingSupplies",
  "producing",
  "fullfilled",
] as const;

type OrderState = typeof orderStates[number];

type OrderTypeResult = Exclude<OrderState, "buyingSupplies" | "producing">

// Hint: type guards
export const getUserOrderStates = (orderStates: OrderState[]): OrderState[] =>
  orderStates.filter(
    (state) => state !== "buyingSupplies" && state !== "producing"
  );
