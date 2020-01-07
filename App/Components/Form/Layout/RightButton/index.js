import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {navigation} from '~/Navigation/Utils';
import styles from './styles';

export default props => {
  return (
    <View style={styles.rightSection}>
      <TouchableOpacity
        onPress={() =>
          navigation.push('authStack', 'navigation.twitter.SignupScreen')
        }>
        <Text style={styles.button}>Sign up</Text>
      </TouchableOpacity>
      <MaterialCommunityIcons name={'dots-vertical'} style={styles.menuIcon} />
    </View>
  );
};
