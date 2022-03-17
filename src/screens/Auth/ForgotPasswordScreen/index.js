import React, { useState } from 'react';
import { View, Image, Animated, LayoutAnimation } from 'react-native';
import { generalImages, icons } from '../../../assets/images/index';
import MainContainer from '../../../components/Containers/MainContainer';
import ScrollWrapper from '../../../components/Containers/ScrollWrapper';
import TextWrapper from '../../../components/TextWrapper';
import AuthTextInput from '../../../components/TextInputs/AuthTextInput';
import SubmitButton from '../../../components/Buttons/SubmitButton';
import ButtonTouchableTextButton from '../../../components/Buttons/BottomTouchableTextButton';
import styles from './styles';
import { vh } from '../../../units';
import GeneralAlert from '../../../components/Modals/GeneralAlert';
import { useForgotPasswordHook } from '../../../hooks/useForgotPasswordHook';
import { resetPasswordAction } from '../../../redux/actions/authActions';
import { showToast } from '../../../redux/Api/HelperFunction';
import { useDispatch } from 'react-redux';

const ForgotPasswordScreen = props => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [verificationCode, setVerificationCode] = useState();
  const [step, setStep] = useState(1);
  const [visible, setVisible] = useState(false);
  const [animation, setAnimation] = useState(new Animated.Value(20));
  const boxStyle = {
    width: animation,
  };

  const [forgotPasswordEmailState, forgotPasswordEmailFunc] =
    useForgotPasswordHook();

  const handleEmail = () => {
    forgotPasswordEmailFunc(email);
  };

  const handleVerification = () => {
    if (verificationCode === forgotPasswordEmailState?.code) {
      setStep(step + 1);
    } else {
      showToast('Code does not exist');
    }
  };

  const handleResetPassword = () => {
    if (password === confirmPassword) {
      const data = {
        email: email,
        password: password,
      };
      dispatch(resetPasswordAction(data)).then(response => {
        if (response?.status) {
          setVisible(!visible);
        }
      });
    } else {
      showToast('Passwords do not match');
    }
  };

  const handleAnimation = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    if (step == 1) {
      setStep(step + 1);
      handleEmail();
      Animated.timing(animation, {
        toValue: 40,
      }).start();
    }
    if (step == 2) {
      handleVerification();
      Animated.timing(animation, {
        toValue: 60,
      }).start();
    }
    // if (step > 2) {
    //   handleResetPassword();
    // }
  };

  const handleVisibility = () => {
    handleResetPassword();
    // setVisible(!visible);
  };

  const renderLogo = () => {
    return (
      <View style={styles.logoView}>
        <Image source={generalImages.logo} style={styles.logoStyle} />
      </View>
    );
  };

  const renderStepsLoading = () => {
    return (
      <View style={styles.loaderView}>
        <Animated.View
          style={[
            styles.subLoaderView,
            // {width: step > 1 ? 58 * vw : 29 * vw},
            boxStyle,
          ]}
        />
      </View>
    );
  };

  const renderConditionalFields = () => {
    if (step == 1) {
      return (
        <View style={styles.fieldsView}>
          <AuthTextInput
            value={email}
            onChangeText={text => setEmail(text)}
            placeHolder="Enter your Email"
          />
        </View>
      );
    }
    if (step == 2) {
      return (
        <View style={styles.fieldsView}>
          <AuthTextInput
            value={verificationCode}
            onChangeText={text => setVerificationCode(text)}
            placeHolder="Enter Verification Code"
          />
        </View>
      );
    }
    if (step == 3) {
      return (
        <View style={styles.fieldsView}>
          <AuthTextInput
            value={password}
            onChangeText={text => setPassword(text)}
            placeHolder="Enter your Password"
            type="password"
          />
          <AuthTextInput
            value={confirmPassword}
            onChangeText={text => setConfirmPassword(text)}
            placeHolder="Enter confirm Password"
            type="password"
          />
        </View>
      );
    }
  };

  const renderFields = () => {
    return (
      <View style={styles.fieldContainer}>
        <View style={styles.miniContainer}>
          <TextWrapper style={styles.textStyle}>
            Step {step > 3 ? 3 : step} / 3
          </TextWrapper>
          {renderStepsLoading()}
          <TextWrapper style={styles.welcomeBackTextStyle}>
            Forget Password?
          </TextWrapper>

          {renderConditionalFields()}

          {step == 3 ? (
            <SubmitButton
              onPress={handleVisibility}
              style={styles.submitButtonStyle}
              titleTextStyle={styles.titleTextStyle}
              title="Update"
            />
          ) : (
            <SubmitButton
              onPress={handleAnimation}
              style={styles.submitButtonStyle}
              titleTextStyle={styles.titleTextStyle}
              title="Continue"
            />
          )}
        </View>

        {renderSocialButtons()}
      </View>
    );
  };

  const renderSocialButtons = () => {
    return (
      <View style={styles.socialView}>
        <ButtonTouchableTextButton
          onPress={() => props.navigation.navigate('SignupScreen')}
          type="back"
          title="Login"
        />
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

        <GeneralAlert visibility={visible} />
      </ScrollWrapper>
    </MainContainer>
  );
};
export default ForgotPasswordScreen;
