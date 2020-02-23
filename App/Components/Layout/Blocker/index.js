import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {Colors} from '~/Theme';
import styles from './styles';

export default props => {
  return (
    <View style={styles.ovelLay}>
      <View style={styles.container}>
        <ActivityIndicator size="large" color={Colors.primary} />
        <Text style={styles.loadingText}>{'Loading ...'}</Text>
      </View>
    </View>
  );
};
