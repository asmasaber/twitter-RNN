import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, TouchableOpacity, ToastAndroid} from 'react-native';
import {Navigation} from 'react-native-navigation';
import Input from '../../../Components/Input';
import Sperator from '../../../Components/Sperator';
import styles from '../styles';
import AuthActions from '../../..//Redux/Actions/Auth';
import startApp from '../../../Navigation/App';

export default props => {
  const [username, setUsername] = useState();
  const [name, setName] = useState();
  const loading = useSelector(state => state.auth.loading);
  const error = useSelector(state => state.auth.error);
  const verified = useSelector(state => state.auth.verified);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(AuthActions.reset());
  }, [dispatch]);
  useEffect(() => {
    console.log('loading', loading);
    // if (loading) {
    //   Navigation.showOverlay({
    //     component: {
    //       name: 'navigation.twitter.LoadingIndicator',
    //       passProps: {
    //         text: 'Logging in',
    //       },
    //       options: {
    //         overlay: {
    //           interceptTouchOutside: true,
    //         },
    //       },
    //     },
    //   });
    // } else {
    //   Navigation.dismissOverlay(props.componentId);
    // }
  }, [loading, props.componentId]);

  useEffect(() => {
    if (verified) {
      // push next step
    }
    console.log('error', error);
    if (error) {
      ToastAndroid.show('error', ToastAndroid.SHORT);
    }
  }, [verified, error]);

  console.log('styles.header', styles.header);
  return (
    <View style={styles.container}>
      <Text style={[styles.headerMargin, styles.text, styles.h1]}>
        Create Your account
      </Text>
      <View style={[styles.inputArea, styles.center]}>
        <Input
          placeholder="Name"
          onChangeText={text => setName(text)}
          value={name}
          hint="50"
          autoFocus
        />
        <Input
          placeholder="Phone number or email address"
          onChangeText={text => setUsername(text)}
          value={username}
        />
      </View>
      <Sperator />
      <TouchableOpacity
        onPress={() =>
          Navigation.push(props.componentId, {
            component: {
              name: 'navigation.twitter.SignupTermsScreen',
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
        }
        style={username && name ? styles.button : styles.disabledButton}
        disabled={!(username && name)}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};
