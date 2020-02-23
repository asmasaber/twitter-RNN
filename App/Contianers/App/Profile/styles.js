import {StyleSheet} from 'react-native';
import theme, {Colors} from '../../../Theme';
export default StyleSheet.create({
  ...theme,

  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flex: 1,
    height: 140,
    overlayColor: 'black',
  },
  headerImg: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputArea: {
    marginTop: 10,
    padding: 20,
    flexDirection: 'column',
    flex: 4,
  },
  rowInputArea: {
    flexDirection: 'row',
    paddingRight: 40,
    paddingLeft: 40,
    // paddingTop: 10,
    // paddingBottom: 15,
  },
  checkBox: {
    justifyContent: 'center',
    alignSelf: 'center',
    color: Colors.primary,
  },
  center: {
    justifyContent: 'center',
  },
  trems: {
    width: '98%',
    color: Colors.secondaryText,
    fontSize: 15,
  },
  termsHint: {
    padding: 40,
    color: Colors.secondaryText,
  },
  button: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 15,
    margin: 10,
    backgroundColor: Colors.primary,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#1da1f2',
    alignSelf: 'flex-end',
  },
  disabledButton: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 15,
    margin: 10,
    backgroundColor: Colors.primary,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#1da1f2',
    alignSelf: 'flex-end',
    opacity: 0.6,
  },

  pp: {
    width: 85,
    height: 85,
    borderRadius: 75,
    overflow: 'hidden',
    borderWidth: 4,
    borderColor: 'white',
    marginTop: -30,
    marginLeft: 20,
  },
});
