import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Text, Picker} from 'react-native';

import styles from './styles';

export default class SelectControl extends Component {
  onChange(value) {
    const {name} = this.props;
    this.props.onChange(name, value);
  }

  render() {
    const {title, value, options} = this.props;
    console.log('onChange', value);

    return (
      <View style={styles.root}>
        {title && <Text style={styles.title}>{title}</Text>}
        <View style={[styles.container]}>
          <Picker
            style={styles.input}
            itemStyle={styles.item}
            selectedValue={value}
            onValueChange={id => this.onChange(id)}
            mode="dropdown">
            {options.map((item, index) => (
              <Picker.Item
                key={index}
                value={item.id}
                label={`${item.id}-${index}`}
              />
            ))}
          </Picker>
        </View>
      </View>
    );
  }
}

SelectControl.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.any,
  mode: PropTypes.string,
  error: PropTypes.bool,
  readOnly: PropTypes.bool,
  helperText: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  beforeInput: PropTypes.any,
  afterInput: PropTypes.any,
  lookup: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

SelectControl.defaultValues = {
  label: '',
  name: '',
  value: '',
  helperText: '',
  mode: 'dialog',
  lookup: [],
  readOnly: false,
  error: false,
  disabled: false,
  style: [],
  onChange() {},
};
