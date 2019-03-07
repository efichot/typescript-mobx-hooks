import { observable } from 'mobx';
import { createContext } from 'react';

class counterStore {
  @observable count = 0;
}

export default createContext(new counterStore());