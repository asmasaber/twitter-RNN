import {StyleSheet} from 'react-native';
import theme from '~/Theme';
export default StyleSheet.create({
  ...theme,
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerMargin: {
    marginTop: 10,
    marginLeft: 18,
  },
  inputArea: {
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'center',

    flex: 1,
  },
  center: {
    alignSelf: 'center',
  },
});
