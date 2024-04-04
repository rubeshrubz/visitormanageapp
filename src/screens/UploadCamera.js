import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  PermissionsAndroid,
  Modal,
  Image,
  Platform,
  Alert,
} from 'react-native';
import React, {useRef, useState, useEffect} from 'react';
import {icons} from '../components/Assets/index';
import {RNCamera} from 'react-native-camera';
import DocumentPicker from 'react-native-document-picker';
import Button from '../components/Button';
import RNFS from 'react-native-fs';
import DocumentMasks from '../screens/DocumentMasks';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function UploadCamera(props) {
  const details = props?.route?.params?.image;

  // console.log('details==>', details);

  const [visible, setVisible] = useState(false);
  const [modal, setModal] = useState(false);
  const navigation = useNavigation();
  const [frontpage, SetFront] = useState('');
  const [back, SetBack] = useState('');
  const [first, Setfirst] = useState('');
  const camRef = useRef();
  const [firstImageUri, setFirstImageUri] = useState(null);
  const [secondImageUri, setSecondImageUri] = useState(null);
  const [selectedDocuments, setSelectedDocuments] = useState([]);

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
              // })

              if (details == 'Image1') {
                setFirstImageUri(resp[0]?.uri);
                setCapturingFirstImage(false);
              } else {
                setSecondImageUri(resp[0]?.uri);
                setCapturingSecondImage(false);
              }
            }
          })
          .catch(out => {
            console.log('real error====>', out);
          });
      } else {
        setVisible(true);
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

  const [capturingFirstImage, setCapturingFirstImage] = useState(true);
  const [capturingSecondImage, setCapturingSecondImage] = useState(false);

  const captureImage = async () => {
    if (camRef.current) {
      try {
        const options = {quality: 0.5, base64: true};
        const capturedImage = await camRef.current.takePictureAsync(options);
        if (details == 'Image1') {
          setFirstImageUri(capturedImage.uri);
          setCapturingFirstImage(false);
        } else {
          setSecondImageUri(capturedImage.uri);
          setCapturingSecondImage(false);
        }
      } catch (error) {
        console.error('Error capturing image:', error);
      }
    }
  };

  const _next = async() => {
    // if (firstImageUri && secondImageUri) {
    //   //navigation.navigate('ViewerScreen')
    //   const datas = {
    //     Image1: firstImageUri,
    //     Image2: secondImageUri,
    //   };

    //   AsyncStorage.setItem('photo', JSON.stringify(datas));
    //   console.log('images', datas);
    //   navigation.navigate('VisitorDetailsScreen');
    // } else {
    //   setModal(!modal);
    // }

    if (details == 'Image1') {
      const data1 = firstImageUri;

      await AsyncStorage.setItem('Image1', data1);

      navigation.navigate('AttachFile');
    } else if (details == 'Image2') {
      const data2 = secondImageUri;
      await AsyncStorage.setItem('Image2', data2);
      navigation.navigate('AttachFile');
    }
  };

  return (
    <View style={styles.sectionContainer}>
      <View style={{position: 'absolute', top: 20, right: 20, zIndex: 100}}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Image
            resizeMode="contain"
            style={[styles.logoContainer]}
            source={icons.closeImage}
          />
        </TouchableOpacity>
      </View>

      <RNCamera
        ref={camRef}
        style={styles.preview}
        androidCameraPermissionOptions={null}
        type={RNCamera.Constants.Type.back}
        captureAudio={false}
        //</View>  onBarCodeRead={data => _handleBarCodeRead(data)}>
      >
        <DocumentMasks />

        <View style={{flex: 0.3, flexDirection: 'row', top: 5}}>
          {firstImageUri && details == 'Image1' ? (
            <View
              style={{
                flex: 0.5,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={{uri: firstImageUri}}
                style={{width: 150, height: 150}}
              />
              <TouchableOpacity
                onPress={() => (
                  setFirstImageUri(null), setCapturingFirstImage(true)
                )}
                style={{alignSelf: 'flex-start'}}>
                <Image source={icons.close} style={{width: 20, height: 20}} />
              </TouchableOpacity>
            </View>
          ) : null}

          {secondImageUri && details == 'Image2' ? (
            <View
              style={{
                flex: 0.5,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={{uri: secondImageUri}}
                style={{width: 150, height: 150}}
              />
              <TouchableOpacity
                onPress={() => (
                  setSecondImageUri(null), setCapturingSecondImage(true)
                )}
                style={{alignSelf: 'flex-start'}}>
                <Image
                  source={icons.close}
                  style={{width: 20, height: 20, alignSelf: 'flex-start'}}
                />
              </TouchableOpacity>
            </View>
          ) : null}
        </View>
      </RNCamera>
      <Text
        style={{
          textAlign: 'center',
          paddingVertical: 5,
          fontWeight: 'bold',
          fontSize: 16,
          color: '#fff',
        }}>
        {'Capture'}
      </Text>
      <Text style={{textAlign: 'center', paddingVertical: 5, color: '#fff'}}>
        {'Placethedoc'}
      </Text>
      <TouchableOpacity onPress={() => captureImage()}>
        <View
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            top: 5,
            backgroundColor: '#fff',
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: 50,
              height: 50,
              borderColor: '#000',
              borderWidth: 1,
              borderRadius: 25,
              backgroundColor: 'transparent',
            }}></View>
        </View>
      </TouchableOpacity>
      <Text
        style={{
          textAlign: 'center',
          paddingVertical: 20,
          fontWeight: 'bold',
          fontSize: 18,
          bottom: 5,
          color: '#fff',
        }}>
        {'or'}
      </Text>
      <View
        style={{
          bottom: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 15,
        }}>
        <TouchableOpacity style={styles.subbutton} onPress={openFilePicker}>
          <Text style={styles.subtext}>Uploadgallery</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.subbutton} onPress={() => _next()}>
          <Text style={styles.subtext}>Submit</Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          setVisible(!visible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image
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
              Unsupported File Type
            </Text>
            <Text
              style={{
                fontFamily: 'Roboto',
                fontSize: 13,
                fontWeight: '200',
                color: '#000',
                top: 4,
              }}>
              The file type is not supported.Supported {'\n'}
            </Text>
            <Text
              style={{
                fontFamily: 'Roboto',
                fontSize: 12,
                fontWeight: '200',
                color: '#000',
                bottom: 10,
              }}>
              types are PDF, JPG, and PNG.
            </Text>
            <TouchableOpacity
              style={{
                top: 10,
                height: (windowHeight / 80) * 3.5,
                width: (windowWidth / 80) * 9,
                borderColor: '#357AB4',
                borderRadius: 6,
                borderWidth: 1,
                justifyContent: 'center',
                backgroundColor: '#357AB4',
              }}
              onPress={() => setVisible(!visible)}>
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
      </Modal>

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
            <Image
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
            </Text>
            <TouchableOpacity
              style={{
                top: 10,
                height: (windowHeight / 80) * 3.5,
                width: (windowWidth / 80) * 9,
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
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    backgroundColor: '#4f81bd',
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logoContainer: {
    width: 15,
    height: 15,
    tintColor: '#fff',
  },
  subtext: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  subbutton: {
    height: 45,
    width: '40%',
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: '#004999',
    alignItems: 'center',
    justifyContent: 'center',
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
    borderRadius: 30,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: (windowWidth / 6) * 4.8,
    height: (windowHeight / 20) * 6,
  },

  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
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
  },
});
