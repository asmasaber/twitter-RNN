import React, {useState} from 'react';
import {View, Text, CheckBox, TouchableOpacity} from 'react-native';
import {Navigation} from 'react-native-navigation';
import Sperator from '../../../Components/Sperator';
import styles from '../styles';

export default props => {
  const [checked, setChecked] = useState(true);

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
          <CheckBox
            style={styles.checkBox}
            value={checked}
            onValueChange={() => setChecked(!checked)}
          />
        </View>
        <Text style={[styles.hint, styles.termsHint]}>
          For more details about these settings, visit the{' '}
          <Text style={styles.link}> Help Center </Text>
        </Text>
      </View>
      <Sperator />
      <TouchableOpacity
        onPress={() =>
          Navigation.push(props.componentId, {
            component: {
              name: 'navigation.twitter.SignupSubmitScreen',
              passProps: {
                text: 'Pushed screen',
              },
              options: {
                topBar: {
                  title: {
                    text: 'Pushed screen title',
                  },
                },
              },
            },
          })
        }
        style={checked ? styles.button : styles.disabledButton}
        disabled={!checked}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};
