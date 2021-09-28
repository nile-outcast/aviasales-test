import { Ref } from "react";
import { Ticket } from "./Ticket";

export interface List {
  id: string;
  checkName: string;
  ref?: Ref<HTMLInputElement>;
}

export interface FilterList {
  allStop: boolean,
  withoutStop: boolean,
  oneStop: boolean,
  twoStop: boolean,
  threeStop: boolean,
}

export interface Data {
  tickets: Ticket[];
  isLoading: boolean
}