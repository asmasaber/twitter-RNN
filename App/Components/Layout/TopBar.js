import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';

import {Navigation} from 'react-native-navigation';
import {colors} from '../../Theme';
import signupStack from '../../Navigation/Auth';
export default props => {
  console.log('props', props);
  return (
    <View style={styles.contianer}>
      <View style={styles.logoSection}>
        <Entypo name={'twitter'} style={styles.logo} />
      </View>
      <View style={styles.rightSection}>
        <TouchableOpacity
          onPress={() => Navigation.push('authStack', signupStack)}>
          <Text style={styles.button}>Sign up</Text>
        </TouchableOpacity>
        <MaterialCommunityIcons
          name={'dots-vertical'}
          style={styles.menuIcon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contianer: {
    backgroundColor: 'white',
    height: 70,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  logoSection: {
    // flex: 1,
    // textAlign: 'center',
  },
  rightSection: {
    position: 'absolute',
    right: 0,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  logo: {
    color: colors.primary,
    fontSize: 24,
    textAlign: 'center',
  },
  menuIcon: {
    color: colors.primary,
    fontSize: 28,
    paddingTop: 7,
    paddingRight: 15,
    backgroundColor: 'white',
  },
  button: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 8,
    backgroundColor: 'white',
    marginRight: 20,
  },
});
