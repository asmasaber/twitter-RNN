import {Navigation} from 'react-native-navigation';
import {Colors} from '../Theme';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default () => {
  Promise.all([
    MaterialIcons.getImageSource('home', 100, Colors.gray),
    AntDesign.getImageSource('search1', 100, Colors.gray),
    SimpleLineIcons.getImageSource('bell', 100, Colors.gray),
    SimpleLineIcons.getImageSource('envelope', 100, Colors.gray),
    Entypo.getImageSource('menu', 25, Colors.black),
    MaterialCommunityIcons.getImageSource('pencil-plus', 25, Colors.black),
  ]).then(icons => {
    Navigation.setRoot({
      root: {
        sideMenu: {
          left: {
            component: {
              name: 'Navigation.SideMenu',
              id: 'Navigation.SideMenu',
            },
          },
          center: {
            stack: {
              id: 'MainApp',
              children: [
                {
                  bottomTabs: {
                    children: [
                      {
                        stack: {
                          children: [
                            {
                              component: {
                                name: 'App.Feeds',
                                options: {
                                  bottomTab: {
                                    icon: icons[0],
                                    selectedIconColor: Colors.primary,
                                  },

                                  topBar: {
                                    visible: true,
                                    elevation: 0,
                                    noBorder: false,

                                    title: {
                                      // text: 'Home',
                                      // alignment: 'fill',
                                      component: {
                                        name: 'Navigation.SideMenu.Button',
                                      },
                                    },
                                    rightButtons: [
                                      {
                                        id: 'Navigation.TopBar.Logout',
                                        component: {
                                          name: 'Navigation.TopBar.Logout',
                                          passProps: {
                                            rootId: 'authStack',
                                          },
                                        },
                                      },
                                    ],
                                    backButton: {
                                      color: Colors.primary,
                                    },
                                    // leftButtons: [
                                    //   {
                                    //     id: 'Navigation.SideMenu.Button',
                                    //     icon: icons[4],
                                    //     // component: {
                                    //     //   name: 'Navigation.SideMenu.Button',
                                    //     // },
                                    //   },
                                    // ],
                                  },
                                },
                              },
                            },
                          ],
                          options: {
                            fab: {
                              id: 'fab', // required
                              backgroundColor: Colors.primary,
                              clickColor: Colors.primary,
                              alignHorizontally: 'right',
                              iconColor: 'white',
                              icon: icons[5],
                              size: 30,
                            },
                          },
                        },
                      },
                      {
                        component: {
                          name: 'App.Feeds',
                          options: {
                            bottomTab: {
                              icon: icons[1],
                              selectedIconColor: Colors.primary,
                            },
                          },
                        },
                      },
                      {
                        component: {
                          name: 'App.Feeds',
                          options: {
                            bottomTab: {
                              icon: icons[2],
                              selectedIconColor: Colors.primary,
                            },
                          },
                        },
                      },
                      {
                        component: {
                          name: 'App.Feeds',
                          options: {
                            bottomTab: {
                              icon: icons[3],
                              selectedIconColor: Colors.primary,
                            },
                          },
                        },
                      },
                    ],
                    options: {
                      bottomTabs: {
                        titleDisplayMode: 'alwaysHide',
                        selectedIconColor: Colors.primary,
                      },
                    },
                  },
                },
              ],
            },
          },
          options: {
            layout: {
              backgroundColor: 'white',
            },
            sideMenu: {
              left: {
                width: 340,
                backgroundColor: 'white',
              },
            },
          },
        },
      },
    });
  });
};
