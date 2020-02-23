import React from 'react';
import {View, ImageBackground, TouchableOpacity} from 'react-native';
import {Navigation} from 'react-native-navigation';
import ImagePicker from 'react-native-image-crop-picker';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import ActionSheet from '~/Components/Layout/ActionSheet';
import {toast} from '~/Navigation/Utils';
import {Colors} from '~/Theme';

import FormBuilder from '~/Components/Form';
import Form from '~/Components/Form/Layout/Form';

import asEntity from '~/Hocs/asEntity';

import {isRequired} from '~/Services/Validators';

import {Countries} from '~/Services/StaticLookup';

import styles from './styles';

class Profile extends FormBuilder {
  constructor(props) {
    super(props);

    this.init({
      showActionSheet: false,

      actions: [],
      // Form
      form: {
        bio: {
          type: this.types.string,
        },
        name: {
          type: this.types.string,
          validators: [isRequired()],
        },
        location: {
          type: this.types.string,
        },
        website: {
          type: this.types.string,
        },
        dateOfBirth: {
          type: this.types.string,
        },
      },
    });
  }

  componentDidMount() {
    super.componentDidMount();
    Navigation.mergeOptions(this.props.componentId, {
      topBar: {
        title: {
          text: 'Edit Profile',
          alignment: 'fill',
          fontFamily: 'Helvetica',
        },
        backButton: {
          color: Colors.primary,
        },
        rightButtons: [
          {
            id: 'Navigation.TopBar.Save',
            component: {
              name: 'Navigation.TopBar.Save',
              passProps: {
                onSave: this.onSubmit,
                disabled: !this.isFormValid,
              },
            },
          },
        ],
      },
    });

    this.props.entityStore.get();
  }

  entityDidReceived(data) {
    this.updateFormValues(data);
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

  showActionSheet = key => {
    const headerActions = [
      {
        title: 'Take photo',
        onClick: () => this.openCamera('header'),
      },
      {
        title: 'Choose exsiting photo',
        onClick: () => this.openPicker('header'),
      },
      {
        title: 'Remove header',
        onClick: () => this.removeHeader(),
      },
    ];
    const ppActions = [
      {
        title: 'Take photo',
        onClick: () => this.openCamera('pp'),
      },
      {
        title: 'Choose exsiting photo',
        onClick: () => this.openPicker('pp'),
      },
    ];

    this.setState({actions: key === 'header' ? headerActions : ppActions});
    this.setState({showActionSheet: true});
  };

  hideActionSheet = () => {
    this.setState({showActionSheet: false});
  };

  openCamera = key => {
    ImagePicker.openCamera({
      width: key === 'header' ? 300 : 85,
      height: key === 'header' ? 150 : 85,
      cropping: true,
    }).then(image => {
      this.setState({[key]: image}, () => this.hideActionSheet());
    });
  };

  openPicker = key => {
    ImagePicker.openPicker({
      width: key === 'header' ? 300 : 85,
      height: key === 'header' ? 150 : 85,
      cropping: true,
    }).then(image => {
      this.setState({[key]: image}, () => this.hideActionSheet());
    });
  };

  removeHeader = () => {
    this.setState({header: null}, () => this.hideActionSheet());
  };
  render() {
    const {TextField, SelectField, DateField} = this;
    const {showActionSheet, header, pp, actions} = this.state;
    const {loading} = this.props.entityStore;

    return (
      <Form loading={loading}>
        <View style={styles.container}>
          <ImageBackground
            style={styles.header}
            source={
              header
                ? {uri: header.path}
                : require('~/assets/images/avatar.jpeg')
            }>
            <TouchableOpacity
              onPress={() => this.showActionSheet('header')}
              style={styles.headerImg}>
              <SimpleLineIcons name="camera" size={35} color={'white'} />
            </TouchableOpacity>
          </ImageBackground>
          <ImageBackground
            style={styles.pp}
            source={
              pp ? {uri: pp.path} : require('~/assets/images/avatar.jpeg')
            }>
            <TouchableOpacity
              onPress={() => this.showActionSheet('pp')}
              style={styles.headerImg}>
              <SimpleLineIcons name="camera" size={25} color={'white'} />
            </TouchableOpacity>
          </ImageBackground>
          <View style={[styles.inputArea, styles.center]}>
            <TextField
              title="Name"
              placeholder="Name cannot be blank"
              name="name"
              autoFocus
            />
            <TextField title="Bio" name="bio" multiline />
            <SelectField title="Location" name="location" options={Countries} />
            <TextField title="Website" name="website" />
            <DateField
              title="Date of birth"
              placeholder="Add your date of birth"
              name="dateOfBirth"
            />
          </View>

          <ActionSheet
            visible={showActionSheet}
            hide={this.hideActionSheet}
            actions={actions}
          />
        </View>
      </Form>
    );
  }
}

export default asEntity({storeId: 'Profile'})(Profile);
