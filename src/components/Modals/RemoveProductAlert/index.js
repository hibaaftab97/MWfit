import React from 'react';
import {Text, View, Modal, Image, TouchableOpacity} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import {vh, vw} from '../../../units/index';
import {icons} from '../../../assets/images/index';
import TextWrapper from '../../TextWrapper/index';
import SubmitButton from '../../Buttons/SubmitButton/index';
import styles from './styles';

const RemoveProductAlert = props => {
  return (
    <Modal
      transparent={true}
      visible={props.visibility ? props.visibility : false}
      style={{flex: 1}}>
      <BlurView style={styles.blurViewStyle} blurType="dark" blurAmount={40} />
      <View style={styles.alertMainView}>
        <View style={styles.barViewStyle}></View>

        <View style={styles.checkIconView}>
          <Image
            source={props?.icon ? props?.icon : icons.questionMark}
            style={styles.checkIconStyle}
          />

          <TextWrapper
            numberOfLines={3}
            style={styles.customAlertHeadingTextStyle}>
            {props?.title
              ? props?.title
              : 'Are you sure you want to remove product from the cart?'}
            {/* Are you sure you want to remove product from the cart? */}
          </TextWrapper>

          <View style={styles.choiceButtonView}>
            <SubmitButton
              title="YES"
              style={styles.yesButtonView}
              textStyle={styles.yesTextStyle}
              onPress={props?.onPress}
            />

            <SubmitButton
              title="NO"
              style={styles.noButtonView}
              textStyle={styles.noTextStyle}
              onPress={props?.onHide}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default RemoveProductAlert;
