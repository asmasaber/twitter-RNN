import React from 'react';
import {View, Text} from 'react-native';

import Button from '~/Components/Form/Actions/Button';
import Link from '~/Components/Form/Actions/Link';
import Sperator from '~/Components/Layout/Sperator';
import {toast} from '~/Navigation/Utils';
import StartApp from '~/Navigation/App';

import FormBuilder from '~/Components/Form';
import Form from '~/Components/Form/Layout/Form';
import asEntity from '~/Hocs/asEntity';

import {isRequired} from '~/Services/Validators';

import styles from './styles';

class Login extends FormBuilder {
  constructor(props) {
    super(props);

    this.init({
      // Form
      form: {
        email: {
          type: this.types.string,
          validators: [isRequired()],
        },
        password: {
          type: this.types.string,
          validators: [isRequired()],
        },
      },
    });
  }

  entityDidPosted(data) {
    StartApp();
  }

  entityDidCatch(data) {
    toast.show(data);
  }

  onSubmit = () => {
    if (this.isFormValid) {
      this.props.entityStore.post(this.formValues);
    } else {
      this.showFormErrors();
    }
  };

  render() {
    const {TextField, props} = this;
    const {loading} = props.entityStore;

    return (
      <Form loading={loading} contentStyle={styles.container}>
        <Text style={[styles.headerMargin, styles.text, styles.h3]}>
          Log in to Twitter.
        </Text>
        <View style={styles.inputArea}>
          <TextField
            title="Email address, or username"
            name="email"
            autoFocus
          />
          <TextField title="Password" name={'password'} secureTextEntry />
          <View style={styles.center}>
            <Link
              text="Forgotten your password?"
              color="secondary"
              align="center"
            />
          </View>
        </View>
        <Sperator />
        <Button
          text="Log in"
          onClick={this.onSubmit}
          disabled={!this.isFormValid}
        />
      </Form>
    );
  }
}

export default asEntity({storeId: 'Login'})(Login);
