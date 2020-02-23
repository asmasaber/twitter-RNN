/* eslint-disable prettier/prettier */
import {Navigation} from 'react-native-navigation';

import Loading from '~/Contianers/Auth/Loading';
import Login from '~/Contianers/Auth/Login';
import Signup from '~/Contianers/Auth/Signup';
import Terms from '~/Contianers/Auth/Signup/Terms';

import SideMenu from '~/Components/Layout/Drawer';
import TopBar from '~/Components/Layout/TopBar';
import RightButton from '~/Components/Layout/RightButton';
import LogoutButton from '~/Components/Layout/LogoutButton';
import SaveButton from '~/Components/Layout/SaveButton';
import SideMenuButton from '~/Components/Layout/DrawerButton';
import Feeds from '~/Contianers/App/Feeds';
import Profile from '~/Contianers/App/Profile';
import BirthDate from '~/Contianers/App/Profile/BirthDate';

import withStore from '~/Hocs/withStore';

export default () => {
  Navigation.registerComponent('Auth.TopBar', () => TopBar);
  Navigation.registerComponent('Navigation.TopBar.Signup', () => RightButton);
  Navigation.registerComponent('Navigation.TopBar.Logout', withStore(LogoutButton));
  Navigation.registerComponent('Navigation.TopBar.Save', () => SaveButton);

  Navigation.registerComponent('Navigation.SideMenu', () => SideMenu);
  Navigation.registerComponent('Navigation.SideMenu.Button', () => SideMenuButton);

  Navigation.registerComponent('Auth.Check', withStore(Loading));
  Navigation.registerComponent('Auth.Login', withStore(Login));
  Navigation.registerComponent('Auth.Signup', withStore(Signup));
  Navigation.registerComponent('Auth.Terms', withStore(Terms));

  Navigation.registerComponent('App.Feeds', withStore(Feeds));
  Navigation.registerComponent('App.Profile', withStore(Profile));
  Navigation.registerComponent('App.Profile.BirthDate', withStore(BirthDate));
};
