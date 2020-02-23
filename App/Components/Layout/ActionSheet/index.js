import React from 'react';
import Dialog, {DialogContent} from 'react-native-popup-dialog';

import map from 'lodash/map';

import Action from './Action';
import styles from './styles';

export default class ActionSheet extends React.Component {
  render() {
    const {actions, hide, visible} = this.props;
    return (
      <Dialog style={styles.dailog} onTouchOutside={hide} visible={visible}>
        <DialogContent style={styles.container}>
          {map(actions, (action, index) => (
            <Action key={index} action={action} />
          ))}
        </DialogContent>
      </Dialog>
    );
  }
}
