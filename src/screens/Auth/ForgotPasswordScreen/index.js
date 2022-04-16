import React, { useState,useEffect } from 'react';
import { View, Image, Animated, LayoutAnimation } from 'react-native';
import { generalImages, icons } from '../../../assets/images/index';
import MainContainer from '../../../components/Containers/MainContainer';
import ScrollWrapper from '../../../components/Containers/ScrollWrapper';
import TextWrapper from '../../../components/TextWrapper';
import AuthTextInput from '../../../components/TextInputs/AuthTextInput';
import SubmitButton from '../../../components/Buttons/SubmitButton';
import ButtonTouchableTextButton from '../../../components/Buttons/BottomTouchableTextButton';
import styles from './styles';
import GeneralAlert from '../../../components/Modals/GeneralAlert';
import { useForgotPasswordHook } from '../../../hooks/useForgotPasswordHook';
import { resetPasswordAction } from '../../../redux/actions/authActions';
import { showToast } from '../../../redux/Api/HelperFunction';
import { useDispatch } from 'react-redux';

const ForgotPasswordScreen = props => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [verificationCode, setVerificationCode] = useState();

  const [step, setStep] = useState(1);
  const [visible, setVisible] = useState(false);
  const [animation, setAnimation] = useState(new Animated.Value(20));
  const boxStyle = {
    width: animation,
  };

  const handleModalVisibility = () => {
    setVisible(false);
    props.navigation.navigate('LoginScreen');
  };

  const [forgotPasswordEmailState, forgotPasswordEmailFunc] =
    useForgotPasswordHook();

  const handleEmail = () => {
    forgotPasswordEmailFunc(email)
  };

  console.log(forgotPasswordEmailState, 'forgotPasswordEmailState');

  useEffect(() => {

    if (forgotPasswordEmailState?.status) {
      handleAnimation()
    }


  }, [forgotPasswordEmailState])

  const handleVerification = () => {
    
    if (verificationCode === forgotPasswordEmailState?.code) {
      setStep(step + 1);
    } else {
      showToast('Code does not exist');
    }
  };

  const handleResetPassword = () => {
    try {
      const data = {
        email: email,
        password: password,
      };
      if (password == '' || confirmPassword == '') {
        showToast('Fields are empty')
        return
      }
      if (password !== confirmPassword) {
        showToast('Passwords do not match')
        return
      }
      dispatch(resetPasswordAction(data)).then(response => {
        if (response?.status) {
          setVisible(!visible);
        }
      });
    } catch (error) {
      showToast(error)
    }
  };

  const handleOnPress = () => {
    if (step == 1) {
      handleEmail();
console.log('hanl,deeee code ',forgotPasswordEmailState);
      setStep(step + 1);
      // Animated.timing(animation, {
      //   toValue: 40,
      // }).start();
    }
    if (step == 2) {
      handleVerification();
      // Animated.timing(animation, {
      //   toValue: 60,
      // }).start();
    }
  }

  const handleAnimation = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    if (step == 1) {
      // handleEmail();

      setStep(step + 1);
      Animated.timing(animation, {
        toValue: 40,
      }).start();
    }
    if (step == 2) {
      // handleVerification();
      Animated.timing(animation, {
        toValue: 60,
      }).start();
    }
  };

  const handleVisibility = () => {
    handleResetPassword();
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
            keyboardType='number-pad'
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
          />
          <AuthTextInput
            value={confirmPassword}
            onChangeText={text => setConfirmPassword(text)}
            placeHolder="Enter confirm Password"
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
            Forgot Password?
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
              onPress={handleOnPress}
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

        <GeneralAlert
          onPress={handleModalVisibility}
          onHide={handleModalVisibility}
          visibility={visible}
        />
      </ScrollWrapper>
    </MainContainer>
  );
};
export default ForgotPasswordScreen;
