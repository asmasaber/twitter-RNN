import React from 'react';
import {Navigation} from 'react-native-navigation';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

export default class Title extends React.Component {
  openSideMenu = () => {
    Navigation.mergeOptions('Navigation.SideMenu', {
      sideMenu: {
        left: {
          visible: true,
        },
      },
    });
  };
  render() {
    return (
      <View style={styles.root}>
        <TouchableOpacity onPress={this.openSideMenu}>
          <Image
            source={require('~/assets/images/avatar.jpeg')}
            style={styles.photo}
          />
        </TouchableOpacity>
        <Text style={styles.title}> Home </Text>
      </View>
    );
  }
}
