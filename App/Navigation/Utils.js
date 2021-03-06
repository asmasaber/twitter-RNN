import {ToastAndroid} from 'react-native';
import {Navigation} from 'react-native-navigation';
export const navigation = {
  push: (componentId, name, props, options) => {
    Navigation.push(componentId, {
      component: {
        name,
        passProps: {
          ...props,
        },
        options: {
          ...options,
        },
      },
    });
  },
};

export const toast = {
  show: text => {
    ToastAndroid.show(text, ToastAndroid.SHORT);
  },
};
