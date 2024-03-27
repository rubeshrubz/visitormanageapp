import React, {useState, useMemo} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  PermissionsAndroid,
  Alert,
  Dimensions,
  Image,
  Modal,
  FlatList,
} from 'react-native';
import InputText from '../components/InputText';
import {Backbutton} from '../components/headerbackbutton';
import {useNavigation} from '@react-navigation/native';
import DocumentPicker from 'react-native-document-picker';
import RNFS from 'react-native-fs';
import {icons} from '../components/Assets';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import countryList from 'react-select-country-list';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

export default function EditProfile() {
  const navigation = useNavigation();
  const [modal, setModal] = useState(false);
  const [firstname, setfirstname] = useState('');
  const [mobilenumber, setmobilenumber] = useState('');
  const [Email, SetEmail] = useState('');
  const [visit, setvisit] = useState('');
  const [meet, setmeet] = useState('');
  const [show, setshow] = useState(true);
  const [comapny, setcompany] = useState('');
  const [intime, setintime] = useState('');
  const [images, SetImages] = useState('');
  const [eye, setEye] = useState(true);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [country, setCountry] = useState('');
  const openFilePicker = async () => {
    if (Platform.OS == 'android') {
      requestMediaPermission();
    }
    try {
      const resp: any = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
        readContent: true,
        // allowMultiSelection:true
      });
      console.log('resp===>', resp);
      let decodedFileName = resp[0].uri;
      decodedFileName = resp[0]?.uri?.replaceAll('%20', ' ');
      if (Platform.OS == 'android') {
      } else {
        decodedFileName = decodeURIComponent(decodedFileName);
      }
      if (
        resp[0]?.type === 'image/jpeg' ||
        resp[0]?.type === 'image/jpg' ||
        resp[0]?.type === 'image/png'
      ) {
        RNFS.readFile(decodedFileName, 'base64')
          .then(async res => {
            console.log('res', resp);
            console.log('typePDF', resp[0].uri);

            if (resp[0].type == 'image/jpeg' || resp[0].type == 'image/png') {
              console.log('frontpage==>####', resp[0]?.uri?.length);
              // props.navigation.navigate('ViewerScreen', {
              //   file: resp[0],
              // });
              SetImages(resp[0]?.uri);
            }
          })
          .catch(out => {
            console.log('real error====>', out);
          });
      } else {
        console.log('real error====>', out);
      }
    } catch (err) {
      console.log('data==>', err);
    }
  };

  async function requestMediaPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'Media Permission',
          message: 'App needs access to your media files.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Media permission granted');
      } else {
        console.log('Media permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  }
  const [date, Setdate] = useState('');
  console.log('meet=>', meet);
  const _validate = () => {
    if (global.functions.isNullOrEmpty(firstname)) {
      global.functions.ShowAlert('Please enter name', global.const.warning);
    } else if (global.functions.isNullOrEmpty(Email)) {
      global.functions.ShowAlert('Please enter email', global.const.warning);
    } else if (global.functions.ValidateEmail(Email)) {
      global.functions.ShowAlert(
        'Please enter valid emailid',
        global.const.warning,
      );
    } else if (global.functions.isNullOrEmpty(visit)) {
      global.functions.ShowAlert('Please Enter Password', global.const.warning);
    } else if (visit.length < 8) {
      global.functions.ShowAlert(
        'Password Should be Minimum 8 char',
        global.const.warning,
      );
    } else {
      // navigation.navigate('VisitorRegisterScreen');
      Alert.alert('hi');
    }
  };
  const secureText = () => {
    setEye(!eye);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const [value, setValue] = useState('');
  const handleConfirm = date => {
    console.warn('A date has been picked: ', date);

    const dateObject = new Date(date);
    const year = dateObject.getFullYear();
    const month = dateObject.getMonth() + 1; // Adding 1 because getMonth() returns zero-based index
    const day = dateObject.getDate();

    const formattedDate = `${year}-${month < 10 ? '0' : ''}${month}-${
      day < 10 ? '0' : ''
    }${day}`;
    console.log(formattedDate); // Output: "2024-03-27"

    setmeet(formattedDate);
    console.log('formattedDate=>', meet);
    hideDatePicker();
  };

  const options = useMemo(() => countryList().getData(), []);
  console.log('options==>', options);

  const changeHandler = value => {
    setValue(value);
  };

  const _renderItem = item => {
    return (
      <View style={{flex: 1, width: '80%'}}>
        <TouchableOpacity
          onPress={() => (setCountry(item?.label), setModal(false))}>
          <Text style={{fontSize: 18, color: '#4f81bd', fontWeight: 'bold'}}>
            {item?.label}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.button_cover}>
        <Backbutton onPress={() => navigation.goBack()} />
        <Text style={styles.profile_text}>EditProfile</Text>
      </View>

      <ScrollView>
        <KeyboardAvoidingView style={{flex: 1}}>
          <View style={styles.avatarCard}>
            <TouchableOpacity
              onPress={() => openFilePicker()}
              style={{flexDirection: 'row'}}>
              <Image
                style={styles.avatar}
                source={images ? {uri: images} : icons.pic}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openFilePicker()}>
              <Image style={styles.cameras} source={icons.camera} />
            </TouchableOpacity>
          </View>
          <Text style={styles.text}>Name</Text>
          <InputText
            onChangeText={text => setfirstname(text)}
            value={firstname}
            placeholder={'Name'}
          />
          <Text style={styles.text}>Email</Text>
          <InputText
            onChangeText={text => SetEmail(text)}
            value={Email}
            placeholder={'Email ID'}
          />
          <Text style={styles.text}>Password</Text>
          <InputText
            onChangeText={text => setvisit(text)}
            value={visit}
            placeholder={'Password'}
            visible={show}
            secureText={secureText}
            onPress={() => setshow(!show)}
            secureTextEntry={show}
          />
          <Text style={styles.text}>Date of Birth</Text>
          <InputText
            onChangeText={text => setcompany(text)}
            value={meet}
            // editable={false}
            date={true}
            visibles={isDatePickerVisible}
            onPress={() => setDatePickerVisibility(!isDatePickerVisible)}
            placeholder={'Date of Birth'}
          />

          <Text style={styles.text}>Country/Region</Text>
          <InputText
            onChangeText={text => setintime(text)}
            value={country}
            placeholder={'Country/Region'}
            date={true}
            onPress={() => setModal(true)}
          />
          <TouchableOpacity
            onPress={() => {
              _validate();
            }}
            style={styles.subbutton}>
            <Text style={styles.subtext}>Save Changes</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modal}
        onRequestClose={() => {
          setModal(!modal);
        }}>
        {/* <TouchableWithoutFeedback
      onPress={()=>setVisible(!visible)}
      > */}
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <FlatList
              keyExtractor={item => item.id}
              data={options}
              style={{flex: 1}}
              renderItem={({item, index}) => _renderItem(item)}
            />

            {/* <Image
              resizeMode="contain"
              style={{height: '35%', width: '40%'}}
              source={icons.condition}></Image>
            <Text
              style={{
                fontFamily: 'Roboto',
                fontSize: 20,
                fontWeight: 'bold',
                color: '#000',
                top: 2,
              }}>
              Adding Images are mandatory
            </Text>
            <Text
              style={{
                fontFamily: 'Roboto',
                fontSize: 13,
                fontWeight: '200',
                color: '#000',
                top: 4,
              }}>
              Both Front and Back are in{'\n'}
            </Text>
            <Text
              style={{
                fontFamily: 'Roboto',
                fontSize: 12,
                fontWeight: '200',
                color: '#000',
                bottom: 10,
              }}>
              types of PDF, JPG, and PNG.
            </Text> */}

            <TouchableOpacity
              style={{
                top: 10,
                height: (Height / 80) * 3.5,
                width: (Width / 80) * 9,
                borderColor: '#357AB4',
                borderRadius: 6,
                borderWidth: 1,
                justifyContent: 'center',
                backgroundColor: '#357AB4',
              }}
              onPress={() => setModal(false)}>
              <Text
                style={{
                  fontFamily: 'Roboto',
                  fontSize: 12,
                  fontWeight: 'bold',
                  color: '#fff',
                  textAlign: 'center',
                }}>
                OK
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* </TouchableWithoutFeedback> */}
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 15,
    fontWeight: '500',
    color: '#4f81bd',
    marginLeft: 20,
    marginVertical: 15,
  },
  inputcover: {
    height: '100%',
    width: '100%',
    marginTop: 10,
    marginBottom: 20,
    // borderWidth:1,
  },
  avatarCard: {
    height: 90,
    backgroundColor: '#fff',
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    top: 10,
  },
  avatar: {
    width: (Width / 22) * 6.2,
    height: (Height / 42) * 6.2,
    borderRadius: Width / 2,
    borderColor: '#242760',
    borderWidth:1,
    backgroundColor: 'grey',
  },
  cameras: {
    width: 25,
    height: 22,
    // backgroundColor: '#fff',
    top: 50,
    right: 25,
  },
  button_cover: {
    height: 50,
    width: '100%',
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    flexDirection: 'row',
  },
  profile_text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4f81bd',
    marginHorizontal: 130,
  },
  subtext: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  subbutton: {
    height: 45,
    width: '90%',
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: '#4f81bd',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 50,
  },
  //Modal
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    height: (Height / 16) * 8,
    width: (Width / 10) * 8,
    borderRadius: 30,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
});
