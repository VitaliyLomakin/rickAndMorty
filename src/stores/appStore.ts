import { types } from 'mobx-state-tree';

const User = types.model({
   name: types.string,
   isCoolGuy: types.boolean,
});

const AppStore = types.model({
   user: types.optional(User, {
      name: 'Batman',
      isCoolGuy: true,
   }),
});

export default AppStore;
