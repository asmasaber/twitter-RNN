import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import styles from './styles';

export default class Action extends React.Component {
  render() {
    const {action} = this.props;

    return (
      <TouchableOpacity
        onPress={() => action.onClick && action.onClick()}
        style={styles.actionWrapper}>
        <Text style={styles.action}> {action.title} </Text>
      </TouchableOpacity>
    );
  }
}
