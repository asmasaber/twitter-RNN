import {Navigation} from 'react-native-navigation';

import Loading from '../Contianers/Auth/Loading';
import Login from '../Contianers/Auth/Login';
import Signup from '../Contianers/Auth/Signup';
import SignupTerms from '../Contianers/Auth/Signup/Terms';
import SignupSubmit from '../Contianers/Auth/Signup/Submit';

import Drawer from '../Components/Layout/Drawer';
import TopBar from '../Components/Layout/TopBar';
import LoadingIndicator from '../Components/Layout/Loading';
import Feeds from '../Contianers/Feeds';
import DM from '../Contianers/Feeds/DM';
import Search from '../Contianers/Feeds/Search';
import Notifications from '../Contianers/Feeds/Notifications';

import Profile from '../Contianers/SIdeMenu/Profile';

import {Provider} from 'react-redux';

import {store} from '../Redux/CreateStore';

export default () => {
  Navigation.registerComponentWithRedux(
    'navigation.twitter.Loading',
    () => Loading,
    Provider,
    store,
  );

  Navigation.registerComponent('navigation.twitter.topBar', () => TopBar);
  Navigation.registerComponent(
    'navigation.twitter.LoadingIndicator',
    () => LoadingIndicator,
  );

  Navigation.registerComponentWithRedux(
    'navigation.twitter.Login',
    () => Login,
    Provider,
    store,
  );

  Navigation.registerComponentWithRedux(
    'navigation.twitter.SignupScreen',
    () => Signup,
    Provider,
    store,
  );

  Navigation.registerComponentWithRedux(
    'navigation.twitter.SignupTermsScreen',
    () => SignupTerms,
    Provider,
    store,
  );

  Navigation.registerComponentWithRedux(
    'navigation.twitter.SignupSubmitScreen',
    () => SignupSubmit,
    Provider,
    store,
  );

  Navigation.registerComponent('navigation.twitter.Drawer', () => Drawer);
  Navigation.registerComponent('navigation.twitter.FeedsScreen', () => Feeds);
  Navigation.registerComponent('navigation.twitter.SearchScreen', () => Search);
  Navigation.registerComponent('navigation.twitter.DMScreen', () => DM);
  Navigation.registerComponent(
    'navigation.twitter.NotificationsScreen',
    () => Notifications,
  );

  Navigation.registerComponent(
    'navigation.twitter.ProfileScreen',
    () => Profile,
  );
};
