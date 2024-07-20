import { useEffect, useState, createContext } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  let [userData, setUserDate] = useState({});
  const [screen, setScreen] = useState(true);
  const [orderData, setOrderData] = useState({});
  userData.phoneName = "12345";
  userData.password = "12345";

  const userInfo = {
    screen,
    setScreen,
    userData,
    setUserDate,
    orderData,
    setOrderData,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
