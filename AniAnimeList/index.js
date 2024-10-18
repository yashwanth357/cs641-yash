/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import { NavigationContainer } from '@react-navigation/native';

const AppComponent = () => {
    <NavigationContainer>
        <App  />
    </NavigationContainer>
}

AppRegistry.registerComponent(appName, () => App);
