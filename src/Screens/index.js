import {Navigation} from 'react-native-navigation';

import App from '../../App';
import Drawer from './Drawer';
import Profile from './Profile';
import Lists from './Lists';

export const DRAWER_SCREEN = 'navigation.twitter.Drawer';
export const HOME_SCREEN = 'navigation.twitter.HomeScreen';
export const PROFILE_SCREEN = 'navigation.twitter.ProfileScreen';
export const LISTS_SCREEN = 'navigation.twitter.ListsScreen';

export const Screens = {
  DRAWER_SCREEN: Drawer,
  HOME_SCREEN: App,
  PROFILE_SCREEN: Profile,
  LISTS_SCREEN: Lists,
};

export const startApp = () => {
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
};
