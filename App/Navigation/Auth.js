import {Navigation} from 'react-native-navigation';
import {colors} from '../Theme';

export default () => {
  Navigation.setRoot({
    root: {
      stack: {
        id: 'authStack',
        children: [
          {
            component: {
              name: 'navigation.twitter.Login',
            },
          },
          // {
          //   component: {
          //     name: 'navigation.twitter.SignupScreen',
          //   },
          // },
          // {
          //   component: {
          //     name: 'navigation.twitter.SignupTermsScreen',
          //   },
          // },
        ],
        options: {
          topBar: {
            visible: true,
            elevation: 0,
            noBorder: true,
            title: {
              component: {
                name: 'navigation.twitter.topBar',
                aligment: 'center',
              },
            },
            backButton: {
              color: colors.primary,
            },
          },
        },
      },
    },
  });
};

export const signupStack = {
  stack: {
    id: 'signupStack',
    children: [
      {
        component: {
          name: 'navigation.twitter.SignupScreen',
        },
      },
    ],
    options: {
      topBar: {
        visible: true,
        elevation: 0,
        noBorder: true,
        title: {
          component: {
            name: 'navigation.twitter.topBar',
            aligment: 'center',
            passProps: {
              signupStack: true,
            },
          },
        },
      },
    },
  },
};
