import React from "react";
import AppNavigator from "./src/navigation/AppNavigator";
import 'react-native-reanimated';
import { Provider } from "react-redux";
import store from "./src/store/store";

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
export default App;
