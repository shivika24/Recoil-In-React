import { selector } from "recoil";
import axios from "axios";
import {
  currentUserEmailState,
  textState,
  todoListFilterState,
  todoListState,
} from "../atoms";

/** to count length of string */
export const charCountState = selector({
  key: "charCountState", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const text = get(textState);
    return text.length;
  },
  set: ({set, get},newValue) => {
    set(textState, newValue)
  }
});

/** to get filtered to-do list */
export const filteredTodoListState = selector({
  key: "filteredTodoListState",
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case "Show Completed":
        return list.filter((item) => item.isComplete);
      case "Show Uncompleted":
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});

/** to fetch to-do list completed/uncompleted stats */
export const todoListStatsState = selector({
  key: "todoListStatsState",
  get: ({ get }) => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const percentCompleted =
      totalNum === 0 ? 0 : (totalCompletedNum / totalNum) * 100;

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    };
  },
});

/** to perform async operation in selector i.e fetching username from db*/
export const currentUserNameQuery = selector({
  key: "CurrentUserName",
  get: async ({ get }) => {
    const response = await axios.post(
      "http://localhost:8081/api/user/profile",
      {
        email: get(currentUserEmailState),
      }
    );
    if (response.error) {
      throw response.error;
    }
    return response.data.firstname + " " + response.data.lastname;
  },
});
