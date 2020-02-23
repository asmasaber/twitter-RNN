import React from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import Entypo from 'react-native-vector-icons/Entypo';

import StartAuth from '~/Navigation/Auth';
import StartApp from '~/Navigation/App';
import AuthActions from '~/Redux/Actions/Auth';

import styles from './styles';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import {Navigation} from 'react-native-navigation';

@observer
class Loading extends React.Component {
  @observable token = null;

  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
  }

  componentDidMount() {
    this.props.getToken();
  }

  componentDidUpdate(prevProps) {
    const loading = this.props.loading;
    const token = this.props.auth.token;
    const prevLoading = prevProps.auth.loading;

    if (!loading && loading !== prevLoading) {
      if (token) {
        StartApp();
      } else {
        StartAuth();
      }
    }
  }

  render() {
    return (
      <View style={styles.loadingContainer}>
        <Entypo name={'twitter'} size={70} style={styles.logo} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
  getToken: () => dispatch(AuthActions.getToken()),
  reset: () => dispatch(AuthActions.reset()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Loading);
