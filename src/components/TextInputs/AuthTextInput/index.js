import React, {useState} from 'react';
import {View, TextInput, Image} from 'react-native';
import styles from './styles';
import theme from '../../../utils/theme';
import {authIcons} from '../../../assets/images';

const AuthTextInput = props => {
  const [focus, setFocus] = useState(false);
  return (
    <View
      style={[focus ? styles.customStyle : styles.textInputView, props.style]}>
      <View style={styles.emailIconView}>
        <Image
          source={
            props.type === 'password' ? authIcons.password : authIcons.email
          }
          style={[
            styles.emailStyle,
            {
              tintColor: focus
                ? theme.activeTextInputColor
                : theme.defaultInactiveBorderColor,
            },
          ]}
        />
      </View>
      <TextInput
        value={props.value}
        onChangeText={props.onChangeText}
        style={styles.textInputStyle}
        placeholder={props.placeHolder}
        placeholderTextColor="rgba(12,13,52,0.3)"
        secureTextEntry={props.type ? true : false}
        onFocus={() => setFocus(true)}
        // keyboardType='email-address'
        keyboardType={props.keyboardType}
      />
    </View>
  );
};

export default AuthTextInput;
