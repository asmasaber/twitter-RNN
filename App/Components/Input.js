import React, {useState} from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

export default props => {
  const [focused, setFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const onFocus = () => {
    setFocused(true);
  };

  const onBlur = () => {
    setFocused(false);
  };

  return (
    <View>
      {props.title && <Text style={styles.title}>{props.title}</Text>}
      <View style={styles.container}>
        <TextInput
          style={focused ? [styles.input, styles.focused] : styles.input}
          onFocus={onFocus}
          onBlur={onBlur}
          {...props}
        />
        {/* <If condition={props.secureTextEntry}>
          <Entypo name={'eye-with-line'} size={14} />
        </If> */}
      </View>
      {props.hint && <Text style={styles.hint}>{props.hint}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  title: {
    color: '#657786',
    fontSize: 14,
  },
  input: {
    borderColor: '#e6ecf0',
    height: 40,
    borderBottomWidth: 1,
    marginBottom: 15,
    padding: 5,
    flex: 1,
    fontSize: 18,
  },
  focused: {
    borderColor: 'rgb(26, 149, 224)',
    borderBottomWidth: 2,
  },
  hint: {
    color: '#657786',
    fontSize: 14,
    alignSelf: 'flex-end',
  },
});
