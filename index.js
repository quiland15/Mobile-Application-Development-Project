/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Login from './src/page/Login';
import Slicing from './src/page/Slicing';

AppRegistry.registerComponent(appName, () => Slicing);