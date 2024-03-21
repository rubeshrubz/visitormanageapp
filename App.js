import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/screens/Login';
import MainScreen from './src/screens/MainScreen';
import VisitorDetailsScreen from './src/screens/VistorsDetails';
import VisitorRegisterScreen from './src/screens/VisitorRegisterScreen';
import ViewerScreen from './src/screens/ViewerScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="VisitorRegisterScreen"
          component={VisitorRegisterScreen}
        />
        <Stack.Screen
          name="VisitorDetailsScreen"
          component={VisitorDetailsScreen}
        />
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="ViewerScreen" component={ViewerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
