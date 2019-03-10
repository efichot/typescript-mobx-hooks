import { observable } from "mobx";
import { create, persist } from "mobx-persist";
import { createContext } from "react";

class counterStore {
  @persist @observable count: number = 0;
}

const store = new counterStore();
export default createContext(store);

const hydrate = create();
hydrate("counterStore", store);
