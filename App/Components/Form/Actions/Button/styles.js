import {StyleSheet} from 'react-native';
import {Colors} from '~/Theme';
export default StyleSheet.create({
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
  disabled: {
    borderColor: '#1da1f2',
    alignSelf: 'flex-end',
    opacity: 0.6,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
