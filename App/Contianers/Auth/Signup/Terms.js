import React from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import {Navigation} from 'react-native-navigation';

import {loadingIndicator, toast} from '~/Navigation/Utils';

import Sperator from '~/Components/Form/Layout/Sperator';
import Checkbox from '~/Components/Form/Controls/Checkbox';
import Button from '~/Components/Form/Actions/Button';
import Link from '~/Components/Form/Actions/Link';
import AuthActions from '~/Redux/Actions/Auth';

import StartAuth from '~/Navigation/Auth';

import styles from './styles';

@observer
class Terms extends React.Component {
  @observable checked = true;

  constructor(props) {
    super(props);
    Navigation.mergeOptions(this.props.componentId, {
      topBar: {
        rightButtons: [
        ],
      },
    });
    Navigation.events().bindComponent(this);
  }
  componentDidUpdate(prevProps) {
    const {loading, error} = this.props.auth;
    const pervLoading = prevProps.auth.loading;
    const pervError = prevProps.auth.error;

    console.log('componentDidUpdate', pervLoading, loading);
    if (pervLoading !== loading) {
      if (loading) {
        loadingIndicator.show('Sign up ');
      } else {
        console.log('hiiiide');
        loadingIndicator.hide();

        if (error && pervError !== error) {
          toast.show(error);
        } else {
          StartAuth();
        }
      }
    }
  }

  componentDidDisappear() {
    this.props.reset();
  }

  signup = () => {
    const {data} = this.props;
    this.props.signup({...data, acceptTrems: this.checked});
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.headerMargin, styles.text, styles.h1]}>
          Customize Your experience
        </Text>
        <Text style={[styles.titleMargin, styles.text, styles.h4]}>
          Track where you see Twitter content across the web
        </Text>
        <View style={styles.inputArea}>
          <View style={styles.rowInputArea}>
            <Text style={[styles.text, styles.trems]}>
              Twitter uses this data to personalize your experience. This web
              browsing history will never be stored with your name, email, or
              phone number.
            </Text>
            <Checkbox
              style={styles.checkBox}
              value={this.checked}
              onValueChange={value => (this.checked = value)}
            />
          </View>
          <Text style={[styles.hint, styles.termsHint]}>
            For more details about these settings, visit the{' '}
            <Link text={' Help Center. '} />
          </Text>
        </View>
        <Sperator />
        <Button text={'Next'} onClick={this.signup} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
  signup: data => dispatch(AuthActions.signup(data)),
  reset: () => dispatch(AuthActions.reset()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Terms);
