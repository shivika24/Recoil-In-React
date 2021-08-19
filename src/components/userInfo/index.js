import { useRecoilValue } from "recoil";
import { currentUserNameQuery } from "../../selectors";

/*
* async api call example
*/
function UserInfo() {
  const userName = useRecoilValue(currentUserNameQuery);

  return (
    <div className="container">
      <h5>Async Example</h5>
      <p>User name:- {userName}</p>
    </div>
  );
}

export default UserInfo;

/** using usingRecoilValueLoadable in case not using React.Suspense
const userName = useRecoilValueLoadable(currentUserNameQuery);
  switch (userName.state) {
    case "hasValue":
      return <div>UserName:- {userName.contents}</div>;
    case "loading":
      return <div>Loading...</div>;
    case "hasError":
      throw userName.contents;
    default:
      return;
  }
 */
