import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import Theme, {colors} from '../../Theme';
import styles from '../styles';

export default props => {
  return (
    <View style={styles.ovelLay}>
      <View style={styles.container}>
        <ActivityIndicator size="large" color={colors.primary} />
        <Text style={styles.loadingText}>{`${props.text}...`}</Text>
      </View>
    </View>
  );
};
