import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';


import {observable} from 'mobx';
import {observer} from 'mobx-react';

import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import {Colors} from '~/Theme';

import styles from './styles';


@observer
export default class Tweet extends React.Component {
  @observable feed = this.props.item;

  toggleValue = (key, relatedKey) => {
    this.feed[key] = !this.feed[key];
    this.feed[relatedKey] =  this.feed[key] ? this.feed[relatedKey] + 1 : this.feed[relatedKey] - 1 ;
  }

  render() {
    const {feed} = this;
    return (
      <TouchableOpacity>
        <View style={styles.box}>
          <TouchableOpacity style={styles.photoContainer}>
            <Image
              source={require('~/assets/images/avatar.jpeg')}
              style={styles.photo}
            />
          </TouchableOpacity>
          <View style={styles.body}>
            <Text style={styles.userName}>
              {feed.user}
              <Text style={styles.userHandleAndTime}>
                {` ${feed.userHandle} · ${feed.time}`}
              </Text>
            </Text>

            <View style={styles.tweetTextContainer}>
              <Text style={styles.tweetText}>{feed.content}</Text>
              {feed.hasPhoto && <Image style={styles.tweetPhoto} source={require('~/assets/images/avatar.jpeg')} />}
            </View>

            <View style={styles.tweetActionsContainer}>
              <TouchableOpacity style={styles.commentButton}>
                <EvilIcons
                  name={'comment'}
                  style={styles.commentButtonIcon}
                  size={25}
                  color={Colors.gray}
                />
                <Text style={styles.commentsCount}>{feed.comments}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.toggleValue('retweeted', 'retweets')}
                style={styles.retweetButton}>
                <EvilIcons
                  name={'retweet'}
                  size={25}
                  color={
                    feed.retweeted ? Colors.green : Colors.gray
                  }
                />
                <Text
                  style={[
                    styles.retweet,
                    feed.retweeted ? styles.retweeted : {}
                  ]}>
                  {feed.retweets}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
               onPress={() => this.toggleValue('liked', 'likes')}
                style={styles.likeButton}>
                {feed.liked ? (
                  <Entypo
                    name={'heart'}
                    size={18}
                    style={{marginLeft: 4}}
                    color={Colors.red}
                  />
                ) : (
                  <EvilIcons
                    name={'heart'}
                    size={25}
                    color={Colors.gray}
                  />
                )}
                <Text
                  style={[
                    styles.like,
                    feed.liked ? styles.liked : {},
                  ]}>
                  {feed.likes}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.shareButton}>
                <SimpleLineIcons
                  name={'share'}
                  size={16}
                  color={Colors.gray}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
