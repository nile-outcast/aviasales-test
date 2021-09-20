import { Ref } from "react";

export interface List {
  id: string;
  checkName: string;
  ref?: Ref<HTMLInputElement>;
}