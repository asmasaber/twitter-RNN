import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {View, Keyboard} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';


import Input from '../Input';

import styles from './styles';
import {observable} from 'mobx';
import {observer} from 'mobx-react';

@observer
export default class DateControl extends Component {


  @observable show = false;

  onChange = (event, date) => {
    const {name} = this.props;
    if(date) {
      this.props.onChange(name, moment(date).format('DD MMMM YYYY'));
    }
  }

  get value() {
    const {value} = this.props;
    return value;
  }

  onInputFoucs = () => {
    Keyboard.dismiss();
    this.show = true
  }

  render() {
    const {name, disabled, error, placeholder, display} = this.props;
    return (
      <View>
        <View style={styles.root}>
          <Input
            disabled={disabled}
            error={error}
            name={name}
            onChange={this.update}
            onFocus={this.onInputFoucs}
            onBlur={() => this.show = false}
            placeholder={placeholder}
            value={this.value}
          />

          {this.show && 
            <DateTimePicker 
              value={new Date()} 
              onChange={this.onChange} 
              display={display}
              mode={'date'} 
            />}
        </View>
      </View>
    );
  }

}

DateControl.propTypes = {
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  label: PropTypes.string,
  maxDate: PropTypes.any,
  minDate: PropTypes.any,
  display: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  value: PropTypes.any,
};

DateControl.defaultValues = {
  label: '',
  name: '',
  value: '',
  minDate: null,
  maxDate: null,
  disabled: false,
  error: false,
  style: [],
  onChange() {},
};

DateControl.defaultProps = {
  display: 'spinner',
};
