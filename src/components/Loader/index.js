import React from 'react';
import {useSelector} from 'react-redux';
import {ActivityIndicator, Modal, View} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import {vh, vw} from '../../units';

const Loader = () => {
  const isLoading = useSelector(state => state.commonReducer.isLoading);
  return (
    <Modal
      animationType="slide"
      style={{flex: 1}}
      transparent={true}
      visible={isLoading}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <BlurView
          style={{
            height: 100 * vh,
            width: 100 * vw,
            position: 'absolute',
            top: 0,
            left: 0,
          }}
          blurType="light"
          blurAmount={10}
          reducedTransparencyFallbackColor="white"
        />
        <ActivityIndicator size="large" color="#211E1F" />
      </View>
    </Modal>
  );
};

export default Loader;
