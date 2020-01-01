/**
 * @format
 */

import {Navigation} from 'react-native-navigation';
import App from './App';
import Drawer from './src/Screens/Drawer';
import Profile from './src/Screens/Profile';
import Lists from './src/Screens/Lists';

import forIn from 'lodash/forIn';
import {Screens} from './src/Screens';
Navigation.registerComponent('navigation.twitter.Drawer', () => Drawer);
Navigation.registerComponent('navigation.twitter.HomeScreen', () => App);

Navigation.registerComponent('navigation.twitter.ProfileScreen', () => Profile);

Navigation.registerComponent('navigation.twitter.ListsScreen', () => Lists);

// console.log('Screens', Screens);
// forIn(Screens, (ScreenComponent, key) => {
//   console.log('key', key);
//   console.log('screen', ScreenComponent);
//   Navigation.registerComponent(key, () => ScreenComponent);
// });

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            sideMenu: {
              left: {
                component: {
                  name: 'navigation.twitter.Drawer',
                  passProps: {
                    text: 'This is a left side menu screen',
                  },
                },
              },
              center: {
                component: {
                  name: 'navigation.twitter.HomeScreen',
                },
              },
            },
          },
        ],
      },
    },
  });
});
