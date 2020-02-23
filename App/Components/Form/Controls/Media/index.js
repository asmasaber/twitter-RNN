import React from 'react';
import {View, ImageBackground, TouchableOpacity} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {observable, computed} from 'mobx';
import {observer} from 'mobx-react';

import {Colors} from '~/Theme';
import styles from './styles';

@observer
export default class Input extends React.Component {
  @observable focused = false;
  @observable showPassword = false;

  @computed get iconColor() {
    return this.showPassword? Colors.primary : Colors.secondary;
  }

  togglePassword = () => {
    this.showPassword = !this.showPassword;
  }

  onFocus = () => {
    this.focused = true;
    this.props.onFocus && this.props.onFocus();
  };

  onBlur = () => {
    this.focused = false;
    this.props.onBlur && this.props.onBlur();

  };
  
  render() {
    const {
      title, 
      hint, 
      secureTextEntry, 
      value, 
      error, 
      showError, 
      name ,
      keyboardType,
      multiline,
      placeholder,
      onPress
    } = this.props;

    return (
      <View style={styles.root}>
          <ImageBackground
            style={styles.header}
            source={
              header
                ? {uri: header.path}
                : require('~/assets/images/avatar.jpeg')
            }>
            <TouchableOpacity
              onPress={() => this.showActionSheet('header')}
              style={styles.headerImg}>
              <SimpleLineIcons name="camera" size={35} color={'white'} />
            </TouchableOpacity>
          </ImageBackground>
      </View>
    );
  }
};
