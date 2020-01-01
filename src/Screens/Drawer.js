/* eslint-disable no-dupe-keys */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import {Navigation} from 'react-native-navigation';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Drawer extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Image
            onPress={() => this.props.navigation.navigate('Profile')}
            source={require('../assets/images/avatar.jpeg')}
            style={styles.photo}
          />
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
          <TouchableOpacity
            onPress={() =>
              Navigation.push(this.props.componentId, {
                component: {
                  name: 'navigation.playground.ProfileScreen',
                  passProps: {
                    text: 'Pushed screen',
                  },
                  options: {
                    topBar: {
                      title: {
                        text: 'Pushed screen title',
                      },
                    },
                  },
                },
              })
            }
            style={[styles.list, styles.firstList]}>
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
          <TouchableOpacity
            onPress={() => console.log('navigate')}
            style={styles.list}>
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
              <Text
                onPress={() => navigation.navigate('Profile')}
                style={styles.text}>
                {' '}
                Bookmarks{' '}
              </Text>
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
              <Text
                onPress={() => navigation.navigate('Profile')}
                style={styles.text}>
                {' '}
                Moments{' '}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.list}>
            <View>
              <Text
                onPress={() => navigation.navigate('Profile')}
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
                onPress={() => navigation.navigate('Profile')}
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

const styles = StyleSheet.create({
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
