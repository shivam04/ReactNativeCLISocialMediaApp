/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { Text } from 'react-native';
import { getFontFamily } from './helper';
import {
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';

function App() {

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text style={{ fontSize: 50, fontFamily: getFontFamily('Inter_24pt', '100') }}>
          Hello World!
        </Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
