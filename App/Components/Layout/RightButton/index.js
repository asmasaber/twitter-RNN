import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {navigation} from '~/Navigation/Utils';
import styles from './styles';

export default props => {
  return (
    <View style={styles.root}>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.push('authStack', 'Auth.Signup')}>
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.iconWrapper}>
        <MaterialCommunityIcons name={'dots-vertical'} style={styles.icon} />
      </View>
    </View>
  );
};
