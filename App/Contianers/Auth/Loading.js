import React, {useEffect} from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Entypo from 'react-native-vector-icons/Entypo';

import StartAuth from '../../Navigation/Auth';
import StartApp from '../../Navigation/App';
import AuthActions from '../../Redux/Actions/Auth';

import styles from './styles';

export default () => {
  const token = useSelector(state => state.auth.token);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(AuthActions.getToken());
      if (token) {
        StartApp();
      } else {
        StartAuth();
      }
    }, 50);
    return () => dispatch(AuthActions.reset());
  }, [dispatch, token]);

  return (
    <View style={styles.loadingContainer}>
      <Entypo name={'twitter'} size={70} style={styles.logo} />
    </View>
  );
};
