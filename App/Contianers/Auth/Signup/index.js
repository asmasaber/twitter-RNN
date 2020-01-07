import React from 'react';
import {View, Text} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {observable, computed, flow} from 'mobx';
import {observer} from 'mobx-react';
import {navigation} from '~/Navigation/Utils';

import Form from '~/Components/Form'

import Button from '~/Components/Form/Actions/Button';
import Sperator from '~/Components/Form/Layout/Sperator';
import Input from '~/Components/Form/Controls/Input';

import AuthActions from '~/Redux/Actions/Auth';
import startApp from '~/Navigation/App';

import {isRequied, maxLength, password , email, matches} from "~/Services/Validators";

import map from 'lodash/map';
import filter from 'lodash/filter';

import styles from './styles';

@observer
export default class Signup extends React.Component {
  @observable isFormValid = true;
  @observable form = {
    email: {
      value: '',
      validators: [isRequied(), email()],
      isValid: true,
      error: '',
      showError: false,
    },
    name: {
      value: '',
      validators: [isRequied(), maxLength(50)],
      isValid: true,
      error: '',
      showError: false,
    },
    password: {
      value: '',
      validators: [isRequied(), password()],
      isValid: true,
      error: '',
      showError: false,
    },
    rePassword: {
      value: '',
      validators: [isRequied(), matches(() => this.form.password.value)],// matches(this.form.password.value)],
      isValid: true,
      error: '',
      showError: false,
    },
  }
   
  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
  }

  componentDidMount() {
    Navigation.mergeOptions(this.props.componentId, {
      topBar: {
        rightButtons: [
        ],
      },
    });
  }

  componentDidAppear() {
    console.log("validateForm")
    this.validateForm();
  }

  onFieldChange = (name, value) => {
    this.form[name].value = value;
    this.validateForm();
    this.showFieldError(name);
  }

  showFieldError = name => {
    console.log("name", name, this.form[name].isValid)
    if(!this.form[name].isValid) {
      this.form[name].showError = true;
    }
  }
  validateForm = () => {
    this.isFormValid = true;
    map(this.form,  (field, key) =>  {
      this.validateField(key);
    });
  }

  validateField = name => {
    map(this.form, (field, key) =>  {
      if(key === name) {
        map(field.validators, validator => {
          console.log("validater", validator)
          if(!validator.validate(field.value)) {
            this.form[key].isValid = this.isFormValid = false;
            this.form[key].error = validator.message;
          } else {
            this.form[key].isValid = true;
            this.form[key].error = '';
          }
        });
      }
    });
  }

  @computed get formValues() {
    const values = {};
    map(this.form , (field, key) =>  {
      values[key] = field.value;
    });
    return values;
  }

  showFormErrors = () => {
    map(this.form, (field, key) => {
      if(!field.isValid)
        this.form[key].showError = true;
    });
  }

  signup = () => {
    this.validateForm();
    if (this.isFormValid) {
      console.log(this.formValues);
      navigation.push(this.props.componentId, 'navigation.twitter.SignupTermsScreen',{ data: this.formValues});
    } else {
      this.showFormErrors();
    }
  }

  render() {

    return (
      <View style={styles.container}>
        <Text style={[styles.headerMargin, styles.text, styles.h1]}>
          Create Your account
        </Text>
        <View style={[styles.inputArea, styles.center]}>
          <Input
            placeholder="Name"
            onChangeText={value => this.onFieldChange('name', value)}
            value={this.form.name.value}
            error={this.form.name.error}
            showError={this.form.name.showError}
            hint="50"
            autoFocus
          />

          <Input
            placeholder="Email"
            onChangeText={value => this.onFieldChange('email', value)}
            value={this.form.email.value}
            error={this.form.email.error}
            showError={this.form.email.showError}
          />

          <Input
            placeholder="Password"
            onChangeText={value => this.onFieldChange('password', value)}
            value={this.form.password.value}
            error={this.form.password.error}
            showError={this.form.password.showError}
            secureTextEntry
          />

          <Input
            placeholder="Repeat Password"
            onChangeText={value => this.onFieldChange('rePassword', value)}
            value={this.form.rePassword.value}
            error={this.form.rePassword.error}
            showError={this.form.rePassword.showError}
            secureTextEntry
          />
         
        </View>
        <Sperator />
        
        <Button text={'Next'} onClick={() => this.signup()} disabled={!this.isFormValid}/>

      </View>
    );
  }
}
