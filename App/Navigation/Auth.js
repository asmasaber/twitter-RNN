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
              name: 'Auth.Login',
            },
          },
        ],
        options: {
          layout: {
            backgroundColor: 'white',
          },

          modalPresentationStyle: 'none',
          overlay: {
            interceptTouchOutside: true,
            handleKeyboardEvents: true,
          },
          topBar: {
            visible: true,
            hideOnScroll: true,
            noBorder: true,
            rightButtons: [
              {
                id: 'Navigation.TopBar.Signup',
                component: {
                  name: 'Navigation.TopBar.Signup',
                  passProps: {
                    rootId: 'authStack',
                  },
                },
              },
            ],
            title: {
              component: {
                name: 'Auth.TopBar',
              },
            },
            headerTitleStyle: {
              textAlign: 'center',

              flex: 1,
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
