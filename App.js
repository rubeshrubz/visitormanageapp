import * as React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/screens/Login';
import MainScreen from './src/screens/MainScreen';
import VisitorDetailsScreen from './src/screens/VistorsDetails';
import VisitorRegisterScreen from './src/screens/VisitorRegisterScreen';
import ViewerScreen from './src/screens/ViewerScreen';
import VisitorCountScreen from './src/screens/VisitorCountScreen';
import SnackBar from './src/components/SnackBar';
import UploadCamera from './src/screens/UploadCamera';

const Stack = createNativeStackNavigator();

function App(props) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="MainScreen" component={MainScreen} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen
            name="VisitorRegisterScreen"
            component={VisitorRegisterScreen}
          />
          <Stack.Screen
            name="VisitorDetailsScreen"
            component={VisitorDetailsScreen}
          />
          <Stack.Screen name="UploadCamera" component={UploadCamera} />

          <Stack.Screen name="ViewerScreen" component={ViewerScreen} />
          <Stack.Screen
            name="VisitorCountScreen"
            component={VisitorCountScreen}
          />
        </Stack.Navigator>
        <SnackBar />
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
