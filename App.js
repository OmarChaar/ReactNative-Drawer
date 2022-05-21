import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import WelcomeScreen from './screens/WelcomeScreen';
import UserScreen from './screens/UserScreen';

// IF WE GET AN ERROR, RUN 'npm install react-native-reanimated@1 --save --save-exact'
const Drawer = createDrawerNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='Welcome' component={WelcomeScreen}/>
        <Drawer.Screen name='User' component={UserScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
