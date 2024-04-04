
import { useNavigation } from '@react-navigation/native';
import React,{useEffect, useState} from 'react';
import { Button, View,StyleSheet, Text, TouchableOpacity ,Image,FlatList,Alert} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Calendar from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen=(props) =>{
  const navigation = useNavigation()

  const asyncc = '@MySuperStore:key'
  const [demo, setdemo] = useState('');

  var retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem(asyncc);
      if (value !== null) {
        console.log("Result",value,demo);
      }
      setdemo(value)
    } catch (error) {
     console.log(error)
    }
  }

  useEffect(() => {
    if (!demo) {
      retrieveData();
    }
  }, [demo])

  
  const data = [
    {
      id: '1',
      visitorName: 'Vikram',
      inTime: '09:00 AM',
      persontoMeet: 'Vedha',
      status: 'active',
      validity: '1 Month',
    },
    {
      id: '2',
      visitorName: 'Surya',
      inTime: '07:00 PM',
      persontoMeet: 'Meena',
      status: 'inactive',
      validity: '-',
    },
    {
      id: '3',
      visitorName: 'divya',
      inTime: '09:00 AM',
      persontoMeet: 'ruby',
      status: 'active',
      validity: '1 Month',
    },
    {
      id: '4',
      visitorName: 'Leo',
      inTime: '09:00 AM',
      persontoMeet: 'James',
      status: 'active',
      validity: '1 Month',
    },
    {
      id: '5',
      visitorName: 'Muthu',
      inTime: '10:40 AM',
      persontoMeet: 'Priya',
      status: 'active',
      validity: '1 Week',
    },
    {
      id: '6',
      visitorName: 'Ammu',
      inTime: '12:00 PM',
      persontoMeet: 'Saranya',
      status: 'inactive',
      validity: '-',
    },
    {
      id: '7',
      visitorName: 'Ammu',
      inTime: '12:00 PM',
      persontoMeet: 'Saranya',
      status: 'inactive',
      validity: '-',
    },

    {
      id: '8',
      visitorName: 'Ammu',
      inTime: '12:00 PM',
      persontoMeet: 'Saranya',
      status: 'inactive',
      validity: '-',
    },
  ];

  return (
    <View style={{ flex: 1, alignItems: 'center',backgroundColor:'#fff'}}>
       <LinearGradient
      colors={['#2B8ADD', '#2E44A2', '#2D2B89']}
      style={{  alignItems: 'center',flexDirection:'row',width:'100%',height:80}}>
         <TouchableOpacity style={{margin:25,flex:0.2}}  onPress={() => navigation.openDrawer()}>
           <Image source={require('../components/Assets/menu.png')} style={{height:30,width:30}}/>
         </TouchableOpacity>
         <Text style={styles.titleText}>Visitor's Management</Text>
         <TouchableOpacity onPress={()=> navigation.navigate('NotificationScreen')}>
           <Ionicon  name ='notifications-outline' size={25} color={'#fff'} style={{fontWeight:'900'}}/>
         </TouchableOpacity>
      </LinearGradient>

   {demo === "Admin" ? <>
   <LinearGradient
      colors={['#2B8ADD', '#2E44A2', '#2D2B89']}
      style={styles.countCard}> 
         <Text style={styles.cardText}>Total Number of Visitor's Today: 25</Text>
         <Text style={styles.cardText}>Current Visitor's: 6</Text>
         </LinearGradient>
      <View style={{flexDirection:'row',alignItems:'center',margin:5}}>
         <Text style={styles.cardTitletext}>Visitor List</Text>
         <TouchableOpacity style={{width:'10%',marginLeft:0}}>
            <Calendar name={'calendar'} size={25} color='#2D2B89'/>
         </TouchableOpacity>
      </View>
      <LinearGradient
      colors={['#2B8ADD', '#2E44A2', '#2D2B89']}
      style={{  borderRadius:15,width:'95%'}}>
         <FlatList
                data={data}
                renderItem={({item}) =>    
                <View style={{backgroundColor:'#fff',borderRadius:15,margin:5,flexDirection:'row',padding:10}}>
                <View style={{flex:0.55}}>
                <Text style={styles.textStyle}>Visitor Name : {item.visitorName}</Text>
                <Text style={styles.textStyle}>In-Time:{item.inTime}</Text>
                <Text style={styles.textStyle}>Person to Meet: {item.persontoMeet}</Text>
                </View>
                <View style={{flex: 0.25}}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View
                      style={{
                        width: 6,
                        height: 5,
                        borderRadius: 5 / 2,
                        backgroundColor: 'green',
                        marginRight: 5,
                      }}></View>
                    <Text style={styles.textStyle}>{item.status}</Text>
                  </View>
                  <Text>{item.validity}</Text>
                </View>
                <View style={{flex: 0.2}}>
                  <LinearGradient
                    colors={['#2B8ADD', '#2E44A2', '#2D2B89']}
                    style={styles.subbutton}>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate('ViewerScreen');
                      }}
                      style={styles.subbutton}>
                      <Text style={styles.subtext}>View</Text>
                    </TouchableOpacity>
                  </LinearGradient>
                </View>
              </View>
               }
                keyExtractor={item => item.id}
            />   
      </LinearGradient></> 
    : <View style={{flex:1,backgroundColor:'red',width:'100%'}}>
        <View style ={{margin:15}}>
          <Text style={styles.cardTitletext}>Visitor Information</Text>
        </View>
        <FlatList
         data={data}
         renderItem={({item}) =>    
         <View style={{backgroundColor:'#fff',borderRadius:15,margin:5,flexDirection:'row',padding:10}}>
         <View style={{flex:0.55}}>
         <Text style={styles.textStyle}>Visitor Name : {item.visitorName}</Text>
         <Text style={styles.textStyle}>In-Time:{item.inTime}</Text>
         <Text style={styles.textStyle}>Person to Meet: {item.persontoMeet}</Text>
         </View>
         <View style={{flex:0.25}}>
           <View style={{flexDirection:'row',alignItems:'center'}}>
             <View style={{width: 6,height: 5,borderRadius: 5 / 2,backgroundColor: 'green',marginRight:5}}></View>
             <Text style={styles.textStyle}>{item.status}</Text>
           </View>
         <Text>{item.validity}</Text>
         </View>
         <View style={{flex:0.2}}>
           <LinearGradient
       colors={['#2B8ADD', '#2E44A2', '#2D2B89']}
       style={styles.subbutton}>
       <TouchableOpacity
         onPress={() => {
           navigation.navigate('ApprovalScreen')
         }}
         style={styles.subbutton}>
         <Text style={styles.subtext}>View</Text>
       </TouchableOpacity>
           </LinearGradient>
         </View>
       </View>
        }
         keyExtractor={item => item.id}
     />   
      </View>}
  
   </View>   
  )
}

export default HomeScreen;
const styles = StyleSheet.create({
  titleText: {
    flex: 0.7,
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  countCard: {
    backgroundColor: '#2D2B89',
    marginVertical: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '95%',
    height: '60%',
    left: 10,
  },
  cardText: {
    fontSize: 17,
    color: '#fff',
    fontWeight: '800',
    margin: 5,
  },
  cardTitletext: {
    fontSize: 17,
    color: '#2D2B89',
    fontWeight: '800',
    width: '80%',
  },
  subtext: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  subbutton: {
    height: 40,
    width: '100%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle:{
    fontWeight:'500',color:'#000',fontSize:14
  }
})
