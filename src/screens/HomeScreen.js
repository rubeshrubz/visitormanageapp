import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Button,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  Alert,
} from 'react-native';
import Lottie from 'lottie-react-native';
import {ScrollView} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Calendar from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Spinner} from '../components/Spinner';
import {icons} from '../components/Assets';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
const HomeScreen = props => {
  const navigation = useNavigation();

  const asyncc = '@MySuperStore:key';
  const [demo, setdemo] = useState('');
  const [day, setDay] = useState(true);
  const [week, setWeek] = useState(false);
  const [month, setMonth] = useState(false);

  var retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem(asyncc);
      if (value !== null) {
        console.log('Result', value, demo);
      }
      setdemo(value);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!demo) {
      retrieveData();
    }
  }, [demo]);

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

  const dayBar = {
    labels: ['01', '02', '03', '04', '05'],
    datasets: [
      {
        data: [2000, 2001, 2002, 2003, 2004, 2005],
      },
    ],
  };
  const weekBar = {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [
      {
        data: [2005, 2002, 2003, 2001, 2004, 2005],
      },
    ],
  };
  const monthBar = {
    labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [2005, 2004, 2003, 2002, 2001, 2000],
      },
    ],
  };

  const datas = [
    {
      Name: 'Amuthan ',
      NameText: 'is here to see Rubesh !\n would you like to',
      role: 'General Visitor',
    },
    {
      Name: 'Muthu ',
      NameText: 'is here to see Priya !\n would you like to',
      role: 'Guest',
    },
    {
      Name: 'Mani ',
      NameText: 'is here to see Prame !\n would you like to',
      role: 'Laundry',
    },
  ];
  const [spin, setPin] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setPin(false);
    }, 2000);
  }, []);

  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  const onClickDay = () => {
    setDay(true);
    setWeek(false);
    setMonth(false);
  };
  const onClickWeek = () => {
    setDay(false);
    setWeek(true);
    setMonth(false);
  };
  const onClickMonth = () => {
    setDay(false);
    setWeek(false);
    setMonth(true);
  };

  const currentDate = new Date();
  const dayOfWeek = currentDate.getDay();
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const dayName = days[dayOfWeek];

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      {spin ? <Spinner /> : null}
      <LinearGradient
        colors={['#0C001D', '#1E024E', '#593C6A']}
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          width: '100%',
          height: 80,
        }}>
        <TouchableOpacity
          style={{margin: 25, flex: 0.2}}
          onPress={() => navigation.openDrawer()}>
          <Image
            source={require('../components/Assets/menu.png')}
            style={{height: 30, width: 30}}
          />
        </TouchableOpacity>
        <Text style={styles.titleText}>Visitor's Management</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('NotificationScreen')}>
          <Ionicon
            name="notifications-outline"
            size={25}
            color={'#fff'}
            style={{fontWeight: '900'}}
          />
        </TouchableOpacity>
      </LinearGradient>

      {demo === 'Admin' ? (
        <View style={{flex: 1, width: '95%', alignSelf: 'center'}}>
          <View
            style={{
              flex: 0.15,
              width: '100%',
              alignSelf: 'center',
              marginVertical: 15,
            }}>
            <LinearGradient
              colors={['#0C001D', '#1E024E', '#593C6A']}
              style={styles.countCard}>
              <Text style={[styles.cardText, {color: '#fff'}]}>
                Total Number of Visitor's Today: 25
              </Text>
              <Text style={[styles.cardText, {color: '#fff'}]}>
                Current Visitor's: 6
              </Text>
            </LinearGradient>
          </View>
          <View
            style={{
              flex: 0.4,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                flex: 0.2,
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent:'center',
                marginBottom: 15,
                borderRadius: 10,
                backgroundColor: 'rgb(106, 44, 141)',
              }}>
              <TouchableOpacity
                onPress={() => onClickDay()}
                style={[
                  styles.rowStyle,
                  {
                    backgroundColor: day ? '#f0f0f0' : 'rgb(106, 44, 141)',
                  },
                ]}>
                <Text style={[styles.days,{color: day ? 'rgb(106, 44, 141)':'#fff'}]}>Day</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => onClickWeek()}
                style={[
                  styles.rowStyle,
                  {
                    backgroundColor: week ? '#f0f0f0' : 'rgb(106, 44, 141)',
                  },
                ]}>
                <Text style={[styles.days,{color: week ? 'rgb(106, 44, 141)':'#fff'}]}>Week</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => onClickMonth()}
                style={[
                  styles.rowStyle,
                  {
                    backgroundColor: month ? '#f0f0f0' : 'rgb(106, 44, 141)',
                  },
                ]}>
                <Text style={[styles.days,{color: month ? 'rgb(106, 44, 141)':'#fff'}]}>Month</Text>
              </TouchableOpacity>
            </View>
            <ScrollView horizontal={true} style={{flex: 0.9}}>
              {day ? (
                <BarChart
                  data={dayBar}
                  width={360}
                  height={170}
                  // yAxisLabel="Year"
                  chartConfig={{
                    backgroundGradientFrom: '#ffff',
                    backgroundGradientTo: '#fff',
                    fillShadowGradientFromOpacity: 1,
                    fillShadowGradientToOpacity: 0.5,
                    // barPercentage:5,
                    barPercentage: 0.6,
                    decimalPlaces: 0, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(100, 65, 144, ${opacity})`,
                    labelColor: (opacity = 1) =>
                      `rgb(106, 44, 141) ${opacity})`,
                  }}
                  bezier
                  style={{
                    // marginVertical: 8,
                    borderRadius: 10,
                  }}
                  // verticalLabelRotation={10}
                />
              ) : week ? (
                <BarChart
                  data={weekBar}
                  width={360}
                  height={170}
                  // yAxisLabel="Year"
                  chartConfig={{
                    backgroundGradientFrom: '#ffff',
                    backgroundGradientTo: '#fff',
                    fillShadowGradientFromOpacity: 1,
                    fillShadowGradientToOpacity: 0.5,
                    barPercentage: 0.6,
                    decimalPlaces: 0, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(100, 65, 144, ${opacity})`,
                    labelColor: (opacity = 1) =>
                      `rgb(106, 44, 141) ${opacity})`,
                  }}
                  bezier
                  style={{
                    // marginVertical: 8,
                    borderRadius: 10,
                  }}
                  // verticalLabelRotation={10}
                />
              ) : month ? (
                <BarChart
                  data={monthBar}
                  width={360}
                  height={170}
                  // yAxisLabel="Year"
                  chartConfig={{
                    backgroundGradientFrom: '#ffff',
                    backgroundGradientTo: '#fff',
                    fillShadowGradientFromOpacity: 1,
                    fillShadowGradientToOpacity: 0.5,
                    barPercentage: 0.6,
                    decimalPlaces: 0, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(100, 65, 144, ${opacity})`,
                    labelColor: (opacity = 1) =>
                      `rgb(106, 44, 141) ${opacity})`,
                  }}
                  bezier
                  style={{
                    // marginVertical: 8,
                    borderRadius: 10,
                  }}
                  // verticalLabelRotation={10}
                />
              ) : null}
            </ScrollView>
          </View>
          <View style={{flex: 0.5}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                margin: 5,
                flex: 0.1,
              }}>
              <Text style={styles.cardTitletext}>Visitor List</Text>
              <TouchableOpacity style={{width: '10%', marginLeft: 0}}>
                <Calendar name={'calendar'} size={25} color="#411350" />
              </TouchableOpacity>
            </View>

            <View style={{flex: 0.9}}>
              <LinearGradient
                colors={['#0C001D', '#1E024E', '#593C6A']}
                style={{borderRadius: 15, width: '100%'}}>
                <FlatList
                  data={data}
                  renderItem={({item}) => (
                    <View
                      style={{
                        backgroundColor: '#fff',
                        borderRadius: 15,
                        margin: 10,
                        marginTop: 10,
                        flexDirection: 'row',
                        padding: 10,
                      }}>
                      <View style={{flex: 0.55, justifyContent: 'center'}}>
                        <Text style={styles.textStyle}>
                          Visitor Name : {item.visitorName}
                        </Text>
                        <Text style={styles.textStyle}>
                          In-Time:{item.inTime}
                        </Text>
                        <Text style={styles.textStyle}>
                          Person to Meet: {item.persontoMeet}
                        </Text>
                      </View>
                      <View style={{flex: 0.25, justifyContent: 'center'}}>
                        <View
                          style={{flexDirection: 'row', alignItems: 'center'}}>
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
                      <View style={{flex: 0.2, justifyContent: 'center'}}>
                        <LinearGradient
                          colors={['#0C001D', '#1E024E', '#593C6A']}
                          style={styles.subbutton}>
                          <TouchableOpacity
                            onPress={() => {
                              navigation.navigate('VisitorDetailsScreen');
                            }}
                            style={styles.subbutton}>
                            <Text style={styles.subtext}>View</Text>
                          </TouchableOpacity>
                        </LinearGradient>
                      </View>
                    </View>
                  )}
                  keyExtractor={item => item.id}
                />
              </LinearGradient>
            </View>
          </View>
        </View>
      ) : (
        <ScrollView style={{width: '95%', alignSelf: 'center'}}>
          <LinearGradient
            colors={['#0C001D', '#1E024E', '#593C6A']}
            style={styles.topview}>
            <View style={styles.dateCover}>
              <View style={styles.imgview}>
                <Image source={icons.calender} style={styles.cal_logo} />
              </View>
              <View style={styles.timedateview}>
                <Text style={styles.time_date}>
                  {' '}
                  {dateTime.toLocaleDateString('en-US', {
                    timeZone: 'Asia/Kolkata',
                  })}
                </Text>
                {/* <Text style={styles.time_date}>Today is: {dayName}</Text> */}
                <Text style={[[styles.time_date, {fontSize: 20}]]}>
                  {' '}
                  {dateTime.toLocaleTimeString('en-US', {
                    timeZone: 'Asia/Kolkata',
                  })}
                </Text>
              </View>
              <View style={styles.imgview}>
                <Lottie
                  source={icons.sun}
                  autoPlay
                  loop
                  style={styles.lottiview}
                />
                <Text style={styles.time_date}>36'C</Text>
              </View>
            </View>
          </LinearGradient>
          <View style={{marginTop: 10}}>
            <Text style={styles.cardText}>Visitor's Requests:</Text>
            <FlatList
              data={datas}
              renderItem={({item}) => (
                <View style={styles.flatview}>
                  <View style={styles.imgflatview}>
                    <Image source={icons.pic} style={styles.flatlogo} />
                  </View>
                  <View style={styles.nameview}>
                    <Text style={styles.namestyle}>
                      {item.Name}
                      <Text style={styles.nametext}>{item.NameText}</Text>
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        width: '100%',
                        margin: 2,
                      }}>
                      <TouchableOpacity
                        onPress={() => navigation.navigate('ViewDetailScreen')}
                        style={styles.subbutton}>
                        <Text style={styles.subtext}>View Details</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              )}
              keyExtractor={item => item.id}
            />
          </View>
          <View style={{marginTop: 10}}>
            <Text style={styles.cardText}>Active Visitors:</Text>
            <FlatList
              data={datas}
              renderItem={({item}) => (
                <View style={styles.flatview}>
                  <View style={styles.imgflatview}>
                    <Image source={icons.pic} style={styles.flatlogo} />
                  </View>
                  <View style={styles.nameview1}>
                    <Text style={styles.namestyle}>{item.Name}</Text>
                    <Text style={styles.nametext}>{item.role}</Text>
                  </View>
                  <Text style={{color: '#411350'}}>15 mins ago</Text>
                </View>
              )}
              keyExtractor={item => item.id}
            />
          </View>
          {/* <LinearGradient
            colors={['#2B8ADD', '#2E44A2', '#2D2B89']}
            style={{flex:1,borderRadius:10}}>
            <FlatList
              data={data}
              renderItem={({item}) => (
                <View
                  style={{
                    backgroundColor: '#fff',
                    borderRadius:7,
                    width:'93%',
                    margin: 5,
                    alignSelf:'center',
                    // marginLeft:15,
                    // marginRight:15,
                    flexDirection: 'row',
                    alignItems:'center',
                    padding: 10,
                  }}>
                  <View style={{flex: 0.55}}>
                    <Text style={styles.textStyle}>
                      Visitor Name : {item.visitorName}
                    </Text>
                    <Text style={styles.textStyle}>In-Time:{item.inTime}</Text>
                    <Text style={styles.textStyle}>
                      Person to Meet: {item.persontoMeet}
                    </Text>
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
                          navigation.navigate('VisitorDetailsScreen');
                        }}
                        style={styles.subbutton}>
                        <Text style={styles.subtext}>View</Text>
                      </TouchableOpacity>
                    </LinearGradient>
                  </View>
                </View>
              )}
              keyExtractor={item => item.id}
            />
          </LinearGradient> */}
        </ScrollView>
      )}
    </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  titleText: {
    flex: 0.7,
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  rowStyle: {
    justifyContent: 'space-around',
    width: '33%',
    alignItems: 'center',
    height:30,
    borderRadius:10,
    justifyContent: 'center',
  },
  countCard: {
    backgroundColor: '#2D2B89',
    marginVertical: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '90%',
  },
  cardText: {
    fontSize: 17,
    color: '#411350',
    fontWeight: '800',
    margin: 5,
  },
  cardTitletext: {
    fontSize: 17,
    color: '#411350',
    fontWeight: '800',
    width: '80%',
  },
  subtext: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  subbutton: {
    // height: 40,
    margin: 5,
    width: '100%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontWeight: '500',
    color: '#000',
    fontSize: 14,
  },
  time_date: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  cal_logo: {
    height: 60,
    width: 60,
    tintColor: '#fff',
  },
  topview: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    borderRadius: 10,
    marginTop: 10,
  },
  dateCover: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  lottiview: {
    height: 80,
    width: 80,
  },
  imgview: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '20%',
  },
  timedateview: {
    justifyContent: 'center',
    width: '60%',
  },
  flatview: {
    marginTop: 10,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 5,
    shadowColor: '#000',
    shadowOpacity: 0.45,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    elevation: 5,
    alignItems: 'center',
  },
  flatlogo: {
    height: 70,
    width: 70,
  },
  namestyle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 5,
  },
  nametext: {
    fontSize: 15,
    color: '#000',
    fontWeight: '400',
    marginLeft: 5,
  },
  nameview: {
    width: '80%',
    justifyContent: 'center',
  },
  nameview1: {
    width: '50%',
    justifyContent: 'center',
  },
  imgflatview: {
    width: '25%',
    justifyContent: 'center',
    //backgroundColor:'#411350',
    alignItems: 'center',
    borderRadius: 50,
  },
  subtext: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
  days: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
  },
});
