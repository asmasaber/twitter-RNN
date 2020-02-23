import React from 'react';
import {View, Text} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from './styles';
import {observable} from 'mobx';
import {observer} from 'mobx-react';

@observer
class BirthDate extends React.Component {
  @observable date = new Date();

  render() {
    return (
      <View>
        <Text>
          {' '}
          This is should be your date of birth, whether this account is for your
          bussiness, event, or even your cat
        </Text>
        <DateTimePicker value={this.date} mode={'date'} display="spinner" />
      </View>
    );
  }
}

export default BirthDate;
