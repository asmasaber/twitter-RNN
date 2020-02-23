import React from 'react';
import {TouchableOpacity} from 'react-native';
import {observable, computed} from 'mobx';
import {observer} from 'mobx-react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';

@observer
export default class Checkbox extends React.Component {
  @observable checked = false || this.props.value;

  @computed get icon() {
    return this.checked? 'checkbox-marked' : 'border-all-variant';
  }

  @computed get size() {
    return this.props.size || 24;
  }

  handleChange = () => {
    const {onValueChange} = this.props; 
    this.checked = !this.checked;
    onValueChange && onValueChange(this.checked);
  }

  render() {
    return (
    <TouchableOpacity onPress={this.handleChange} style={[styles.wrapper, this.props.style]}>
      {<MaterialCommunityIcons name={this.icon} style={styles.icon} size={this.size} />}
    </TouchableOpacity>);
  }
}
