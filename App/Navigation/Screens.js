import {Navigation} from 'react-native-navigation';

import Loading from '~/Contianers/Auth/Loading';
import Login from '~/Contianers/Auth/Login';
import Signup from '~/Contianers/Auth/Signup';
import SignupTerms from '~/Contianers/Auth/Signup/Terms';

import Drawer from '~/Components/Form/Layout/Drawer';
import TopBar from '~/Components/Form/Layout/TopBar';
import RightButton from '~/Components/Form/Layout/RightButton';
import LoadingIndicator from '~/Components/Form/Layout/Loading';
import Feeds from '~/Contianers/App/Feeds';
import DM from '~/Contianers/App/Feeds/DM';
import Search from '~/Contianers/App/Feeds/Search';
import Notifications from '~/Contianers/App/Feeds/Notifications';

import {Provider} from 'react-redux';

import {store} from '~/Redux/CreateStore';

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

  Navigation.registerComponent(
    'navigation.twitter.RightButton',
    () => RightButton,
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

  Navigation.registerComponent('navigation.twitter.Drawer', () => Drawer);
  Navigation.registerComponent('navigation.twitter.FeedsScreen', () => Feeds);
  Navigation.registerComponent('navigation.twitter.SearchScreen', () => Search);
  Navigation.registerComponent('navigation.twitter.DMScreen', () => DM);
  Navigation.registerComponent(
    'navigation.twitter.NotificationsScreen',
    () => Notifications,
  );
};
