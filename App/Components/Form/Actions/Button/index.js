import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {observable, computed} from 'mobx';
import {observer} from 'mobx-react';

import styles from './styles';

@observer
export default class Button extends React.Component {
  @observable checked = false || this.props.value;

  @computed get icon() {
    return this.checked? 'checksquare' : 'checksquareo';
  }

  @computed get size() {
    return this.props.size || 22;
  }

  handleChange = () => {
    const {onValueChange} = this.props; 
    this.checked = !this.checked;
    onValueChange && onValueChange(this.checked);
  }

  render() {
    const { text, disabled, onClick} = this.props;
    return (
      <TouchableOpacity
        onPress={() => onClick()}
        style={!disabled ? styles.button : [styles.button, styles.disabled]}
        disabled={disabled}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    );
  }
}
