import { AuthContext } from "./AuthContext";
import { useReducer } from "react";
import { authReducer } from "./authReducer";
import { types } from "../types/types";

export const AuthProvider = ({ children }) => {
  // const initialState = {
  //   logged: false,
  // };

  const login = (name = "") => {
    const user = {
      id: 1,
      name,
    };

    const action = {
      type: types.login,
      payload: {
        id: 1,
        name: name,
      },
    };

    localStorage.setItem("user", JSON.stringify(user));

    dispatch(action);
  };

  const logout = () => {
    localStorage.removeItem("user");
    const action = {
      type: types.logout,
    };
    dispatch(action);
  };

  const init = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    return {
      logged: !!user,
      user: user,
    };
  };

  const [authState, dispatch] = useReducer(authReducer, {}, init);

  return (
    <AuthContext.Provider value={{ ...authState, authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
