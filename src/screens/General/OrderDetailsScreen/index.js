import React, { useState } from 'react';
import {
  ActivityIndicator,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import CheckoutItems from '../../../components/CheckoutItems';
import ItemsWithTotalWrapper from '../../../components/ItemsWithTotalWrapper';
import SearchHeader from '../../../components/Headers/SearchHeader';
import styles from './styles';
// import {cancelOrder} from '../../StateManagement/Slices/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { vh, vw } from '../../../units';
import TextWrapper from '../../../components/TextWrapper';
import theme from '../../../utils/theme';
const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const OrderDetailsScreen = props => {
  const dispatch = useDispatch();

  const updateOrder = async orderId => {
    // let response = await dispatch(
    //   cancelOrder({body: {status: 'cancelled'}, orderId: orderId}),
    // );
    // console.warn('response', response);
    // if (response.type == 'todo/cancelOrder/fulfilled') {
    //   showToast('Cancel Order Successfull');
    //   props.navigation.navigate('ProfileNavigator', {
    //     screen: 'ViewOrderScreen',
    //   });
    // }
    // console.log('wow', orderId)
  };

  const orderDetails = props.route.params?.orderDetails;
  console.log(orderDetails, 'orderDetailsDATA');
  let tempDate = new Date(orderDetails?.date_created);
  // const {cancelOrderStatus} = useSelector(state => state.cartSlice);
  const { cancelOrderStatus } = 'pending';

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <SearchHeader
        tintColor={theme.defaultBackgroundColor}
        title="Order Details"
      />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.mainScreenView}>
        <View>
          {cancelOrderStatus == 'pending' ? (
            <View
              style={{
                height: vh * 80,
                width: vw * 80,
                position: 'absolute',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 90000000,
              }}>
              <ActivityIndicator size="large" color="red" />
            </View>
          ) : null}
          <View style={styles.containerView}>
            <View>
              <TextWrapper
                style={[styles.textStyle, { color: theme.defaultTextColor }]}>
                Order Number
              </TextWrapper>
              <TextWrapper style={styles.valueTextStyle}>
                #{orderDetails?.id}
              </TextWrapper>

              <TextWrapper
                style={[
                  { color: theme.defaultTextColor },
                  styles.subjectTextStyleWithSpace,
                ]}>
                Status
              </TextWrapper>
              <TextWrapper style={styles.valueTextStyle}>
                {orderDetails?.status}
              </TextWrapper>

              <TextWrapper
                style={[
                  { color: theme.defaultTextColor },
                  styles.subjectTextStyleWithSpace,
                ]}>
                Shipping Price
              </TextWrapper>
              <TextWrapper style={styles.valueTextStyle}>
                ${orderDetails?.shipping_total}
              </TextWrapper>
            </View>

            <View style={styles.dateView}>
              <TextWrapper style={[{ color: theme.defaultTextColor }]}>
                Order Date
              </TextWrapper>
              <TextWrapper style={styles.valueTextStyle}>
                {months[tempDate.getMonth()]} {tempDate.getDate()},{' '}
                {tempDate.getFullYear()}
              </TextWrapper>

              {orderDetails?.status == 'pending' ? (
                <TouchableOpacity onPress={() => updateOrder(orderDetails?.id)}>
                  {/* <TextWrapper
                    style={[
                      {color: theme.defaultTextColor},
                      styles.subjectTextStyleWithSpace,
                    ]}>
                    Cancel Order
                  </TextWrapper> */}
                </TouchableOpacity>
              ) : null}
              {/* <TextWrapper
              style={[
                { color:'red'}},
                styles.subjectTextStyleWithSpace,
              ]}>
              Status
            </TextWrapper>
            <TextWrapper style={styles.valueTextStyle}>{orderDetails?.status}</TextWrapper> */}
            </View>
          </View>
        </View>
        {orderDetails?.line_items?.map((item, index) => {
          return <CheckoutItems data={item} />;
        })}

        <ItemsWithTotalWrapper
          noOfItems={orderDetails?.line_items?.length}
          // totalAmount={Math.floor(orderDetails?.total).toFixed(2)}
          totalAmount={orderDetails?.total}
        />
      </ScrollView>
    </View>
  );
};

export default OrderDetailsScreen;
