import { UserContext, StoreContext } from "./ContextApp";

export default function ComponentF() {

  return (
    <>
      <h4>Component F - Without useContext</h4>
      <UserContext.Consumer>
        {
          user => {
            return (
              <StoreContext.Consumer>
                {
                  store => {
                    return (
                      <div>User context value: {user}, store: {store}</div>
                    )
                  }
                }
              </StoreContext.Consumer>
            )
          }
        }
      </UserContext.Consumer>
    </>
  );

}