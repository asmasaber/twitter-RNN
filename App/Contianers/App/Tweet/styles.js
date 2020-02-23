import {StyleSheet} from 'react-native';
import Theme, {Colors} from '~/Theme';

export default StyleSheet.create({
  box: {
    flex: 1,
    borderBottomColor: Colors.secondary,
    borderBottomWidth: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 6,
  },
  container: {
    flexDirection: 'row',
    flex: 1,
    borderBottomColor: Colors.secondary,
    borderBottomWidth: 1,
  },
  photoContainer: {
    minWidth: 70,
    alignItems: 'center',
    padding: 10,
  },
  body: {
    flex: 1,
    flexDirection: 'column',
  },
  photo: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  info: {
    flexDirection: 'column',
  },
  userDetails: {
    // height: 35,
  },
  userName: {
    ...Theme.h5,
  },

  userHandleAndTime: {
    color: 'rgb(136, 153, 166)',
    fontSize: 14,
    fontWeight: 'normal',
  },
  tweetActionsContainer: {
    borderColor: 'blue',
    borderWidth: 0,
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 5,
  },
  tweetText: {
    fontSize: 16,
  },
  tweetPhoto: {
    width: 300,
    height: 200,
    marginTop: 10,
    borderRadius: 12,
  },

  commentButton: {
    paddingLeft: 0,
    flex: 0.25,
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: 'red',
    borderWidth: 0,
  },
  comment: {
    margin: 0,
    marginLeft: -4,
    borderColor: 'red',
    borderWidth: 0,
  },
  commentsCount: {
    position: 'absolute',
    left: 27,
    color: 'rgb(136, 153, 166)',
    marginLeft: -4,
  },
  retweetButton: {
    padding: 5,
    flex: 0.25,
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: 'red',
    borderWidth: 0,
  },
  retweet: {
    position: 'absolute',
    left: 27,
    marginLeft: 3,
    color: Colors.gray,
    fontWeight: '300',
  },
  retweeted: {
    color: Colors.green,
    fontWeight: 'bold',
  },
  likeButton: {
    padding: 5,
    flex: 0.25,
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: 'red',
    borderWidth: 0,
  },
  like: {
    position: 'absolute',
    left: 27,
    marginLeft: 3,
    color: Colors.gray,
    fontWeight: '300',
  },
  liked: {
    color: Colors.red,
    fontWeight: 'bold',
  },
  shareButton: {
    padding: 5,
    flex: 0.25,
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: 'red',
    borderWidth: 0,
  },
});
