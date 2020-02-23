import {StyleSheet} from 'react-native';
import {Colors} from '~/Theme';

export default StyleSheet.create({
  rightSection: {
    flexDirection: 'row',
  },
  menuIcon: {
    color: Colors.primary,
    fontSize: 28,
    paddingTop: 7,
    backgroundColor: 'white',
  },
  button: {
    color: Colors.primary,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingRight: 15,
    backgroundColor: 'white',
  },
  disabled: {
    color: Colors.secondaryText,
  },
});
