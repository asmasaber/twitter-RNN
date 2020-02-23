import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import styles from './styles';

export default class Save extends React.Component {
  render() {
    const {onSave, disabled} = this.props;
    return (
      <TouchableOpacity onPress={() => onSave && onSave()} disabled={disabled}>
        <Text style={[styles.button, disabled ? styles.disabled : {}]}>
          SAVE
        </Text>
      </TouchableOpacity>
    );
  }
}
