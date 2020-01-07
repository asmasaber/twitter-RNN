import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  list: {
    padding: 10,
    height: 60,
    borderColor: 'red',
    borderWidth: 0,
  },
  text: {
    position: 'absolute',
    left: '18%',
    top: 10,
    fontSize: 16,
  },
  top: {
    paddingBottom: 40,
    paddingLeft: 30,
    marginBottom: 10,
  },
  photo: {
    width: 50,
    height: 50,
    borderRadius: 30,
    marginTop: 10,
  },
  userName: {
    marginTop: 15,
    fontWeight: 'bold',
  },
  userHandle: {
    color: 'rgb(136, 153, 166)',
    fontWeight: '300',
  },
  followingCount: {
    position: 'absolute',
    left: 0,
    top: 10,
    fontWeight: 'bold',
  },
  followingText: {
    color: 'rgb(136, 153, 166)',
    fontWeight: '300',
  },
  followersCount: {
    position: 'absolute',
    left: 100,
    top: 10,
    fontWeight: 'bold',
  },
  followersText: {
    color: 'rgb(136, 153, 166)',
    fontWeight: '300',
  },
  firstList: {
    marginTop: 0,
    borderTopWidth: 0.3,
    borderTopColor: 'black',
    height: 60,
    borderTopWidth: 0.3,
    borderTopColor: 'black',
  },
  icon: {
    position: 'absolute',
    left: 20,
    top: 10,
  },
});
