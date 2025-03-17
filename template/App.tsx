import React, {useEffect} from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import 'react-native-reanimated';
import {Provider} from 'react-redux';
import store from './src/store/store';

import {hideSplash, showSplash} from 'react-native-splash-view';

const App = () => {
  useEffect(() => {
    showSplash(); // Show the splash screen

    setTimeout(() => {
      hideSplash(); // Hide after some time
    }, 1000);
  }, []);

  
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};
export default App;
