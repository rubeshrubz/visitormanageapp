/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';

import Functions from './src/global/functions';
import * as Events from './src/global/events';
import * as Configuration from './src/global/constants'
if (global.functions == null) global.functions = Functions.getInstance();
if (global.event == null) global.event = Events;
 if (global.const == null) global.const = Configuration;
AppRegistry.registerComponent(appName, () => App);
