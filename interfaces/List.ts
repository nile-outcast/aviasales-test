export interface List {
  id: string;
  checkName: string;
}

export interface FilterList {
  allStop: boolean,
  withoutStop: boolean,
  oneStop: boolean,
  twoStop: boolean,
  threeStop: boolean,
}