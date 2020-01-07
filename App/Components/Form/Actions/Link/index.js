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

  @computed get color() {
    return this.props.color || 'primary';
  }

  @computed get align() {
    return this.props.align || 'left';
  }

  render() {
    const { text, onClick} = this.props;
    const { color, align} = this;
    return (
      // <TouchableOpacity onPress={()=> onClick && onClick()} style={styles[align]}>
        <Text style={styles[color]}>{text}</Text>
      // </TouchableOpacity>
    );
  }
}
