import {ToastAndroid} from 'react-native';
import {Navigation} from 'react-native-navigation';
export const loadingIndicator = {
  show: (text = 'Loading', id = 'LoadingIndicator') => {
    Navigation.showOverlay({
      component: {
        id,
        name: 'navigation.twitter.LoadingIndicator',
        passProps: {
          text,
        },
        options: {
          overlay: {
            interceptTouchOutside: true,
          },
        },
      },
    });
  },
  hide: (id = 'LoadingIndicator') => {
    Navigation.dismissOverlay(id);
  },
};
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
