import {StyleSheet} from 'react-native';
const NAVBAR_HEIGHT = 64;

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  fill: {
    flex: 1,
  },
  navbar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    backgroundColor: 'rgb(27, 42, 51)',
    borderBottomColor: '#dedede',
    borderBottomWidth: 0,
    height: NAVBAR_HEIGHT,
    justifyContent: 'flex-start',
    elevation: 8,
    flex: 1,
    flexDirection: 'row',
    //paddingTop: STATUS_BAR_HEIGHT,
  },
  contentContainer: {
    paddingTop: NAVBAR_HEIGHT,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
  },
  row: {
    height: 300,
    width: null,
    marginBottom: 1,
    padding: 16,
    backgroundColor: 'transparent',
  },
  rowText: {
    color: 'white',
    fontSize: 18,
  },
  avatar: {
    marginRight: 15,
  },
});
