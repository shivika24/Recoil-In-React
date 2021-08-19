import { atom } from "recoil";

/** text state */
export const textState = atom({
  key: "textState", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});

/** toDo list state */
export const todoListState = atom({
  key: 'todoListState',
  default: [],
});

/** filter state */
export const todoListFilterState = atom({
  key: 'todoListFilterState',
  default: 'Show All',
});

/**  user email state*/
export const currentUserEmailState = atom({
  key: 'CurrentUserEmail',
  default: 'shivika24@gmail.com',
});