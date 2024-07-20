import * as React from "react";
import AppNavigator from "./navigation/AppNavigator";
import AuthProvider from "./Provider/AuthProvider";

const App = () => {
  return (
    <AuthProvider>
      <AppNavigator></AppNavigator>
    </AuthProvider>
  );
};

export default App;
