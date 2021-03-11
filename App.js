import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './routes/StackNavigator';
import RNBootSplash from 'react-native-bootsplash';

//   Redux //
import {Provider} from 'react-redux';
import {store} from './redux/store';

export default function App() {
  useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide({fade: true}); // fade
    }, 3000);
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  );
}
