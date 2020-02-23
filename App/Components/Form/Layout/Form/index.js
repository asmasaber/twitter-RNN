import React, {Component} from 'react';
import PropTypes from 'prop-types';
import isObject from 'lodash/isObject';
import isArray from 'lodash/isArray';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {View, TouchableWithoutFeedback, Keyboard} from 'react-native';

import Blocker from '~/Components/Layout/Blocker';

import styles from './styles';

class FormWrapper extends Component {
  get styles() {
    const {style} = this.props;

    if (isObject(style)) {
      return [style];
    } else if (isArray(style)) {
      return style;
    }

    return [];
  }

  get contentStyles() {
    const {contentStyle} = this.props;

    if (isObject(contentStyle)) {
      return [contentStyle];
    } else if (isArray(contentStyle)) {
      return contentStyle;
    }

    return [];
  }

  render() {
    const {children, loading} = this.props;

    return (
      <View style={[styles.root, ...this.styles]}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAwareScrollView
            extraScrollHeight={10}
            keyboardOpeningTime={0}
            contentContainerStyle={{flexGrow: 1}}>
            <View style={this.contentStyles}>
              {children}

              {loading && (
                <View style={styles.overlay}>
                  <Blocker />
                </View>
              )}
            </View>
          </KeyboardAwareScrollView>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

FormWrapper.propTypes = {
  children: PropTypes.any,
  contentStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  form: PropTypes.object,
  formRef: PropTypes.func,
  loading: PropTypes.bool,
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

FormWrapper.defaultValues = {
  children: null,
  form: {},
  formRef() {},
  loading: false,
  style: [],
};

export default FormWrapper;
