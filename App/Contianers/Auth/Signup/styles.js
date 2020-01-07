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
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerMargin: {
    marginTop: 20,
    marginLeft: 35,
  },
  title: {
    marginTop: 10,
    marginLeft: 10,
  },
  titleMargin: {
    margin: 50,
    marginBottom: 10,
  },
  inputArea: {
    padding: 20,
    flexDirection: 'column',
    flex: 1,
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
});
