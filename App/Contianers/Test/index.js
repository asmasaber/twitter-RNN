import React from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {observable, computed} from 'mobx';
import {observer} from 'mobx-react';

import Button from '~/Components/Form/Actions/Button';
import Link from '~/Components/Form/Actions/Link';
import Input from '~/Components/Form/Controls/Input';
import Sperator from '~/Components/Layout/Sperator';
import AuthActions from '~/Redux/Actions/Auth';
import {loadingIndicator, toast} from '~/Navigation/Utils';
import StartApp from '~/Navigation/App';
import FormBuilder from '~/Components/Form';

import styles from './styles';

@observer
class Login extends FormBuilder {
  // @observable email = '';
  // @observable password = '';

  constructor(props) {
    super(props);

    this.init({
      // Form
      form: {
        email: {
          type: this.types.string,
          // validators: [isRequired(), emailAddress()],
        },
        password: {
          type: this.types.string,
          // validators: [isRequired()],
        },
      },
    });
  }

  @computed get validForm() {
    return this.email && this.password;
  }

  // componentDidUpdate(prevProps) {
  //   const {loading, error, token} = this.props.auth;
  //   const pervLoading = prevProps.auth.loading;
  //   const pervError = prevProps.auth.error;
  //   const pervToken = prevProps.auth.token;
  //   if (pervLoading !== loading) {
  //     if (loading) {
  //       loadingIndicator.show('Logging in', 'authStach');
  //     } else {
  //       loadingIndicator.hide('authStach');
  //     }
  //   }
  //   if (error && pervError !== error) {
  //     toast.show(error);
  //   }
  //   if (token && pervToken !== token) {
  //     StartApp();
  //   }
  // }

  componentDidDisappear() {
    this.props.reset();
  }

  login = () => {
    const {email, password} = this;
    if (this.validForm) {
      this.props.login({email, password});
    }
  };

  render() {
    const {TextField} = this;

    return (
      <View style={styles.container}>
        <View style={styles.inputArea}>
          <TextField
            title="Email address, or username"
            name={'email'}
            autoFocus
          />
          <TextField title="Password" name={'password'} secureTextEntry />
          <View style={styles.center}>
            <Link
              text={'Forgotten your password?'}
              color={'secondary'}
              align={'center'}
            />
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
  login: data => dispatch(AuthActions.login(data)),
  reset: () => dispatch(AuthActions.reset()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
