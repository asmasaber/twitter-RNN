import React from 'react';
import {View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

import styles from './styles';

export default props => {
  return (
    <View style={styles.contianer}>
      <View>
        <Entypo name={'twitter'} style={styles.logo} />
      </View>
    </View>
  );
};
