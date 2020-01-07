import {StyleSheet} from 'react-native';
import {Colors} from '~/Theme';
export default StyleSheet.create({
  center: {
    alignSelf: 'center',
  },
  rigth: {
    alignSelf: 'flex-end',
  },
  left: {
    alignSelf: 'flex-start',
  },
  primary: {
    color: Colors.primary,
  },
  secondary: {
    color: Colors.secondaryText,
  },
});
