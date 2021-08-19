import { useRecoilState } from "recoil";
import { todoListFilterState } from "../../../atoms";

/*
* toDo list filter component
*/
function TodoListFilters() {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  /** to set selected filter */
  const updateFilter = ({ target: { value } }) => {
    setFilter(value);
  };

  return (
    <>
      <span>Filter: </span>
      <select value={filter} onChange={updateFilter}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </>
  );
}

export default TodoListFilters;
