import {StyleSheet} from 'react-native';
import Theme, {Colors} from '~/Theme';

export default StyleSheet.create({
  root: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonWrapper: {
    flex: 1,
  },
  buttonText: {
    color: Colors.primary,
    padding: 15,
    ...Theme.h6,
  },
  icon: {
    color: Colors.primary,
    padding: 2,
    ...Theme.h4,
  },
});
