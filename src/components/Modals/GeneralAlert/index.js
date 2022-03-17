import React from 'react';
import {Text, View, Modal, Image, TouchableOpacity} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import {vh, vw} from '../../../units/index';
import {icons} from '../../../assets/images/index';
import TextWrapper from '../../TextWrapper/index';
import SubmitButton from '../../Buttons/SubmitButton/index';
import {useNavigation} from '@react-navigation/core';
import styles from './styles';

const GeneralAlert = props => {
  const navigation = useNavigation();
  return (
    <Modal
      transparent={true}
      visible={props.visibility ? props.visibility : false}
      style={{flex: 1}}>
      <BlurView style={styles.blurViewStyle} blurType="dark" blurAmount={40} />
      <View style={styles.alertMainView}>
        {/* <TouchableOpacity style={styles.crossIconView}>
          <Image source={icons.cross} style={styles.crossIconStyle} />
        </TouchableOpacity> */}

        <View style={styles.barViewStyle}></View>

        <View style={styles.checkIconView}>
          <Image source={icons.tick} style={styles.checkIconStyle} />

          <TextWrapper
            numberOfLines={2}
            style={styles.customAlertHeadingTextStyle}>
            Your Password Was Successfully Changed
          </TextWrapper>

          <TextWrapper style={styles.customAlertDescriptionTextStyle}>
            Close This Window And Login
          </TextWrapper>

          <SubmitButton
            title="Login Again"
            style={styles.submitButtonView}
            textStyle={styles.textStyle}
            onPress={() => navigation.navigate('SignupScreen')}
          />
        </View>
      </View>
    </Modal>
  );
};

export default GeneralAlert;
