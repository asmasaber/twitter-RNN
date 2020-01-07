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
  };

  onBlur = () => {
    this.focused = false;
  };

  render() {
    const { title, hint, secureTextEntry, value, error, showError } = this.props;
    return (
      <View style={styles.root}>
        {title && <Text style={styles.title}>{title}</Text>}
        <View style={[
          styles.container, 
          this.focused ? styles.focused: {}, 
          error && showError ? styles.errorInput : {},
          this.focused && error && showError ? styles.focusedError : {}
          ]}
        >
          <TextInput
            style={styles.input}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            {...this.props}
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
