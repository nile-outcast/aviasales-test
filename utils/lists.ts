import { List } from "../interfaces/List";

export const filterList: List[] = [
  { id: "allStop", checkName: "Все" },
  { id: "withoutStop", checkName: "Без пересадок" },
  { id: "oneStop", checkName: "1 пересадка" },
  { id: "twoStop", checkName: "2 пересадки" },
  { id: "threeStop", checkName: "3 пересадки" },
];

export const sortList: List[] = [
  { id: "cheap", checkName: "САМЫЙ ДЕШЕВЫЙ" },
  { id: "fast", checkName: "САМЫЙ БЫСТРЫЙ" },
  { id: "optimal", checkName: "ОПТИМАЛЬНЫЙ" },
];