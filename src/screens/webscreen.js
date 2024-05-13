// import React, { useState, useEffect } from 'react';
// import { View, StyleSheet, Button, Text } from 'react-native';
// import {HMSSDK,HMSConfig} from '@100mslive/react-native-hms'
// // import { HMSSDK, HMSConfig } from '@100mslive/hms-video';

// const webscreen = () => {
//   const [localVideoTrack, setLocalVideoTrack] = useState(null);
//   const [remoteVideoTrack, setRemoteVideoTrack] = useState(null);
//   const [room, setRoom] = useState(null);

//   useEffect(() => {
//     const initializeSDK = async () => {
//       const config = new HMSConfig({
//         tokenEndpoint: 'eyJ2ZXJzaW9uIjoyLCJ0eXBlIjoiYXBwIiwiYXBwX2RhdGEiOm51bGwsImFjY2Vzc19rZXkiOiI2NjFlNzJjMmEzZjFjNGM2MGY0NjM5ZGYiLCJyb2xlIjoiaG9zdCIsInJvb21faWQiOiI2NjFlN2IyMGQzZTUxMDQ1Zjc2MmQ0N2QiLCJ1c2VyX2lkIjoiYjAwZDQyZDgtZDdhMy00ZWRiLTg1ZWUtMDc5MzNiOTRiODZlIiwiZXhwIjoxNzEzMzYwMTE2LCJqdGkiOiI4OGQyZjUyOC01YzVlLTQwNGYtOTg2OS1mZTMyN2Q2MDQ5ZjEiLCJpYXQiOjE3MTMyNzM3MTYsImlzcyI6IjY2MWU3MmMyYTNmMWM0YzYwZjQ2MzlkZCIsIm5iZiI6MTcxMzI3MzcxNiwic3ViIjoiYXBpIn0',
//         userName: 'Amuthan',
//         userId: 'Test User',
//         roomId: '661e7b20d3e51045f762d47d',
//       });
//       await HMSSDK.init(config);
//     };

//     initializeSDK();

//     return () => {
//       HMSSDK.destroy();
//     };
//   }, []);

//   const joinRoom = async () => {
//     try {
//       const room = await HMSSDK.join();
//       setRoom(room);

//       room.on('track-add', (track) => {
//         if (track.kind === 'video' && track.source === 'local') {
//           setLocalVideoTrack(track);
//         } else if (track.kind === 'video' && track.source === 'remote') {
//           setRemoteVideoTrack(track);
//         }
//       });

//       room.on('track-remove', (track) => {
//         if (track.kind === 'video' && track.source === 'local') {
//           setLocalVideoTrack(null);
//         } else if (track.kind === 'video' && track.source === 'remote') {
//           setRemoteVideoTrack(null);
//         }
//       });
//     } catch (error) {
//       console.error('Error joining room:', error);
//     }
//   };

//   const leaveRoom = async () => {
//     try {
//       if (room) {
//         await room.leave();
//         setRoom(null);
//       }
//     } catch (error) {
//       console.error('Error leaving room:', error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {localVideoTrack && (
//         <View style={styles.videoContainer}>
//           <Text style={styles.videoText}>Local Video</Text>
//           <HMSSDK.VideoView
//             style={styles.video}
//             track={localVideoTrack}
//             isLocal={true}
//           />
//         </View>
//       )}

//       {remoteVideoTrack && (
//         <View style={styles.videoContainer}>
//           <Text style={styles.videoText}>Remote Video</Text>
//           <HMSSDK.VideoView
//             style={styles.video}
//             track={remoteVideoTrack}
//             isLocal={false}
//           />
//         </View>
//       )}

//       <View style={styles.buttonContainer}>
//         {!room ? (
//           <Button title="Join Room" onPress={joinRoom} />
//         ) : (
//           <Button title="Leave Room" onPress={leaveRoom} />
//         )}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   videoContainer: {
//     marginBottom: 20,
//   },
//   videoText: {
//     fontSize: 18,
//     marginBottom: 10,
//   },
//   video: {
//     width: 200,
//     height: 150,
//   },
//   buttonContainer: {
//     marginTop: 20,
//   },
// });

// export default webscreen;
// import React, { useState, useRef, useEffect, useCallback } from 'react';
// import {
//     SafeAreaView,
//     FlatList,
//     StatusBar,
//     Text,
//     View,
//     TouchableHighlight,
//     ActivityIndicator,
//     Alert,
// } from 'react-native';
// import { PERMISSIONS, request, requestMultiple, RESULTS } from 'react-native-permissions';
// import {
//     HMSSDK,
//     HMSUpdateListenerActions,
//     HMSConfig,
//     HMSTrackType,
//     HMSTrackUpdate,
//     HMSPeerUpdate
// } from '@100mslive/react-native-hms';

// /**
//  * Take Room Code from Dashbaord for this sample app.
//  * For more info, Check out {@link https://www.100ms.live/docs/react-native/v2/get-started/token#get-room-code-from-100ms-dashboard | Room Code}
//  */
// const ROOM_CODE = '661e7b20d3e51045f762d47d'; // PASTE ROOM CODE FROM DASHBOARD HERE

// /**
//  * using `ROOM_CODE` is recommended over `AUTH_TOKEN` approach
//  *
//  * Take Auth Token from Dashbaord for this sample app.
//  * For more info, Check out {@link https://www.100ms.live/docs/react-native/v2/foundation/security-and-tokens | Token Concept}
//  */
// const AUTH_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZXJzaW9uIjoyLCJ0eXBlIjoiYXBwIiwiYXBwX2RhdGEiOm51bGwsImFjY2Vzc19rZXkiOiI2NjFlNzJjMmEzZjFjNGM2MGY0NjM5ZGYiLCJyb2xlIjoiaG9zdCIsInJvb21faWQiOiI2NjFlN2IyMGQzZTUxMDQ1Zjc2MmQ0N2QiLCJ1c2VyX2lkIjoiNmU2NWMyZDUtNWE4Yy00Mjk2LWJmZmEtODQxMjg1ZDUzNWZmIiwiZXhwIjoxNzEzNDIxODM1LCJqdGkiOiJmM2Q5MzU1Yy0zZjYzLTRmNzctOWU0NS1kZTA4YzgzZDhjMWQiLCJpYXQiOjE3MTMzMzU0MzUsImlzcyI6IjY2MWU3MmMyYTNmMWM0YzYwZjQ2MzlkZCIsIm5iZiI6MTcxMzMzNTQzNSwic3ViIjoiYXBpIn0.lqugMj2Cxl8RquJ92uyXhq9RrXEiww_0wzOAT_2FUIg'; // PASTE AUTH TOKEN FROM DASHBOARD HERE

// const USERNAME = 'Test User';

// //#region Screens
// const webscreen = () => {
//     const [joinRoom, setJoinRoom] = useState(false);

//     const navigate = useCallback((screen) => setJoinRoom(screen === 'RoomScreen'), []);

//     return (
//         <SafeAreaView style={{ flex: 1, backgroundColor: '#EFF7FF' }}>
//             <StatusBar barStyle={'dark-content'} />

//             {joinRoom ? (
//                 <RoomScreen navigate={navigate} />
//             ) : (
//                 <HomeScreen navigate={navigate} />
//             )}
//         </SafeAreaView>
//     );
// };

// export default webscreen;

// const HomeScreen = ({ navigate }) => {
//     // Function to handle "Join Room" button press
//     const handleJoinPress = async () => {
//         // Checking Device Permissions
//         const permissionsGranted = await checkPermissions([
//             PERMISSIONS.ANDROID.CAMERA,
//             PERMISSIONS.ANDROID.RECORD_AUDIO,
//             PERMISSIONS.ANDROID.BLUETOOTH_CONNECT
//         ]);

//         if (permissionsGranted) {
//             navigate('RoomScreen');
//         } else {
//             console.log('Permission Not Granted!');
//         }
//     };

//     return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             <TouchableHighlight
//                 onPress={handleJoinPress}
//                 underlayColor="#143466"
//                 style={{
//                     paddingHorizontal: 20,
//                     paddingVertical: 12,
//                     backgroundColor: '#2471ED',
//                     borderRadius: 8
//                 }}>
//                 <Text style={{ fontSize: 20, color: '#ffffff' }}>Join Room</Text>
//             </TouchableHighlight>
//         </View>
//     );
// };

// const RoomScreen = ({ navigate }) => {
//     /**
//      * `usePeerTrackNodes` hook takes care of setting up {@link HMSSDK | HMSSDK} instance, joining room and adding all required event listeners.
//      * It gives us:
//      *  1. peerTrackNodes - This is a list of {@link PeerTrackNode}, we can use this list to render local and remote peer tiles.
//      *  2. loading - We can show loader while Room Room join is under process.
//      *  3. leaveRoom - This is a function that can be called on a button press to leave room and go back to Welcome screen.
//      */
//     const { peerTrackNodes, loading, leaveRoom, hmsInstanceRef } = usePeerTrackNodes({ navigate });

//     const HmsView = hmsInstanceRef.current?.HmsView;

//     const _keyExtractor = (item) => item.id;

//     // `_renderItem` function returns a Tile UI for each item which is `PeerTrackNode` object
//     const _renderItem = ({ item }) => {
//         const { peer, track } = item;

//         return (
//             <View
//                 style={{
//                     height: 300,
//                     margin: 8,
//                     borderRadius: 20,
//                     overflow: 'hidden',
//                     backgroundColor: '#A0C3D2'
//                 }}>
//                 {/* Checking if we have "HmsView" component, valid trackId and "track is not muted" */}
//                 {HmsView && track && track.trackId && !track.isMute() ? (
//                     // To Render Peer Live Videos, We can use HMSView
//                     // For more info about its props and usage, Check out {@link https://www.100ms.live/docs/react-native/v2/features/render-video | Render Video}
//                     <HmsView
//                         trackId={track.trackId}
//                         mirror={peer.isLocal}
//                         style={{ width: '100%', height: '100%' }}
//                     />
//                 ) : (
//                     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//                         <View
//                             style={{
//                                 width: 100,
//                                 height: 100,
//                                 borderRadius: 50,
//                                 alignItems: 'center',
//                                 justifyContent: 'center',
//                                 backgroundColor: '#FD8A8A'
//                             }}>
//                             <Text
//                                 style={{
//                                     textAlign: 'center',
//                                     fontSize: 28,
//                                     fontWeight: 'bold',
//                                     textTransform: 'uppercase'
//                                 }}>
//                                 {peer.name
//                                     .split(' ')
//                                     .map((item) => item[0])
//                                     .join('')}
//                             </Text>
//                         </View>
//                     </View>
//                 )}
//             </View>
//         );
//     };

//     const handleRoomEnd = () => {
//         leaveRoom();

//         navigate('HomeScreen');
//     };

//     return (
//         <View style={{ flex: 1 }}>
//             {loading ? (
//                 // Showing loader while Join is under process
//                 <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//                     <ActivityIndicator size={'large'} color="#2471ED" />
//                 </View>
//             ) : (
//                 <View style={{ flex: 1, position: 'relative' }}>
//                     {peerTrackNodes.length > 0 ? (
//                         // Rendering list of Peers
//                         <FlatList
//                             centerContent={true}
//                             data={peerTrackNodes}
//                             showsVerticalScrollIndicator={false}
//                             keyExtractor={_keyExtractor}
//                             renderItem={_renderItem}
//                             contentContainerStyle={{
//                                 paddingBottom: 120,
//                                 flexGrow: Platform.OS === 'android' ? 1 : undefined,
//                                 justifyContent: Platform.OS === 'android' ? 'center' : undefined
//                             }}
//                         />
//                     ) : (
//                         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//                             <Text style={{ fontSize: 28, marginBottom: 32 }}>Welcome!</Text>
//                             <Text style={{ fontSize: 16 }}>You’re the first one here.</Text>
//                             <Text style={{ fontSize: 16 }}>
//                                 Sit back and relax till the others join.
//                             </Text>
//                         </View>
//                     )}

//                     {/* Button to Leave Room */}
//                     <TouchableHighlight
//                         onPress={handleRoomEnd}
//                         underlayColor="#6e2028"
//                         style={{
//                             position: 'absolute',
//                             bottom: 40,
//                             alignSelf: 'center',
//                             backgroundColor: '#CC525F',
//                             width: 60,
//                             height: 60,
//                             borderRadius: 30,
//                             alignItems: 'center',
//                             justifyContent: 'center'
//                         }}>
//                         <Text style={{ textAlign: 'center', color: '#ffffff', fontWeight: 'bold' }}>
//                             Leave Room
//                         </Text>
//                     </TouchableHighlight>
//                 </View>
//             )}
//         </View>
//     );
// };
// //#endregion Screens

// /**
//  * Sets up HMSSDK instance, Adds required Event Listeners
//  * Checkout Quick Start guide to know things covered {@link https://www.100ms.live/docs/react-native/v2/guides/quickstart | Quick Start Guide}
//  */
// export const usePeerTrackNodes = ({ navigate }) => {
//     const hmsInstanceRef = useRef(null); // We will save `hmsInstance` in this ref
//     const [loading, setLoading] = useState(true);
//     const [peerTrackNodes, setPeerTrackNodes] = useState([]); // Use this state to render Peer Tiles

//     /**
//      * Handles Room leave process
//      */
//     const handleRoomLeave = async () => {
//         try {
//             const hmsInstance = hmsInstanceRef.current;

//             if (!hmsInstance) {
//                 return Promise.reject('HMSSDK instance is null');
//             }
//             // Removing all registered listeners
//             hmsInstance.removeAllListeners();

//             /**
//              * Leave Room. For more info, Check out {@link https://www.100ms.live/docs/react-native/v2/features/leave | Leave Room}
//              */
//             const leaveResult = await hmsInstance.leave();
//             console.log('Leave Success: ', leaveResult);

//             /**
//              * Free/Release Resources. For more info, Check out {@link https://www.100ms.live/docs/react-native/v2/features/release-resources | Release Resources}
//              */
//             const destroyResult = await hmsInstance.destroy();
//             console.log('Destroy Success: ', destroyResult);

//             // Removing HMSSDK instance
//             hmsInstanceRef.current = null;
//         } catch (error) {
//             console.log('Leave or Destroy Error: ', error);
//         }
//     };

//     /**
//      * Handles Join Update received from {@link HMSUpdateListenerActions.ON_JOIN} event listener
//      * Receiving This event means User (that is Local Peer) has successfully joined room
//      * @param {Object} data - object which has room object
//      * @param {Object} data.room - current {@link HMSRoom | room} object
//      */
//     const onJoinSuccess = (data) => {
//         /**
//          * Checkout {@link HMSLocalPeer | HMSLocalPeer} Class
//          */
//         const { localPeer } = data.room;

//         // Creating or Updating Local Peer Tile

//         // `updateNode` function updates "Track and Peer objects" in PeerTrackNodes and returns updated list.
//         // if none exist then we are "creating a new PeerTrackNode with the received Track and Peer"
//         setPeerTrackNodes((prevPeerTrackNodes) =>
//             updateNode({
//                 nodes: prevPeerTrackNodes,
//                 peer: localPeer,
//                 track: localPeer.videoTrack,
//                 createNew: true
//             })
//         );

//         // Turning off loading state on successful Room Room join
//         setLoading(false);
//     };

//     /**
//      * Handles Peer Updates received from {@link HMSUpdateListenerActions.ON_PEER_UPDATE} event listener
//      * @param {Object} data - This has updated peer and update type
//      * @param {HMSPeer} data.peer - Updated Peer
//      * @param {HMSPeerUpdate} data.type - Update Type
//      */
//     const onPeerListener = ({ peer, type }) => {
//         // We will create Tile for the Joined Peer when we receive `HMSUpdateListenerActions.ON_TRACK_UPDATE` event.
//         // Note: We are chosing to not create Tiles for Peers which does not have any tracks
//         if (type === HMSPeerUpdate.PEER_JOINED) return;

//         if (type === HMSPeerUpdate.PEER_LEFT) {
//             // Remove all Tiles which has peer same as the peer which just left the room.
//             // `removeNodeWithPeerId` function removes peerTrackNodes which has given peerID and returns updated list.
//             setPeerTrackNodes((prevPeerTrackNodes) =>
//                 removeNodeWithPeerId(prevPeerTrackNodes, peer.peerID)
//             );
//             return;
//         }

//         if (peer.isLocal) {
//             // Updating the LocalPeer Tile.
//             // `updateNodeWithPeer` function updates Peer object in PeerTrackNodes and returns updated list.
//             // if none exist then we are "creating a new PeerTrackNode for the updated Peer".
//             setPeerTrackNodes((prevPeerTrackNodes) =>
//                 updateNodeWithPeer({ nodes: prevPeerTrackNodes, peer, createNew: true })
//             );
//             return;
//         }

//         if (
//             type === HMSPeerUpdate.ROLE_CHANGED ||
//             type === HMSPeerUpdate.METADATA_CHANGED ||
//             type === HMSPeerUpdate.NAME_CHANGED ||
//             type === HMSPeerUpdate.NETWORK_QUALITY_UPDATED
//         ) {
//             // Ignoring these update types because we want to keep this implementation simple.
//             return;
//         }
//     };

//     /**
//      * Handles Track Updates received from {@link HMSUpdateListenerActions.ON_TRACK_UPDATE} event listener
//      * @param {Object} data - This has updated track with peer and update type
//      * @param {HMSPeer} data.peer - Peer
//      * @param {HMSTrack} data.track - Peer Track
//      * @param {HMSTrackUpdate} data.type - Update Type
//      */
//     const onTrackListener = ({ peer, track, type }) => {
//         // on TRACK_ADDED update
//         // We will update Tile with the track or
//         // create new Tile for with the track and peer
//         if (type === HMSTrackUpdate.TRACK_ADDED && track.type === HMSTrackType.VIDEO) {
//             // We will only update or create Tile "with updated track" when track type is Video.
//             // Tiles without Video Track are already respresenting Peers with or without Audio.

//             // Updating the Tiles with Track and Peer.
//             // `updateNode` function updates "Track and Peer objects" in PeerTrackNodes and returns updated list.
//             // if none exist then we are "creating a new PeerTrackNode with the received Track and Peer".
//             setPeerTrackNodes((prevPeerTrackNodes) =>
//                 updateNode({
//                     nodes: prevPeerTrackNodes,
//                     peer,
//                     track,
//                     createNew: true
//                 })
//             );

//             return;
//         }

//         // on TRACK_MUTED or TRACK_UNMUTED updates, We will update Tiles (PeerTrackNodes)
//         if (type === HMSTrackUpdate.TRACK_MUTED || type === HMSTrackUpdate.TRACK_UNMUTED) {
//             // We will only update Tile "with updated track" when track type is Video.
//             if (track.type === HMSTrackType.VIDEO) {
//                 // Updating the Tiles with Track and Peer.
//                 // `updateNode` function updates "Track and Peer objects" in PeerTrackNodes and returns updated list.
//                 // Note: We are not creating new PeerTrackNode object.
//                 setPeerTrackNodes((prevPeerTrackNodes) =>
//                     updateNode({
//                         nodes: prevPeerTrackNodes,
//                         peer,
//                         track
//                     })
//                 );
//             } else {
//                 // Updating the Tiles with Peer.
//                 // `updateNodeWithPeer` function updates Peer object in PeerTrackNodes and returns updated list.
//                 // Note: We are not creating new PeerTrackNode object.
//                 setPeerTrackNodes((prevPeerTrackNodes) =>
//                     updateNodeWithPeer({
//                         nodes: prevPeerTrackNodes,
//                         peer
//                     })
//                 );
//             }
//             return;
//         }

//         if (type === HMSTrackUpdate.TRACK_REMOVED) {
//             // If non-regular track, or
//             // both regular video and audio tracks are removed
//             // Then we will remove Tiles (PeerTrackNodes) with removed track and received peer
//             return;
//         }

//         /**
//          * For more info about Degrade/Restore. check out {@link https://www.100ms.live/docs/react-native/v2/features/auto-video-degrade | Auto Video Degrade}
//          */
//         if (type === HMSTrackUpdate.TRACK_RESTORED || type === HMSTrackUpdate.TRACK_DEGRADED) {
//             return;
//         }
//     };

//     /**
//      * Handles Errors received from {@link HMSUpdateListenerActions.ON_ERROR} event listener
//      * @param {HMSException} error
//      *
//      * For more info, Check out {@link https://www.100ms.live/docs/react-native/v2/features/error-handling | Error Handling}
//      */
//     const onErrorListener = (error) => {
//         setLoading(false);

//         console.log(`${error?.code} ${error?.description}`);
//     };

//     // Effect to handle HMSSDK initialization and Listeners Setup
//     useEffect(() => {
//         const joinRoom = async () => {
//           try {
//             setLoading(true);

//             /**
//              * creating {@link HMSSDK} instance to join room
//              * For more info, Check out {@link https://www.100ms.live/docs/react-native/v2/features/join#join-a-room | Join a Room}
//              */
//             const hmsInstance = await HMSSDK.build();

//             // Saving `hmsInstance` in ref
//             hmsInstanceRef.current = hmsInstance;

//             let token = AUTH_TOKEN;

//             // if `AUTH_TOKEN` is not valid, generate auth token from `ROOM_CODE`
//             if (!token) {
//               token = await hmsInstance.getAuthTokenByRoomCode(ROOM_CODE);
//             }

//             /**
//              * Adding HMSSDK Event Listeners before calling Join method on HMSSDK instance
//              * For more info, Check out -
//              * {@link https://www.100ms.live/docs/react-native/v2/features/join#update-listener | Adding Event Listeners before Join},
//              * {@link https://www.100ms.live/docs/react-native/v2/features/event-listeners | Event Listeners},
//              * {@link https://www.100ms.live/docs/react-native/v2/features/event-listeners-enums | Event Listeners Enums}
//              */
//             hmsInstance.addEventListener(HMSUpdateListenerActions.ON_JOIN, onJoinSuccess);

//             hmsInstance.addEventListener(HMSUpdateListenerActions.ON_PEER_UPDATE, onPeerListener);

//             hmsInstance.addEventListener(HMSUpdateListenerActions.ON_TRACK_UPDATE, onTrackListener);

//             hmsInstance.addEventListener(HMSUpdateListenerActions.ON_ERROR, onErrorListener);

//             /**
//              * Joining Room. For more info, Check out {@link https://www.100ms.live/docs/react-native/v2/features/join#join-a-room | Join a Room}
//              */
//             hmsInstance.join(new HMSConfig({ authToken: token, username: USERNAME }));
//           } catch (error) {
//             navigate('HomeScreen');
//             console.error(error);
//             Alert.alert('Error', 'Check your console to see error logs!');
//           }
//         };

//         joinRoom();

//         // When effect unmounts for any reason, We are calling leave function
//         return () => {
//             handleRoomLeave();
//         };
//     }, [navigate]);

//     return { loading, leaveRoom: handleRoomLeave, peerTrackNodes, hmsInstanceRef };
// };

// //#region Utilities

// /**
//  * Function to check permissions
//  * @param {string[]} permissions
//  * @returns {boolean} all permissions granted or not
//  */
// export const checkPermissions = async (permissions) => {
//     try {
//         if (Platform.OS === 'ios') {
//             return true;
//         }
//         const requiredPermissions = permissions.filter(
//             (permission) => permission.toString() !== PERMISSIONS.ANDROID.BLUETOOTH_CONNECT
//         );

//         const results = await requestMultiple(requiredPermissions);

//         let allPermissionsGranted = true;
//         for (let permission in requiredPermissions) {
//             if (!(results[requiredPermissions[permission]] === RESULTS.GRANTED)) {
//                 allPermissionsGranted = false;
//             }
//             console.log(
//                 `${requiredPermissions[permission]} : ${results[requiredPermissions[permission]]}`
//             );
//         }

//         // Bluetooth Connect Permission handling
//         if (
//             permissions.findIndex(
//                 (permission) => permission.toString() === PERMISSIONS.ANDROID.BLUETOOTH_CONNECT
//             ) >= 0
//         ) {
//             const bleConnectResult = await request(PERMISSIONS.ANDROID.BLUETOOTH_CONNECT);
//             console.log(`${PERMISSIONS.ANDROID.BLUETOOTH_CONNECT} : ${bleConnectResult}`);
//         }

//         return allPermissionsGranted;
//     } catch (error) {
//         console.log(error);
//         return false;
//     }
// };

// /**
//  * returns `uniqueId` for a given `peer` and `track` combination
//  */
// export const getPeerTrackNodeId = (peer, track) => {
//     return peer.peerID + (track?.source ?? HMSTrackSource.REGULAR);
// };

// /**
//  * creates `PeerTrackNode` object for given `peer` and `track` combination
//  */
// export const createPeerTrackNode = (peer, track) => {
//     let isVideoTrack = false;
//     if (track && track?.type === HMSTrackType.VIDEO) {
//         isVideoTrack = true;
//     }
//     const videoTrack = isVideoTrack ? track : undefined;
//     return {
//         id: getPeerTrackNodeId(peer, track),
//         peer: peer,
//         track: videoTrack
//     };
// };

// /**
//  * Removes all nodes which has `peer` with `id` same as the given `peerID`.
//  */
// export const removeNodeWithPeerId = (nodes, peerID) => {
//     return nodes.filter((node) => node.peer.peerID !== peerID);
// };

// /**
//  * Updates `peer` of `PeerTrackNode` objects which has `peer` with `peerID` same as the given `peerID`.
//  *
//  * If `createNew` is passed as `true` and no `PeerTrackNode` exists with `id` same as `uniqueId` generated from given `peer` and `track`
//  * then new `PeerTrackNode` object will be created.
//  */
// export const updateNodeWithPeer = (data) => {
//     const { nodes, peer, createNew = false } = data;

//     const peerExists = nodes.some((node) => node.peer.peerID === peer.peerID);

//     if (peerExists) {
//         return nodes.map((node) => {
//             if (node.peer.peerID === peer.peerID) {
//                 return { ...node, peer };
//             }
//             return node;
//         });
//     }

//     if (!createNew) return nodes;

//     if (peer.isLocal) {
//         return [createPeerTrackNode(peer), ...nodes];
//     }

//     return [...nodes, createPeerTrackNode(peer)];
// };

// /**
//  * Removes all nodes which has `id` same as `uniqueId` generated from given `peer` and `track`.
//  */
// export const removeNode = (nodes, peer, track) => {
//     const uniqueId = getPeerTrackNodeId(peer, track);

//     return nodes.filter((node) => node.id !== uniqueId);
// };

// /**
//  * Updates `track` and `peer` of `PeerTrackNode` objects which has `id` same as `uniqueId` generated from given `peer` and `track`.
//  *
//  * If `createNew` is passed as `true` and no `PeerTrackNode` exists with `id` same as `uniqueId` generated from given `peer` and `track`
//  * then new `PeerTrackNode` object will be created
//  */
// export const updateNode = (data) => {
//     const { nodes, peer, track, createNew = false } = data;

//     const uniqueId = getPeerTrackNodeId(peer, track);

//     const nodeExists = nodes.some((node) => node.id === uniqueId);

//     if (nodeExists) {
//         return nodes.map((node) => {
//             if (node.id === uniqueId) {
//                 return { ...node, peer, track };
//             }
//             return node;
//         });
//     }

//     if (!createNew) return nodes;

//     if (peer.isLocal) {
//         return [createPeerTrackNode(peer, track), ...nodes];
//     }

//     return [...nodes, createPeerTrackNode(peer, track)];
// };

// //#endregion Utility
// import React, { useState, useEffect } from 'react';
// import { View, Button } from 'react-native';
// import Sound from 'react-native-sound';

// const webscreen = () => {
//   const [sound, setSound] = useState(null);

//   useEffect(() => {
//     // Initialize sound file
//     Sound.setCategory('Playback');
//     const soundObject = new Sound('sound.mp3', Sound.MAIN_BUNDLE, (error) => {
//       if (error) {
//         console.log('failed to load the sound', error); // Log the error
//         return;
//       }
//       // Success initializing sound
//       setSound(soundObject);
//     });

//     // Cleanup function
//     return () => {
//       // Release the sound object when component is unmounted
//       if (sound) {
//         sound.release();
//       }
//     };
//   }, []);

//   const playSound = () => {
//     if (sound) {
//       sound.play((success) => {
//         if (success) {
//           console.log('successfully finished playing');
//         } else {
//           console.log('playback failed due to audio decoding errors');
//         }
//       });
//     } else {
//       console.log('Sound object not initialized yet');
//     }
//   };

//   const pauseSound = () => {
//     if (sound) {
//       sound.pause();
//     } else {
//       console.log('Sound object not initialized yet');
//     }
//   };

//   const stopSound = () => {
//     if (sound) {
//       sound.stop();
//       sound.setCurrentTime(0); // Reset sound to start
//     } else {
//       console.log('Sound object not initialized yet');
//     }
//   };

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Button title="Play Sound" onPress={playSound} />
//       <Button title="Pause Sound" onPress={pauseSound} />
//       <Button title="Stop Sound" onPress={stopSound} />
//     </View>
//   );
// };

// export default webscreen;
