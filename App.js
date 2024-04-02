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
import HomeScreen from './src/screens/HomeScreen';
import EditProfile from './src/screens/EditProfile';
// import Qrscreen from './src/screens/Qrscreen';
import InitialScreen from './src/screens/InitialScreen';
import GetStart from './src/screens/GetStart';
const Stack = createNativeStackNavigator();

function App(props) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='InitialScreen'>
        <Stack.Screen name="GetStart" component={GetStart} />
        <Stack.Screen name="InitialScreen" component={InitialScreen} />
        {/* <Stack.Screen name="Qrscreen" component={Qrscreen} /> */}
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
          <Stack.Screen name="EditProfile" component={EditProfile} />

          <Stack.Screen name="HomeScreen" component={HomeScreen} />
 
        </Stack.Navigator>
        <SnackBar />
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
