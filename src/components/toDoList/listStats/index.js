import { useRecoilValue } from "recoil";
import styled from 'styled-components'
import { todoListStatsState } from "../../../selectors";

const Div = styled.div`
background-color: #c7d8de;
`

/*
* toDo list statistics component
*/
function TodoListStats() {
  const { totalNum, totalCompletedNum, totalUncompletedNum, percentCompleted } =
    useRecoilValue(todoListStatsState);

  const formattedPercentCompleted = Math.round(percentCompleted);

  return (
    <Div className="container">
      <h5>To Do List Stats</h5>
      <ul>
        <li>Total items: {totalNum}</li>
        <li>Items completed: {totalCompletedNum}</li>
        <li>Items not completed: {totalUncompletedNum}</li>
        <li>Percent completed: {formattedPercentCompleted}</li>
      </ul>
    </Div>
  );
}

export default TodoListStats;
