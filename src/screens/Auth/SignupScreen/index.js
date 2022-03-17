import React, { useState, useCallback } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { generalImages, icons } from '../../../assets/images/index';
import MainContainer from '../../../components/Containers/MainContainer';
import ScrollWrapper from '../../../components/Containers/ScrollWrapper'; //might need it
import TextWrapper from '../../../components/TextWrapper';
import AuthTextInput from '../../../components/TextInputs/AuthTextInput';
import SubmitButton from '../../../components/Buttons/SubmitButton';
import SocialButton from '../../../components/Buttons/SocialButton';
import ButtonTouchableTextButton from '../../../components/Buttons/BottomTouchableTextButton';
import { useRegisterHook } from '../../../hooks/useRegisterHook';
import { useLoginHook } from '../../../hooks/useLoginHook';
import styles from './styles';
import { useFocusEffect } from '@react-navigation/core';
import theme from '../../../utils/theme';
import { Fonts } from '../../../assets/fonts';

const SignupScreen = props => {
  const [signupState, signupFunc] = useRegisterHook();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginPassword, setLoginPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('');
  const [activeTab, setActiveTab] = useState(false);
  const [loginState, loginFunc] = useLoginHook();
  const [checked, setChecked] = useState(false);
  const [username, setUsername] = useState();
  const handleLogin = () => {
    const data = {
      email: username,
      password: loginPassword,
    };
    loginFunc(data);
    setUsername();
    setLoginPassword();
  };


  const handleSignUp = () => {
    const data = {
      email: email,
      username: email,
      password: password,
      confirmPassword: confirmPassword,
    };
    signupFunc(data);
  };

  const handleTabs = () => {
    setActiveTab(!activeTab);
  };

  const renderLogo = () => {
    return (
      <View style={styles.logoView}>
        <Image source={generalImages.logo} style={styles.logoStyle} />
      </View>
    );
  };

  const handleForgotPasswordNav = () => {
    setUsername();
    setPassword();
    props.navigation.navigate('ForgotPasswordScreen');
  };

  const renderCheckWithForgotPassword = () => {
    return (
      <View style={styles.mainRow}>
        <TouchableOpacity
          onPress={() => setChecked(!checked)}
          style={styles.checkButtonView}>
          {checked ? (
            <Image source={icons.check} style={styles.checkIconStyle} />
          ) : (
            <Image source={icons.unchecked} style={styles.checkIconStyle} />
          )}
        </TouchableOpacity>

        <TextWrapper style={styles.rememberTextStyle}>Remember me</TextWrapper>

        <TouchableOpacity
          onPress={handleForgotPasswordNav}
          style={styles.forgotPasswordButtonView}>
          <TextWrapper style={styles.forgotPasswordTextStyle}>
            Forget Password
          </TextWrapper>
        </TouchableOpacity>
      </View>
    );
  };

  const renderSignUpFields = () => {
    return (
      <View style={styles.fieldContainer}>
        <View style={styles.miniContainer}>
          {renderTabs()}
          <TextWrapper style={styles.welcomeBackTextStyle}>
            Create Account
          </TextWrapper>

          <View style={styles.fieldsView}>
            <AuthTextInput
              value={email}
              onChangeText={text => setEmail(text)}
              placeHolder="Enter Your Mail"
              keyboardType="email-address"
            />
            <AuthTextInput
              value={password}
              onChangeText={text => setPassword(text)}
              placeHolder="Enter Your Password"
              type="password"
            />
            <AuthTextInput
              value={confirmPassword}
              onChangeText={text => setConfirmPassword(text)}
              placeHolder="Enter Your Password"
              type="password"
            />
          </View>

          <SubmitButton
            // onPress={() => props.navigation.navigate('TabNavigator')}
            onPress={() => handleSignUp()}
            style={styles.submitButtonStyle}
            titleTextStyle={styles.titleTextStyle}
            title="Submit"
          />
        </View>

        {renderSocialButtons()}
      </View>
    );
  };

  const renderLoginFields = () => {
    return (
      <View style={styles.fieldContainer}>
        <View style={styles.miniContainer}>
          {renderTabs()}
          <TextWrapper style={styles.welcomeBackTextStyle}>
            Welcome Back
          </TextWrapper>
          <View style={styles.fieldsView}>
            <AuthTextInput
              value={username}
              onChangeText={text => setUsername(text)}
              placeHolder="Enter Your Mail"
              keyboardType="email-address"
            />
            <AuthTextInput
              value={loginPassword}
              onChangeText={text => setLoginPassword(text)}
              placeHolder="Enter Your Password"
              type="password"
            />
          </View>

          {renderCheckWithForgotPassword()}
          <SubmitButton
            onPress={handleLogin}
            style={styles.submitButtonStyle}
            titleTextStyle={styles.titleTextStyle}
            title="Log Into Your Account"
          />
        </View>
        {_renderSocialButtons()}
      </View>
    );
  };

  const renderSocialButtons = () => {
    return (
      <View style={styles.socialButtonsView}>
        {/* <SocialButton /> */}
        <ButtonTouchableTextButton
          onPress={handleTabs}
          type="account"
          title="Login Here"
        />
      </View>
    );
  };

  const _renderSocialButtons = () => {
    return (
      <View style={styles.socialButtonsView}>
        {/* <SocialButton /> */}
        <ButtonTouchableTextButton
          onPress={handleTabs}
          headertext="Don't have an account? "
          type="account"
          title="Sign Up here"
        />
      </View>
    );
  };

  const renderFields = () => {
    if (activeTab) {
      return renderLoginFields();
    } else {
      return renderSignUpFields();
    }
  };

  const renderTabs = () => {
    return (
      <View style={styles.tabsView}>
        <TouchableOpacity onPress={handleTabs} style={styles.signinTabView}>
          <TextWrapper
            style={[
              styles.signinTabTextStyle,
              { color: activeTab ? theme.activeTextInputColor : theme.TextInputColor },
              { textDecorationLine: activeTab ? 'underline' : 'none' },
            ]}>
            Sign In
          </TextWrapper>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleTabs} style={styles.signupTabView}>
          <TextWrapper
            style={[
              styles.signupTextStyle,
              { color: !activeTab ? theme.activeTextInputColor : null },
              {fontFamily: !activeTab ? Fonts.MD : Fonts.MSB},
              { textDecorationLine: !activeTab ? 'underline' : 'none' },
            ]}>
            Sign Up
          </TextWrapper>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <MainContainer>
      <ScrollWrapper avoidKeyboard={true}>
        {renderLogo()}
        {renderFields()}
      </ScrollWrapper>
    </MainContainer>
  );
};
export default SignupScreen;
