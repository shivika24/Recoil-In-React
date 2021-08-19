import { useRecoilState } from "recoil";
import { todoListState } from "../../../atoms";

/*
 * list toDo item
 */
function TodoListItem({ item }) {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem === item);

  /** to replace list item at a particular index */
  const replaceItemAtIndex = (arr, index, newValue) => {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
  };

  /** to remove list item from a particular index */
  const removeItemAtIndex = (arr, index) => {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
  };

  /** to edit the toDo item */
  const editItemText = ({ target: { value } }) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value,
    });

    setTodoList(newList);
  };

  /** toggle complete/incomplete toDo item */
  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });

    setTodoList(newList);
  };

  /** delete an toDo item */
  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);

    setTodoList(newList);
  };

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        value={item.text}
        onChange={editItemText}
        className="form-control"
      />
      <div className="input-group-append">
        <div className="input-group-text">
          <input
            type="checkbox"
            checked={item.isComplete}
            onChange={toggleItemCompletion}
          />
        </div>
      </div>

      <button onClick={deleteItem} className="btn btn-danger">
        X
      </button>
    </div>
  );
}

export default TodoListItem;
