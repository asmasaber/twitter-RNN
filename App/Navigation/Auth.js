import {Navigation} from 'react-native-navigation';
import {Colors} from '../Theme';

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
            rightButtons: [
              {
                id: 'navigation.twitter.RightButton',
                component: {
                  name: 'navigation.twitter.RightButton',
                  passProps: {
                    rootId: 'authStack',
                  },
                },
              },
            ],
            title: {
              component: {
                name: 'navigation.twitter.topBar',
                aligment: 'center',
              },
            },
            backButton: {
              color: Colors.primary,
            },
          },
        },
      },
    },
  });
};
