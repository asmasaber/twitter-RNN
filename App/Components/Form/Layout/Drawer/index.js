import React from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import {Navigation} from 'react-native-navigation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {navigation} from '~/Navigation/Utils';

import styles from './styles';

export default class Drawer extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <TouchableOpacity
            onPress={() =>
              navigation.push(
                this.props.componentId,
                'navigation.twitter.ProfileScreen',
              )
            }>
            <Image
              source={require('~/assets/images/avatar.jpeg')}
              style={styles.photo}
            />
          </TouchableOpacity>
          <Text style={styles.userName}> Asmaa </Text>
          <Text style={styles.userHandle}>@asma </Text>

          <View>
            <Text style={styles.followingCount}>
              {'970 '}
              <Text style={styles.followingText}>Following</Text>
            </Text>
            <Text style={styles.followersCount}>
              {'1,325 '}
              <Text style={styles.followersText}>Followers</Text>
            </Text>
          </View>
        </View>
        <ScrollView>
          <TouchableOpacity style={[styles.list, styles.firstList]}>
            <View>
              <FontAwesome
                style={styles.icon}
                name="user-o"
                size={20}
                color="rgb(136, 153, 166)"
              />
              <Text style={styles.text}> Profile </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.list}>
            <View>
              <MaterialCommunityIcons
                style={styles.icon}
                name="file-document-box-outline"
                size={20}
                color="rgb(136, 153, 166)"
              />
              <Text style={styles.text}> Lists </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.list}>
            <View>
              <FontAwesome
                style={styles.icon}
                name="bookmark-o"
                size={20}
                color="rgb(136, 153, 166)"
              />
              <Text style={styles.text}> Bookmarks </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.list,
              {
                borderBottomWidth: 0.3,
                borderBottomColor: 'black',
              },
            ]}>
            <View>
              <MaterialCommunityIcons
                style={styles.icon}
                name="flash-outline"
                size={20}
                color="rgb(136, 153, 166)"
              />
              <Text style={styles.text}> Moments </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.list}>
            <View>
              <Text
                style={[
                  styles.text,
                  {
                    left: 20,
                  },
                ]}>
                Settings and privacy
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.list}>
            <View>
              <Text
                style={[
                  styles.text,
                  {
                    left: 20,
                  },
                ]}>
                Help Centre
              </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
