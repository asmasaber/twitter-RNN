import {StyleSheet} from 'react-native';
import theme, {Colors} from '../../../Theme';
export default StyleSheet.create({
  ...theme,
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
  },
  logo: {
    alignSelf: 'center',
    color: 'rgb(242, 239, 239)',
  },
});
