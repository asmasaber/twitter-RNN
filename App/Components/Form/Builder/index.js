import React from 'react';
import FormState from './FormState';
import {observable, toJS} from 'mobx';
import Controls from '../Controls';

import each from 'lodash/each';

export default class Form extends React.Component {
  state = observable({
    _form: {},
    submitted: false,
    isFormValid: true,
    showErrors: false,
    isFormInitialized: false,
    setForm(data) {
      this.form = new FormState({...data});
      this.isFormInitialized = true;
    },
  });

  constructor(props) {
    super(props);
    each(Controls, (WrappedComponent, FieldName) => {
      this[FieldName] = props => {
        <WrappedComponent {...props} {...this.commenProps(props.name)} />;
      };
    });
  }

  commenProps = name => ({
    ...this.getformField(name),
    showError: this.showError,
    onChange: this.handleChange,
  });

  initializeForm = data => {
    this.state.setForm(data);
  };

  validateField = (name, value) => {
    //get field ref. from state to update it's validation
    const field = this.state.form[name];

    field.validators.some(validator => {
      field.error = '';
      field.isValid = validator.validate(value);
      if (!field.isValid) {
        field.error = validator.message;
        return true;
      }
    });
  };

  handleChange = (name, value) => {
    this.state.form[name].value = value;
    this.validateField(name, value);
  };

  showErrors = () => {
    this.state.showErrors = true;
  };

  hideErrors = () => {
    this.state.showErrors = false;
  };

  validateForm() {
    this.state.isFormValid = true;
    const form = new FormState({...toJS(this.state.form)});
    let isFormValid = true;
    for (var key in form) {
      form[key].validators.some(validator => {
        const isValid = validator.validate(form[key].value);
        if (!isValid) {
          form[key].isValid = isFormValid = false;
          form[key].error = validator.message;
          return true;
        }
      });
    }
    this.state.isFormValid = isFormValid;
    this.state.setForm(form);
  }

  getformField(name) {
    if (this.isFormInitialized) {
      return toJS(this.state.form)[name];
    }
  }

  getfieldValue(name) {
    if (this.isFormInitialized) {
      return toJS(this.state.form)[name].value;
    }
  }

  /**
   * @param {boolean} value
   */
  set formSubmitted(value) {
    this.state.submitted = value;
  }

  get isFormValid() {
    return this.state.isFormValid;
  }

  get isFormSubmitted() {
    return this.state.submitted;
  }

  get isFormInitialized() {
    return this.state.isFormInitialized;
  }

  get formValues() {
    const values = {};
    const {form} = this.state;
    for (var key in form) {
      values[key] = form[key].value;
    }
    return values;
  }

  get formFields() {
    const fields = {};
    const form = toJS(this.state.form);
    for (var key in form) {
      fields[key] = form[key];
    }
    return fields;
  }

  get showError() {
    return this.state.showErrors;
  }
}
