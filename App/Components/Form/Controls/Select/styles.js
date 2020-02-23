import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  root: {
    marginBottom: 22,
    minHeight: 50,
  },
  container: {
    borderColor: '#e6ecf0',
    borderBottomWidth: 1,
    height: 30,
    marginTop: 3,
  },
  title: {
    color: '#657786',
    fontSize: 14,
  },
  input: {
    flex: 1,
    fontSize: 18,
    backgroundColor: 'white',
    marginRight: -40,
  },
  item: {
    marginTop: 50,
    backgroundColor: 'red',
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
