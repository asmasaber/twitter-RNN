import {StyleSheet} from 'react-native';
import theme, {colors} from '../../Theme';
export default StyleSheet.create({
  ...theme,
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
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
    marginTop: 10,
    marginLeft: 30,
  },
  title: {
    marginTop: 10,
    marginLeft: 10,
  },
  titleMargin: {
    margin: 50,
    marginBottom: 20,
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
    paddingTop: 10,
    // paddingBottom: 15,
  },
  checkBox: {
    justifyContent: 'center',
    alignSelf: 'center',
    color: colors.primary,
  },
  center: {
    justifyContent: 'center',
  },
  trems: {
    width: '94%',
    color: colors.secondaryText,
  },
  termsHint: {
    padding: 40,
    color: colors.secondaryText,
  },
  button: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 15,
    margin: 10,
    backgroundColor: colors.primary,
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
    backgroundColor: colors.primary,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#1da1f2',
    alignSelf: 'flex-end',
    opacity: 0.6,
  },
  link: {
    color: colors.secondaryText,
    textAlign: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
