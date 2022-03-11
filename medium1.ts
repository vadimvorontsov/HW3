// Задание второго уровня 1
// Есть объединение (юнион) типов заказов в различных состояниях
// и функция filterOnlyInitialAndInWorkOrder которая принимает заказы в любых состояниях
// А возвращает только initial и inWork
// Нужно заменить FIXME на правильный тип вычисленный на основе Order

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type FIXME = any;

type OrderInitial = {
    state: "initial";
    sum: number;
}

type OrderInWork = {
    state: "inWork";
    sum: number;
    workerId: number;
}

type Order =
    | OrderInitial
    | OrderInWork
    | {
    state: "buyingSupplies";
    sum: number;
    workerId: number;
    suppliesSum: number;
}
    | {
    state: "producing";
    sum: number;
    workerId: number;
    suppliesSum: number;
    produceEstimate: Date;
}
    | {
    state: "fullfilled";
    sum: number;
    workerId: number;
    suppliesSum: number;
    produceEstimate: Date;
    fullfillmentDate: Date;
};

type OrderResult = OrderInitial | OrderInWork | null

export const filterOnlyInitialAndInWorkOrder = (order: Order): OrderResult => {
    if (order.state === "initial" || order.state === "inWork") {
        return order;
    }

    return null;
};
