import React, { useState } from 'react';
import { View, Image } from 'react-native';
import { generalImages } from '../../../assets/images';

import ScrollWrapper from '../../../components/Containers/ScrollWrapper';
import TextWrapper from '../../../components/TextWrapper';

import styles from './styles';

import SubmitButton from '../../../components/Buttons/SubmitButton';

import { useNavigation } from '@react-navigation/native';

const OrderAcceptedScreen = props => {
  const navigation = useNavigation();
  const renderSearchHeader = () => {
    return (
      <View style={styles.searchView}>
        <TextWrapper style={styles.searchTextStyle}>Checkout</TextWrapper>

        {/* <View style={styles.searchIconsView}>
          <TouchableOpacity style={styles.searchIconButtonView}>
            <Image style={styles.searchIconStyle} source={icons.search} />
          </TouchableOpacity>
        </View> */}
      </View>
    );
  };

  const handleNavigation = () => {
    props.navigation.navigate('OrderStack');
    props.navigation.reset({
      index: 0,
      routes: [{ name: 'GeneralStack' }],
    });
  };

  const renderOrderAcceptedView = () => {
    return (
      <View style={styles.mainView}>
        <View style={styles.imageView}>
          <Image style={styles.orderImageStyle} source={generalImages.order} />
        </View>

        <View style={styles.descriptionView}>
          <TextWrapper style={styles.orderAcceptedTextStyle}>
            Order Accepted
          </TextWrapper>

          <TextWrapper style={styles.orderNumberTextStyle} numberOfLines={2}>
            Your Order has been placed
          </TextWrapper>
        </View>

        <SubmitButton
          onPress={handleNavigation}
          title="Track Orders"
          style={styles.titleView}
        />
      </View>
    );
  };

  return (
    <ScrollWrapper style={styles.scroll} contentContainerStyle={styles.content}>
      {renderSearchHeader()}
      {renderOrderAcceptedView()}
    </ScrollWrapper>
  );
};
export default OrderAcceptedScreen;
