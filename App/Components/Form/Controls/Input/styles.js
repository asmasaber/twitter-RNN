import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  root: {
    marginBottom: 22,
    minHeight: 50,
  },
  container: {
    flexDirection: 'row',
    borderColor: '#e6ecf0',
    borderBottomWidth: 1,
    height: 30,
  },
  title: {
    color: '#657786',
    fontSize: 14,
  },
  input: {
    height: 30,
    marginBottom: 15,
    padding: 5,
    flex: 1,
    fontSize: 18,
  },
  focused: {
    borderColor: 'rgb(26, 149, 224)',
    borderBottomWidth: 2,
  },
  errorInput: {
    borderColor: 'red',
    borderBottomWidth: 2,
  },
  focusedError: {
    borderColor: 'red',
    borderBottomWidth: 3,
  },
  error: {
    color: 'red',
    fontSize: 16,
    alignSelf: 'flex-start',
  },
  hint: {
    color: '#657786',
    fontSize: 14,
    alignSelf: 'flex-end',
  },
});
