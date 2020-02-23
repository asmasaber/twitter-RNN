import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
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
        {title && <Text style={styles.title}>{title}</Text>}
        <View style={[
          styles.container, 
          multiline ? styles.multiline : {},
          this.focused ? styles.focused: {}, 
          error && showError ? styles.errorInput : {},
          this.focused && error && showError ? styles.focusedError : {}
          ]}
        >
          <TextInput
            value={value}
            keyboardType={keyboardType}
            multiline={multiline}
            placeholder={placeholder}
            style={[
              styles.input,
              multiline ? styles.multiline : {},
            ]}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            onChangeText={text => this.props.onChange(name, text)}
            secureTextEntry={secureTextEntry && !this.showPassword}
          />
          {secureTextEntry && (
            <TouchableOpacity onPress={()=> this.togglePassword()}>
              <FontAwesome name={'eye'} size={22} color={this.iconColor}/>
            </TouchableOpacity>
          )}
        </View>
          {showError && <Text style={styles.error}>{error}</Text>}
          {hint && <Text style={styles.hint}>{hint}</Text>}
      </View>
    );
  }
};
