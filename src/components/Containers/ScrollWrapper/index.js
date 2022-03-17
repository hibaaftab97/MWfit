import React from 'react';
import { ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
const ScrollWrapper = props => {
  const Scrollable = props.avoidKeyboard ? KeyboardAwareScrollView : ScrollView;
  return (
    <Scrollable showsVerticalScrollIndicator={false} {...props}
    >
      {props.children}
    </Scrollable>
  );
};
export default ScrollWrapper;
