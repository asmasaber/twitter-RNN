import {Navigation} from 'react-native-navigation';
import registerScreens from './Screens';

export default () => {
  registerScreens();
  Navigation.setRoot({
    root: {
      component: {
        name: 'navigation.twitter.Loading',
      },
    },
  });
};
