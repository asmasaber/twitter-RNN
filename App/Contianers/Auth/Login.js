import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, TouchableOpacity, ToastAndroid} from 'react-native';
import {Navigation} from 'react-native-navigation';
import Input from '../../Components/Input';
import Sperator from '../../Components/Sperator';
import styles from '../Auth/styles';
import AuthActions from '../../Redux/Actions/Auth';
import startApp from '../../Navigation/App';

export default props => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const loading = useSelector(state => state.auth.loading);
  const error = useSelector(state => state.auth.error);
  const token = useSelector(state => state.auth.token);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(AuthActions.reset());
  }, [dispatch]);
  useEffect(() => {
    console.log('loading', loading);

    if (loading) {
      Navigation.showOverlay({
        component: {
          id: 'LoadingIndicator',
          name: 'navigation.twitter.LoadingIndicator',
          passProps: {
            text: 'Logging in',
          },
          options: {
            overlay: {
              interceptTouchOutside: true,
            },
          },
        },
      });
    } else {
      Navigation.dismissOverlay('LoadingIndicator');
    }
  }, [loading, props.componentId]);

  useEffect(() => {
    if (token) {
      startApp();
    }
    console.log('error', error);
    if (error) {
      ToastAndroid.show('error', ToastAndroid.SHORT);
    }
  }, [token, error]);
  return (
    <View style={styles.container}>
      <Text style={[styles.headerMargin, styles.text, styles.h1]}>
        Log in to Twitter.
      </Text>
      <View style={styles.inputArea}>
        <Input
          title="Phone number, email address, or username"
          onChangeText={text => setUsername(text)}
          value={username}
          autoFocus
        />
        <Input
          title="Password"
          onChangeText={text => setPassword(text)}
          value={password}
          secureTextEntry
        />
        <TouchableOpacity
          onPress={() =>
            Navigation.push(props.componentId, {
              component: {
                name: 'navigation.twitter.SignupScreen',
                passProps: {
                  text: 'Pushed screen',
                },
                options: {
                  topBar: {
                    title: {
                      text: 'Pushed screen title',
                    },
                  },
                },
              },
            })
          }>
          <Text style={styles.link}>Forgotten your password?</Text>
        </TouchableOpacity>
      </View>
      <Sperator />
      <TouchableOpacity
        onPress={() => dispatch(AuthActions.login({username, password}))}
        style={username && password ? styles.button : styles.disabledButton}
        disabled={!(username && password)}>
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>
    </View>
  );
};
