import { createContext, useReducer, useContext, Dispatch } from "react";
import { User } from "../model/user";

export const UserStateContext = createContext(null as unknown as User);
export const UserDispatchContext = createContext(
  null as unknown as Dispatch<{ type: any; payload: any }>
);

const reducer = (_state: any, action: { type: any; payload: any }) => {
  switch (action.type) {
    case "LOGOUT":
      return null;
    case "LOGIN":
      return action.payload;
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

export const UserProvider = ({ children, user }: any) => {
  const [state, dispatch] = useReducer(reducer, user);

  return (
    <UserDispatchContext.Provider value={dispatch}>
      <UserStateContext.Provider value={state}>
        {children}
      </UserStateContext.Provider>
    </UserDispatchContext.Provider>
  );
};

export const useUser = (): User => useContext(UserStateContext);
export const useUserDispatch = () => useContext(UserDispatchContext);
