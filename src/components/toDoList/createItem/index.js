import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../../../atoms";

/*
* create toDo item component
*/
function CreateToDoItem() {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  /**add todo item */
  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue("");
  };

  /**input change */
  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Enter ToDo"
        value={inputValue}
        onChange={onChange}
      />
      <div className="input-group-append">
        <button onClick={addItem} className="btn btn-info">Add</button>
      </div>
    </div>
  );
}

// utility for creating unique Id
let id = 0;
function getId() {
  return id++;
}
export default CreateToDoItem;
