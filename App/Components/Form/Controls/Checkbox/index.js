import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {observable, computed} from 'mobx';
import {observer} from 'mobx-react';
import AntDesign from 'react-native-vector-icons/AntDesign';

import styles from './styles';

@observer
export default class Checkbox extends React.Component {
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
    return (
    <TouchableOpacity onPress={this.handleChange} style={[styles.wrapper, this.props.style]}>
      {<AntDesign name={this.icon} style={styles.icon} size={this.size} />}
    </TouchableOpacity>);
  }
}
