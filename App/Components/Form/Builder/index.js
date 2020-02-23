/**
 * **************************************
 * This Class is created to manage the form state
 * It will build the model and recursivly update it
 * With every change.
 * This file contain 2 type of methods
 * Core/Private methods AND Helpers.
 * Please DO NOT edit core section.
 * **************************************
 */
import React from 'react';
import each from 'lodash/each';
import reduce from 'lodash/reduce';
import set from 'lodash/set';
import get from 'lodash/get';
import find from 'lodash/find';
import isUndefined from 'lodash/isUndefined';
import isNull from 'lodash/isNull';
import pickBy from 'lodash/pickBy';

import TextControl from '~/Components/Form/Controls/Input';
import SelectControl from '~/Components/Form/Controls/Select';
import DateControl from '~/Components/Form/Controls/DatePicker';

import Types from './Types';
import FormState from './FormState';
import FieldState from './FieldState';

const blackhole = () => {};

const FORM_KEY = 'form';
const ENABLE_ERROR_MESSAGE_KEY = 'enableFormErrorMessage';
const ERROR_MESSAGE_KEY = 'formErrorMessage';

class Builder extends React.Component {
  constructor(props) {
    super(props);

    this.FieldState = FieldState;
    this.types = Types;
    this._listeners = {};
  }

  componentDidMount() {
    this.validateForm();
  }

  init({form, ...restState}) {
    // eslint-disable-next-line react/no-direct-mutation-state
    this.state = {
      ...restState,
      form: new FormState(form),
    };

    this._initComponents();
  }

  /**
   ***********************************************
   * Helpers
   * *********************************************
   */
  showFormErrors(callback) {
    this.stateUpdater({
      fieldUpdater: () => ({
        showErrors: true,
      }),
      stateUpdaters: [
        () => ({
          [ENABLE_ERROR_MESSAGE_KEY]: true,
        }),

        state => this._getFormGlobalErrorMessageState(state),
      ],
      callback,
    });
  }

  hideFormErrors(callback) {
    this.stateUpdater({
      fieldUpdater: () => ({
        showErrors: false,
      }),
      stateUpdaters: [
        () => ({
          [ENABLE_ERROR_MESSAGE_KEY]: false,
        }),

        state => this._getFormGlobalErrorMessageState(state),
      ],
      callback,
    });
  }

  updateFormValues(form = {}, callback = blackhole) {
    const newFormState = reduce(
      this.formState,
      (fieldsState, field, name) => {
        if (name in form === false) {
          return fieldsState;
        }

        const value = isNull(form[name])
          ? this.formValues[name]
          : field.type(form[name]);

        return set(fieldsState, name, new FieldState({name, ...field, value}));
      },
      {},
    );

    this.setState(
      {
        [FORM_KEY]: {
          ...this.formState,
          ...newFormState,
        },
      },
      () => {
        this.validateForm(callback);
      },
    );
  }

  addFormFields(fields, callback = blackhole) {
    const newFieldsState = reduce(
      fields,
      (fieldsState, field, name) =>
        set(fieldsState, name, new FieldState({name, ...field})),
      {},
    );

    this.setState(
      {
        [FORM_KEY]: {
          ...this.formState,
          ...newFieldsState,
        },
      },
      () => {
        this.validateForm();
        callback();
      },
    );
  }

  removeFormFields = (fields = [], callback = blackhole) => {
    const newFormState = pickBy(
      this.formState,
      (field, name) => fields.indexOf(name) === -1,
    );

    this.setState(
      {
        [FORM_KEY]: newFormState,
      },
      () => {
        this.validateForm();
        callback();
      },
    );
  };

  /**
   ***********************************************
   * Core/Private Methods
   * *********************************************
   */
  stateUpdater({fieldUpdater, stateUpdaters, callback}) {
    callback = callback || blackhole;
    fieldUpdater = fieldUpdater || blackhole;
    stateUpdaters = stateUpdaters || [];

    const newFormState = reduce(
      this.formState,
      (formState, field, name) =>
        set(formState, name, this.getUpdatedFieldState(name, fieldUpdater)),
      {},
    );

    const newState = reduce(
      stateUpdaters,
      (state, updater) => ({
        ...state,
        ...updater(state),
      }),
      {
        ...this.state,
        form: newFormState,
      },
    );

    this.setState(newState, callback);
  }

  validateForm(callback = blackhole) {
    this.stateUpdater({
      callback,
      fieldUpdater: (name, value) => ({
        errors: this.getFieldErrors(name, value),
      }),
    });
  }

  getFieldState(name) {
    return get(this.formState, name, null);
  }

  getUpdatedFieldState(name, fieldUpdater) {
    const fieldState = this.getFieldState(name);

    return {
      ...fieldState,
      ...fieldUpdater(name, fieldState.value),
    };
  }

  getFieldErrors(name, value) {
    const field = this.getFieldState(name);
    const {validators} = field;
    const errors = [];

    if (!field.validators) {
      return errors;
    }

    for (let index = 0, len = validators.length; index < len; index++) {
      const validationResult = validators[index].validate(
        value,
        field,
        this.formState,
      );

      if (validationResult.valid === false) {
        errors.push(validationResult);
      }
    }

    return errors;
  }

  getFieldHasError(name) {
    return Boolean(
      this.getFieldState(name).showErrors &&
        this.getFieldState(name).errors.length,
    );
  }

  _initComponents() {
    const FieldsComponents = {
      TextField: TextControl,
      SelectField: SelectControl,
      DateField: DateControl,
    };

    // Fields Components
    each(FieldsComponents, (WrappedComponent, FieldName) => {
      this[FieldName] = props => {
        if (this.getFieldState(props.name)) {
          const commonProps = this._makeCommonFieldProps(props);

          return <WrappedComponent {...props} {...commonProps} />;
        }
        return null;
      };
    });
  }

  _makeCommonFieldProps(props) {
    let value = this._getFieldKeyValue(props.name, 'value');

    if (isUndefined(value) || isNull(value)) {
      value = '';
    }

    return {
      label: props.label,
      value,
      required: this._getFieldIsRequired(props.name),
      error: this.getFieldHasError(props.name),
      helperText: this._getFieldHelperMessage(props.name, props.helperText),
      onChange: this._onFieldChange(props.onChange),
    };
  }

  _getFieldKeyValue(name, key) {
    return this.getFieldState(name)[key];
  }

  _getFieldIsRequired(name) {
    return Boolean(
      find(this.getFieldState(name).validators, v => v.key === 'REQUIRED'),
    );
  }

  _getFieldHelperMessage(name, helperMessage = '') {
    if (this.getFieldHasError(name)) {
      return get(this.getFieldState(name), 'errors.0.message');
    }

    return helperMessage;
  }

  _getFormGlobalErrorMessageState(state) {
    const isFormValid = this._isFormValid(state[FORM_KEY]);

    let errorMessageValue = false;

    if (isFormValid) {
      errorMessageValue = false;

      // show error message if form submitted
    } else if (state[ENABLE_ERROR_MESSAGE_KEY]) {
      errorMessageValue = 'Error !!';

      // form is invalid BUT 'enable' is false
    } else {
      errorMessageValue = false;
    }

    return {
      [ERROR_MESSAGE_KEY]: errorMessageValue,
    };
  }

  _onFieldChange = (callback = blackhole) => (name, value, ...restParams) => {
    const field = this.getFieldState(name);
    const newFormState = set(this.state[FORM_KEY], name, {
      ...field,
      errors: this.getFieldErrors(name, field.type(value)),
      value: field.type(value),
    });

    let newState = {
      ...this.state,
      form: newFormState,
    };

    newState = {
      ...newState,
      ...this._getFormGlobalErrorMessageState(newState),
    };

    this.setState(newState, () => {
      this.notify('field-changed', name, value);
      callback(this.getFieldState(name), ...restParams);
    });
  };

  _isFormValid(formState) {
    return reduce(
      formState,
      (valid, field) => valid && field.errors.length === 0,
      true,
    );
  }

  _broadcastFormStatusChange() {
    return setTimeout(() => {
      if (this.isFormValid) {
        this.notify('formValid');
      } else {
        this.notify('formInvalid');
      }
    });
  }

  on(event, listener) {
    this._listeners[event] = this._listeners[event] || [];
    this._listeners[event].push(listener);
  }

  notify(event, ...args) {
    this._listeners[event] = this._listeners[event] || [];
    this._listeners[event].forEach(listener => listener(...args));
  }

  get formState() {
    return this.state[FORM_KEY];
  }

  get isFormValid() {
    return this._isFormValid(this.formState);
  }

  get formValues() {
    // reduces form state to form values
    // and only pick non-ui fields
    return reduce(
      this.formState,
      (formValue, field, name) => {
        if (field.UIOnly) {
          return formValue;
        }

        const convertedValue = field.value
          ? field.type(field.value)
          : field.value;

        return set(formValue, name, convertedValue);
      },
      {},
    );
  }
}

export default Builder;
