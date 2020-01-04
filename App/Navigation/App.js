import {Navigation} from 'react-native-navigation';

export default () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            sideMenu: {
              options: {
                topBar: {
                  visible: false,
                },
              },
              left: {
                component: {
                  name: 'navigation.twitter.Drawer',
                },
              },
              center: {
                bottomTabs: {
                  children: [
                    {
                      stack: {
                        children: [
                          {
                            component: {
                              name: 'navigation.twitter.FeedsScreen',
                            },
                          },
                        ],
                        options: {
                          bottomTab: {
                            text: 'Tab 1',
                            icon: require('../assets/images/avatar.jpeg'),
                          },
                        },
                      },
                    },
                    {
                      component: {
                        name: 'navigation.twitter.SearchScreen',
                        options: {
                          bottomTab: {
                            text: 'Tab 2',
                            icon: require('../assets/images/avatar.jpeg'),
                          },
                        },
                      },
                    },
                  ],
                },
              },
            },
          },
        ],
      },
    },
  });
};
