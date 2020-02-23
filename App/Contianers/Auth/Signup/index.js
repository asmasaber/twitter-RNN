import React from 'react';
import {View, Text} from 'react-native';
import {Navigation} from 'react-native-navigation';
import Button from '~/Components/Form/Actions/Button';
import Sperator from '~/Components/Layout/Sperator';

import FormBuilder from '~/Components/Form';
import Form from '~/Components/Form/Layout/Form';

import {isRequired, emailAddress, matches} from '~/Services/Validators';

import styles from './styles';
import {navigation} from '~/Navigation/Utils';

class Signup extends FormBuilder {
  constructor(props) {
    super(props);

    this.init({
      // Form
      form: {
        email: {
          type: this.types.string,
          validators: [isRequired(), emailAddress()],
        },
        name: {
          type: this.types.string,
          validators: [isRequired()],
        },
        password: {
          type: this.types.string,
          validators: [isRequired()],
        },
        rePassword: {
          type: this.types.string,
          validators: [matches(() => this.formValues.password)],
        },
      },
    });
  }

  componentDidMount() {
    super.componentDidMount();
    Navigation.mergeOptions(this.props.componentId, {
      topBar: {
        rightButtons: [],
      },
    });
  }

  onSubmit = () => {
    if (this.isFormValid) {
      navigation.push(this.props.componentId, 'Auth.Terms');
    } else {
      this.showFormErrors();
    }
  };

  render() {
    const {TextField} = this;

    return (
      <Form contentStyle={styles.container}>
        <Text style={[styles.headerMargin, styles.text, styles.h1]}>
          Create Your account
        </Text>
        <View style={[styles.inputArea, styles.center]}>
          <TextField placeholder="Name" name="name" autoFocus />
          <TextField placeholder="Email" name="email" />
          <TextField placeholder="Password" name="password" secureTextEntry />
          <TextField
            placeholder="Repeat Password"
            name="rePassword"
            secureTextEntry
          />
        </View>
        <Sperator />
        <Button
          text="Next"
          onClick={this.onSubmit}
          disabled={!this.isFormValid}
        />
      </Form>
    );
  }
}

export default Signup;
