import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { useSelector } from 'react-redux';

import MainContainer from '../../../components/Containers/MainContainer';
import ScrollWrapper from '../../../components/Containers/ScrollWrapper';
import TextWrapper from '../../../components/TextWrapper';

import OrderItemsContainer from '../../../components/Containers/OrderItemsContainer';

import styles from './styles';
import theme from '../../../utils/theme';
import SubmitButton from '../../../components/Buttons/SubmitButton';

import RemoveProductAlert from '../../../components/Modals/RemoveProductAlert';
import { FlatList } from 'react-native-gesture-handler';

import { icons } from '../../../assets/images';

import { useApplyCouponCodeHook } from '../../../hooks/useApplyCouponCodeHook';
import { showToast } from '../../../redux/Api/HelperFunction';
import { vh, vw } from '../../../units';

const BasketScreen = props => {
  const [couponState, applyCouponFunc] = useApplyCouponCodeHook();
  const cartReducer = useSelector(state => state.cartReducer);
  const [shippingValue, setShippingValue] = useState(10.0);

  const [coupon, setCoupon] = useState('');
  const [cartitems, setCartItems] = useState();


  const [visibility, setVisibility] = useState(false);

  const handleVisibility = () => {
    setVisibility(!visibility);
  };

  const totalItemsPrice = cartReducer?.cartItems
    .reduce((acc, item) => acc + item.quantity * item.product_price, 0)
    .toFixed(2);

  const handleTotalItemsPrice = () => {
    if (couponState && Number(couponState?.amount) > Number(totalItemsPrice)) {
      showToast('Please shop more to avail the discount');
      // return totalItemsPrice;
    } else {
      return couponState?.amount
        ? Number(totalItemsPrice) - Number(couponState?.amount)
        : Number(totalItemsPrice) + Number(shippingValue);
    }
    return totalItemsPrice;
  };

  const totalItemQuantity = cartReducer?.cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0,
  );


  const removeFromCart = id => {
    let newCart = [...cartReducer?.cartItems];
    let index = newCart.findIndex(element => element.id == id);
    newCart.splice(index, 1);
    setCartItems(...newCart);
  };

  const renderSearchHeader = () => {
    return (
      <View style={styles.searchView}>
        <View style={styles.rowContainer}>
          <TouchableOpacity
            onPress={() => props.navigation.goBack()}
            style={styles.rightArrowIconView}>
            <Image source={icons.leftArrow} style={styles.leftArrowIconStyle} />
          </TouchableOpacity>
          <TextWrapper style={styles.searchTextStyle}>
            Shopping Basket{' '}
          </TextWrapper>

          <TouchableOpacity style={styles.searchIconButtonView}>
            {/* <Image
              style={[
                styles.searchIconStyle,
                { tintColor: theme.whiteBackground },
              ]}
              source={icons.search}
            /> */}
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderOrderDetails = () => {
    return (
      <View style={styles.orderDetails}>
        <TextWrapper style={styles.yourOrderTextStyle}>Your Order</TextWrapper>
      </View>
    );
  };

  const renderSubtotal = () => {
    return (
      <View style={styles.mainRow}>
        <View style={styles.numberOfTotalsItemsView}>
          <TextWrapper style={styles.subtotalTextStyle}>
            Subtotal ({totalItemQuantity} Items)
          </TextWrapper>
        </View>

        <View style={styles.connectionView}></View>
        <View style={styles.totalPriceView}>
          <TextWrapper style={styles.totalAmountTextStyle}>
            ${totalItemsPrice}
          </TextWrapper>
        </View>
      </View>
    );
  };

  const renderShipping = () => {
    return (
      <View style={styles.mainShippingRow}>
        <View style={styles.numberOfTotalsItemsView}>
          <TextWrapper style={styles.subtotalTextStyle}>Shipping</TextWrapper>
        </View>

        <View style={styles.shippingConnectionView}></View>
        <View style={styles.totalPriceView}>
          <TextWrapper style={styles.totalAmountTextStyle}>$ 10.00</TextWrapper>
        </View>
      </View>
    );
  };

  const renderDiscount = () => {
    if (couponState) {
      if (
        couponState &&
        Number(couponState?.amount) > Number(totalItemsPrice)
      ) {
        return null;
      } else {
        return (
          <View style={styles.mainDiscountRow}>
            <View style={styles.numberOfTotalsItemsView}>
              <TextWrapper style={styles.subtotalTextStyle}>
                Discount
              </TextWrapper>
            </View>

            <View style={styles.shippingConnectionView}></View>
            <View style={styles.totalPriceView}>
              <TextWrapper style={styles.totalAmountTextStyle}>
                ${couponState?.amount}{' '}
              </TextWrapper>
            </View>
          </View>
        );
      }
    }
    return null;
  };


  const renderCartItems = ({ item }) => {
    console.log(item, 'ForDELTTION');
    return (
      <OrderItemsContainer
        data={item}
        productId={item.product_id}
        onPress={handleVisibility}
        removeFromCart={removeFromCart()}
      />
    );
  };

  const renderEmptyView = () => {
    return (
      <View style={styles.emptyComponentViewStyle}>
        <TextWrapper>No Items are available</TextWrapper>
      </View>
    );
  };

  const renderCartItemsList = () => {
    return (
      <FlatList
        style={styles.flatListStyle}
        data={cartReducer?.cartItems}
        renderItem={renderCartItems}
        ListEmptyComponent={renderEmptyView}
      />
    );
  };

  const renderBorderLine = () => {
    return <View style={styles.borderLineView}></View>;
  };

  const handleVoucher = () => {
    applyCouponFunc(coupon);
  };

  const renderVocuherButton = () => {
    return (
      <View style={styles.mainVoucherContainer}>
        <TextInput
          value={coupon}
          onChangeText={text => setCoupon(text)}
          style={styles.textInputStyle}
          placeholder="Enter Voucher Code"
          placeholderTextColor={theme.defaultInactiveBorderColor}
        />
        <SubmitButton
          onPress={handleVoucher}
          style={styles.applyButtonView}
          title="APPLY"
        />
      </View>
    );
  };

  const renderTotalAmount = () => {
    return (
      <View style={styles.totalView}>
        <View style={styles.totalTextStyleView}>
          <TextWrapper style={styles.totalTextStyle}>Total</TextWrapper>
        </View>

        <View style={styles.totalAmountView}>
          <TextWrapper style={styles.amountTextStyle}>
            ${handleTotalItemsPrice().toFixed(2)}
          </TextWrapper>
        </View>
      </View>
    );
  };

  const renderMainContainer = () => {
    return (
      <View style={{ backgroundColor: theme.whiteBackground, height: 100 * vh, width: 100 * vw, borderTopRightRadius: 16 * vw }}>
        {renderCartItemsList()}
        {cartReducer?.cartItems?.length < 1 ? null : renderBorderLine()}
        {cartReducer?.cartItems?.length < 1 ? null : renderSubtotal()}
        {cartReducer?.cartItems?.length < 1 ? null : renderShipping()}
        {renderDiscount()}
        {cartReducer?.cartItems?.length < 1 ? null : renderBorderLine()}

        {cartReducer?.cartItems?.length < 1 ? null : renderVocuherButton()}
        {cartReducer?.cartItems?.length < 1 ? null : renderTotalAmount()}
        {
          cartReducer?.cartItems?.length < 1 ? null :
            <SubmitButton
              onPress={() =>
                props.navigation.navigate('CartStack', {
                  screen: 'CheckoutScreen',
                  items: cartReducer?.cartItems,params:{
                  amount: handleTotalItemsPrice().toFixed(2)}
                })
              }
              style={styles.checkoutButton}
              title="Proceed To Checkout"
            />
        }

      </View>
    )
  }



  return (
    <MainContainer>
      <ScrollWrapper avoidKeyboard={true} style={{ flex: 1 }} contentContainerStyle={{ alignItems: 'center' }}>
        {renderSearchHeader()}
        {renderOrderDetails()}
        {renderMainContainer()}

      </ScrollWrapper>
      <RemoveProductAlert visibility={props.visibility} />
    </MainContainer>
  );
};
export default BasketScreen;
