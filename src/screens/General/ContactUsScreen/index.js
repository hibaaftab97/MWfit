import React, { useState } from 'react';
import { View, Image, TouchableOpacity, TextInput, Platform } from 'react-native';
import { generalImages, icons, authIcons } from '../../../assets/images/index';
import MainContainer from '../../../components/Containers/MainContainer';
import ScrollWrapper from '../../../components/Containers/ScrollWrapper';
import TextWrapper from '../../../components/TextWrapper';
import AuthTextInput from '../../../components/TextInputs/AuthTextInput';
import SubmitButton from '../../../components/Buttons/SubmitButton';
import styles from './styles';
import theme from '../../../utils/theme';

import { useContactUsHook } from '../../../hooks/useContactUsHook';
import { contactIcons } from '../../../assets/images/index';
import { DrawerActions } from '@react-navigation/native';
import { vh } from '../../../units';

const ContactUsScreen = props => {
  const [contactUsState, contactUsFunc] = useContactUsHook();
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState('');

  const handleContactUs = () => {
    const data = {
      fullName: fullName,
      email: email,
      subject: subject,
      message: message,
    };
    contactUsFunc(data);
    setMessage('');
    setSubject();
    setFullName();
    setEmail('');
  };

  console.log(contactUsState?.status, 'contactUsState');

  const [checked, setChecked] = useState(false);
  const [focus, setFocus] = useState(false);
  const renderLogo = () => {
    return (
      <View style={styles.logoView}>
        <Image source={generalImages.logo} style={styles.logoStyle} />
      </View>
    );
  };

  const renderFields = () => {
    return (
      <View style={styles.fieldContainer}>
        <View style={styles.miniContainer}>
          <View style={styles.contactUsScreenIconView}>
            <TouchableOpacity
              onPress={() =>
                props.navigation.dispatch(DrawerActions.toggleDrawer())
              }
              style={styles.leftArrowIconButton}>
              <Image source={icons.drawer} style={styles.leftArrowIconStyle} />
            </TouchableOpacity>
            <TextWrapper style={styles.welcomeBackTextStyle}>
              Contact Us
            </TextWrapper>
          </View>

          <View style={styles.fieldsView}>
            <AuthTextInput
              value={fullName}
              onChangeText={text => setFullName(text)}
              placeHolder="Full Name"
              icon={contactIcons.name}
            />
            <AuthTextInput
              value={email}
              onChangeText={text => setEmail(text)}
              placeHolder="Email"
            />
            <AuthTextInput
              value={subject}
              onChangeText={text => setSubject(text)}
              placeHolder="Subject"
            />

            <View
              style={[
                styles.messageView,
                {
                  borderColor: focus
                    ? theme.defaultForgotPasswordColor
                    : theme.defaultInactiveBorderColor,
                },
              ]}>
              <View style={styles.emailIconView}>
                <Image
                  source={
                    props.type === 'password'
                      ? authIcons.password
                      : authIcons.email
                  }
                  style={[
                    styles.emailStyle,
                    {
                      tintColor: focus
                        ? theme.defaultForgotPasswordColor
                        : theme.defaultInactiveBorderColor,
                    },
                  ]}
                />
              </View>
              <View style={{ marginTop: Platform.OS === 'android' ? 0.3 * vh : 1.8 * vh }}>
                <TextInput
                  onFocus={() => setFocus(true)}
                  value={message}
                  onChangeText={text => setMessage(text)}
                  placeholder="Message"
                  placeholderTextColor={theme.defaultInactiveBorderColor}
                  multiline={true}
                  style={styles.textInputStyle}
                />
              </View>
            </View>
          </View>

          <SubmitButton
            onPress={handleContactUs}
            style={styles.submitButtonStyle}
            titleTextStyle={styles.titleTextStyle}
            title="Submit"
          />
        </View>
      </View>
    );
  };

  return (
    <MainContainer>
      <ScrollWrapper
        avoidKeyboard={true}
        style={styles.scroll}
        contentContainerStyle={styles.content}>
        {renderLogo()}
        {renderFields()}
      </ScrollWrapper>
    </MainContainer>
  );
};
export default ContactUsScreen;
