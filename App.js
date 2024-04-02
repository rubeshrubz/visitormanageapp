import * as React from 'react';
import { View, Text, SafeAreaView, FlatList,StyleSheet, Image,TouchableOpacity,Dimensions} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator,DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
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
import Qrscreen from './src/screens/Qrscreen';
import InitialScreen from './src/screens/InitialScreen';
<<<<<<< HEAD
import GetStart from './src/screens/GetStart';
import QRScanner from './src/screens/QRScanner';
=======
import LinearGradient from 'react-native-linear-gradient';
import SmallCircle from './src/components/SmallCircle';
import { icons } from './src/components/Assets';

>>>>>>> 1454130 (Home screen added with drawer screen)
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const data = [
  {
    id: '1',
    title: 'Admin Management'
  },
  {
    id: '2',
    title: 'Subscription'
  },
  {
    id: '3',
    title: 'Profile'
  },
  {
    id: '4',
    title: 'Staff Management'
  },
  {
    id: '5',
    title: 'Permission Management'
  },
  {
    id: '6',
    title: 'Logout'
  },
 
]

const DrawerContents = (props) => {
  const navigation = useNavigation()
  const onClickDrawer = (item) => {
   item.id == 1 ? navigation.navigate('VisitorCountScreen') : item.id == 3 ? navigation.navigate('EditProfile') : null
    }
  return (
      <LinearGradient
      colors={['#2B8ADD', '#2E44A2', '#2D2B89']}
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{flex:0.5,alignItems:'center',justifyContent:'center'}}>
        <Image
                style={styles.avatar}
                source={icons.pic}
              />
          <Text style={{color:'#fff',fontWeight:'700',fontSize:16,marginTop:10}}>Hello user</Text>
        </View>
           <FlatList
                data={data}
                style={{ margin: 10 }}
                renderItem={({item}) =>    
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginLeft: 16 ,marginTop:20}}>
                  <SmallCircle color="#fff" />
                  <TouchableOpacity onPress={()=> onClickDrawer(item)}>
                  <Text
                  fontSize={12}
                  color={'#fff'}
                  fontWeight='400'
                  marginLeft={10} style={{color:'#fff',fontWeight:'700',fontSize:14}}> {item.title} </Text>
                  </TouchableOpacity>
                </View>}
                keyExtractor={item => item.id}
            />
      </LinearGradient>
  )
}

const myDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContents {...props} />}
      screenOptions={{
        headerShown: false,
        drawerContentContainerStyle: {
          height: 500,
          width: 230,
          borderWidth: 1,
          justifyContent: 'center'
        },

        drawerStyle: {
          backgroundColor:'#fff',
          width: 250,
        },

        drawerLabelStyle: {
          fontSize: 17,
          color: '#fff',
        },

      }}>
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
    </Drawer.Navigator>
  );
}

function App(props) {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer> 
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='InitialScreen'>
         <Stack.Screen name="GetStart" component={GetStart} />
          <Stack.Screen name="QRScanner" component={QRScanner} />
          <Stack.Screen name="InitialScreen" component={InitialScreen} />
          <Stack.Screen name="Qrscreen" component={Qrscreen} /> 
          <Stack.Screen name="MainScreen" component={MainScreen} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="VisitorRegisterScreen" component={VisitorRegisterScreen}/>
          <Stack.Screen name="VisitorDetailsScreen" component={VisitorDetailsScreen}/>
          <Stack.Screen name="UploadCamera" component={UploadCamera} />
          <Stack.Screen name="ViewerScreen" component={ViewerScreen} />
          <Stack.Screen name="VisitorCountScreen" component={VisitorCountScreen} />
          <Stack.Screen name="EditProfile" component={EditProfile} />
          <Stack.Screen name="HomeScreen" component={myDrawer} />
        </Stack.Navigator>
        <SnackBar/>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
const styles = StyleSheet.create({
  avatar: {
    width: (Width / 18) * 5,
    height: (Height / 40) * 5,
    borderRadius: Width / 2,
    borderColor: '#242760',
    borderWidth:1,
    backgroundColor: '#fff',
  },
})