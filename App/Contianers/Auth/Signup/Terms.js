import React from 'react';
import {View, Text} from 'react-native';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import {Navigation} from 'react-native-navigation';
import Form from '~/Components/Form/Layout/Form';

import {toast} from '~/Navigation/Utils';

import Sperator from '~/Components/Layout/Sperator';
import Checkbox from '~/Components/Form/Controls/Checkbox';
import Button from '~/Components/Form/Actions/Button';
import Link from '~/Components/Form/Actions/Link';

import asEntity from '~/Hocs/asEntity';

import StartAuth from '~/Navigation/Auth';

import styles from './styles';

@observer
class Terms extends React.Component {
  @observable checked = true;

  constructor(props) {
    super(props);
    Navigation.mergeOptions(this.props.componentId, {
      topBar: {
        rightButtons: [],
      },
    });
  }

  entityDidPosted(data) {
    StartAuth();
  }

  entityDidCatch(error) {
    toast.show(error);
  }

  signup = () => {
    const {data} = this.props;
    this.props.entityStore.post({...data, acceptTrems: this.checked});
  };

  render() {
    const {loading} = this.props.entityStore;
    return (
      <Form loading={loading}>
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
      </Form>
    );
  }
}

export default asEntity({storeId: 'Signup'})(Terms);
