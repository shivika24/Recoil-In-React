import { useRecoilValue, useRecoilState } from "recoil";
import styled from "styled-components";
import { textState } from "../../atoms";
import { charCountState, filteredTodoListState } from "../../selectors";
import TodoListFilters from "./filters";
import TodoListStats from "./listStats";
import UserInfo from "../userInfo";
import TodoListItem from "./listItem";
import CreateToDoItem from "./createItem";

const Wrapper = styled.div`
  h5 {
    color: #046198;
  }
  .container {
    padding: 10px;
  }
`;

function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);
  const charValue =  useRecoilValue(textState);
  const [totalChar, setCharValue] = useRecoilState(charCountState)

  return (
    <Wrapper>
      {/* async query */}
      <UserInfo />
      {/* to-do list statistics */}
      <TodoListStats />

      <div className="container">
        <h5>To Do List</h5>
        {/* to-do list filters */}
        <TodoListFilters />
        {/* add a to-do item */}
        <CreateToDoItem />
        {todoList.map((todoItem) => (
          <TodoListItem key={todoItem.id} item={todoItem} />
        ))}
        {/* character length example */}
        <h5>String Display</h5>
        <input
          type="text"
          className="form-control"
          value={charValue}
          onChange={(e) => setCharValue(e.target.value)}
        />
        <p>{charValue}</p>
        <p>Total Characters:- {totalChar}</p>
      </div>
    </Wrapper>
  );
}
export default TodoList;
