import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  ovelLay: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    opacity: 0.6,
    justifyContent: 'center',
    alignItems: 'center',

    position: 'absolute',
    top: 0,
  },
  container: {
    backgroundColor: 'white',
    opacity: 1,
    flexDirection: 'row',
    alignItems: 'center',
    width: 280,
    height: 100,
    paddingLeft: '10%',
  },
  loadingText: {
    marginLeft: 20,
  },
});
