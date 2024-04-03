import React,{useState} from 'react';
import { View, Text,Pressable, SafeAreaView, FlatList,StyleSheet, Image,TouchableOpacity,Dimensions,Modal} from 'react-native';
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
import GetStart from './src/screens/GetStart';
import QRScanner from './src/screens/QRScanner';
import LinearGradient from 'react-native-linear-gradient';
import SmallCircle from './src/components/SmallCircle';
import { icons } from './src/components/Assets';
import RegisterScreen from  './src/screens/RegisterScreen';
import AttachFile from './src/screens/AttachFile';
import VisitorNumber from './src/screens/VisitorNumber';
import NotificationScreen from './src/screens/NotificationScreen';
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
  const [modalVisible, setModalVisible] = useState(false);
  const onClickDrawer = (item) => {
   item.id == 1 ? navigation.navigate('VisitorCountScreen') : item.id == 3 ? navigation.navigate('EditProfile') : item.id == 6 ? setModalVisible(true) : null
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
                renderItem = {({item}) =>    
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
            
        <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Are you sure you want to logout?</Text>
            <View style={{flexDirection:'row'}}>
              <LinearGradient
                colors={['#2B8ADD', '#2E44A2', '#2D2B89']}
                style={styles.subbutton}>
              <TouchableOpacity
            onPress={() => {
              navigation.navigate('Login')
            }}
            style={styles.subbutton}>
            <Text style={styles.subtext}>Yes</Text>
          </TouchableOpacity>
          </LinearGradient>
          <LinearGradient
          colors={['#2B8ADD', '#2E44A2', '#2D2B89']}
          style={styles.subbutton}>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(!modalVisible)
            }}
            style={styles.subbutton}>
            <Text style={styles.subtext}>No</Text>
          </TouchableOpacity>
          </LinearGradient>
            </View>
          </View>
        </View>
      </Modal>
           
      </LinearGradient>
  )
}

const MyDrawer = () => {
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
          <Stack.Screen name="HomeScreen" component={MyDrawer} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen}/>
          <Stack.Screen name="AttachFile" component={AttachFile}/>
          <Stack.Screen name="VisitorNumber" component={VisitorNumber}/>
          <Stack.Screen name="NotificationScreen" component={NotificationScreen}/>
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
    borderWidth: 1,
    backgroundColor: '#fff',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor:"rgba(0,0,0,0.7)"
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width:'80%'
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color:'#000',
    fontWeight:'800',
    fontSize:18

  },
  subtext: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#fff',
  },
  subbutton: {
    height: 45,
    width: '40%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',margin:10
  },
})