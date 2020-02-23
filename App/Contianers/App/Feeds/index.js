import React, {Component} from 'react';
import {FlatList, View} from 'react-native';

import {observable} from 'mobx';
import {observer} from 'mobx-react';

import asEntity from '~/Hocs/asEntity';

import Tweet from '../Tweet';

@observer
class Feeds extends Component {
  @observable feeds = [];

  componentDidMount() {
    this.get();
  }

  get = () => {
    this.props.entityStore.get({pageSize: 20});
  };

  entityDidReceived(data) {
    this.feeds = [...data];
  }

  render() {
    const {loading} = this.props.entityStore;

    return (
      <View>
        <FlatList
          data={this.feeds}
          keyExtractor={item => `${item.userHandle}`}
          renderItem={({item}) => <Tweet item={item} />}
          onRefresh={this.get}
          refreshing={!!loading}
        />
      </View>
    );
  }
}

export default asEntity({storeId: 'Feeds'})(Feeds);
