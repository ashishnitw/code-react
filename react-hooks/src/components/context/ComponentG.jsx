import { useContext } from "react";
import { UserContext, StoreContext } from "./ContextApp";

export default function ComponentG() {

  const user = useContext(UserContext);
  const store = useContext(StoreContext);

  return (
    <>
      <h4>Component G - Using useContext</h4>
      <div>User context value: {user}, store: {store}</div>
    </>
  );

}