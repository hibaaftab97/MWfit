import React, { useState, useCallback } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  LayoutAnimation,
} from 'react-native';
import { generalImages, icons } from '../../../assets/images';
import { CardField, useStripe } from '@stripe/stripe-react-native';

import ScrollWrapper from '../../../components/Containers/ScrollWrapper';
import TextWrapper from '../../../components/TextWrapper';

import CheckoutInput from '../../../components/TextInputs/CheckoutInput';
import styles from './styles';

import SearchHeader from '../../../components/Headers/SearchHeader';

import SubmitButton from '../../../components/Buttons/SubmitButton';
import theme from '../../../utils/theme';

import { useSelector } from 'react-redux';
import { useFocusEffect } from '@react-navigation/core';
import { useCheckoutHook } from '../../../hooks/useCheckoutHook';
import { FlatList } from 'react-native-gesture-handler';
import { vh, vw } from '../../../units';
import { showToast } from '../../../redux/Api/HelperFunction';
import { useDispatch } from 'react-redux';
import { makePaymentViaCard } from '../../../redux/actions/checkoutAction';

const CheckoutScreen = props => {
  console.log("props", props);
  const dispatch = useDispatch();
  const user = useSelector(state => state.authReducer);
  // console.log(user, 'user');
  const [checked, setChecked] = useState(true);
  const [customerDetails, setCustomerDetails] = useState();
  const [step, setStep] = useState(1);
  //states
  const [streetAddress1, setStreedAddress1] = useState('');
  const [streetAddress2, setStreetAddress2] = useState('');
  const [city, setCity] = useState('');
  const [stateRegion, setStateRegion] = useState('');
  const [country, setCountry] = useState('');
  const { createToken } = useStripe();
  const [card, setCard] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(false);
  const [cardHoldersName, setCardHoldersName] = useState();

  const customer = useSelector(state => state.authReducer?.customer);
  const cartItems = useSelector(state => state.cartReducer?.cartItems);
  const products = [
    {
      id: 1,
      product_image:generalImages.prod1,
      product_price:'19.99',
      product_name: 'White Top',
      
    },

    {
      id: 2,
      product_image:generalImages.prod1,
      product_name: 'White Top',
      product_price:'19.99',
     
    },
    {
      id: 2,
      product_image:generalImages.prod1,
      product_name: 'White Top',
      product_price:'19.99',
     
    },
    {
      id: 2,
      product_image:generalImages.prod1,
      name: 'White Top',
      price:'19.99',
     
    },
    {
      id: 2,
      product_image:generalImages.prod1,
      name: 'White Top',
      price:'19.99',
     
    },
  ];
  // console.log(cartItems, 'cartItems');

  const [checkoutState, checkoutFunc] = useCheckoutHook();
  useFocusEffect(
    useCallback(() => {
      setCustomerDetails(customer?.user?.user);
    }, []),
  );

  const handleCheckout = () => {
    const data = {
      customer_id: user?.user,
      payment_method: 'cod',
      payment_method_title: 'Cash on Delivery',
      set_paid: false,
      billing: {
        first_name: customerDetails?.displayname,
        last_name: customerDetails?.lastname,
        address_1: streetAddress1,
        address_2: streetAddress2,
        city: city,
        state: stateRegion,
        // "postcode": "94103",
        country: country,
        email: customerDetails?.email,
        // phone: "(555) 555-5555"
      },
      shipping: {
        first_name: customerDetails?.displayname,
        last_name: customerDetails?.lastname,
        address_1: streetAddress1,
        address_2: streetAddress2,
        city: city,
        state: stateRegion,
        // postcode: 94103,
        country: country,
      },
      line_items: cartItems,
      shipping_lines: [
        {
          method_id: 'flat_rate',
          method_title: 'Flat Rate',
          total: '10.00',
        },
      ],
    };
    // console.log(data, 'checkoutData');
    checkoutFunc(data);
  };
  const handlePaymentMethod = () => {
    setPaymentMethod(!paymentMethod);
  };

  const handleDetails = async () => {
    console.log("card complete", card?.complete);
    if (cardHoldersName == "") {
      showToast("Please Enter Card Holder Name")
    }
    else if (!card?.complete) {
      showToast("Please Fill card Details")
    }
    else {
      try {
        const paymentMethod = await createToken({
          type: 'Card',
          name: cardHoldersName,
        });
        showToast(paymentMethod);
        console.log('token generate', paymentMethod);
        if (paymentMethod?.token) {
          console.log("dataa", data);
          const data = {
            amount: route?.params?.amount,
            token: paymentMethod?.token?.id,
          };
          dispatch(makePaymentViaCard(data));
          setStep(step+1)
        }
      } catch (error) {
        showToast(error);
      }
    }
    console.log(paymentMethod, 'paymentMethod');
  };

  const goNext = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    if (step == 2) {
    
      if (paymentMethod) {
        // setStep(2)
        console.log('if step 2,', paymentMethod);
        handleDetails();

      } else {
        console.log("else", paymentMethod);
        setStep(step + 1);
      }
    }
    else if (step == 3) {
      setStep(3);
      handleCheckout();
      props.navigation.navigate('OrderAcceptedScreen');
      props.navigation.reset({
        index: 0,
        routes: [{ name: 'OrderAcceptedScreen' }],
      });
    }
    else if (step == 1) {
      if (
        streetAddress1 == '' ||
        city == '' ||
        stateRegion == '' ||
        country == ''
      ) {
        showToast('Please fill the fields');
      } else {
        setStep(step + 1);
      }
    }
  };

  // console.log(checkoutState, 'checkoutState');

  const goBack = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    if (step == 1) {
      // setStep(1);
      props.navigation.goBack()
    } else {
      setStep(step - 1);
    }
  };

  const handleChangeAddress = () => {
    setStep(1);
  };

  const handleChangeCardDetails = () => {
    setStep(2);
  };

  const handleChecked = () => {
    setChecked(!checked);
  };

  const renderSteps = () => {
    if (step == 1) {
      return (
        <View style={styles.stepsView}>
          <Image source={generalImages.step1} style={styles.stepsImageStyle} />
        </View>
      );
    }

    if (step == 2) {
      return (
        <View style={styles.stepsView}>
          <Image source={generalImages.step2} style={styles.stepsImageStyle} />
        </View>
      );
    }

    if (step == 3) {
      return (
        <View style={styles.stepsView}>
          <Image source={generalImages.step3} style={styles.stepsImageStyle} />
        </View>
      );
    }
  };

  const renderBillingInformation = () => {
    if (step == 1) {
      return (
        <View style={styles.billingContainer}>
          <TouchableOpacity onPress={handleChecked} style={styles.checkedView}>
            <Image
              source={checked ? icons.circleChecked : icons.circleUnchecked}
              style={styles.checkedStyle}
            />
          </TouchableOpacity>

          <View style={styles.billingAlertView}>
            <TextWrapper style={styles.billingAlertTextStyle}>
              Billing address is the same as delivery address
            </TextWrapper>
          </View>
        </View>
      );
    }
  };
  const renderInputFields = () => {
    if (step == 1) {
      return (
        <View>
          <CheckoutInput
            title="Street 1"
            placeholdText="Enter Street Address"
            value={streetAddress1}
            onChangeText={text => setStreedAddress1(text)}
          />
          <CheckoutInput
            title="Street 2"
            placeholdText="Enter Street Address"
            value={streetAddress2}
            onChangeText={text => setStreetAddress2(text)}
          />
          <CheckoutInput
            title="City"
            placeholdText="Enter City"
            value={city}
            onChangeText={text => setCity(text)}
          />
          <View style={styles.stateCountryView}>
            <CheckoutInput
              title="State"
              placeholdText="Enter State"
              customTextInputView={styles.customTextInputView}
              customTextInputStyle={styles.customTextInputStyle}
              value={stateRegion}
              onChangeText={text => setStateRegion(text)}
            />
            <CheckoutInput
              title="Country"
              placeholdText="Enter Country"
              customTextInputView={styles.customTextInputView}
              customTextInputStyle={styles.customTextInputStyle}
              value={country}
              onChangeText={text => setCountry(text)}
            />
          </View>
        </View>
      );
    }

    if (step == 2) {
      return (
        <View>
          <View style={styles.cardsView}>
            {/* <TouchableOpacity style={styles.cardButtonView}>
              <Image style={styles.cardIconView} source={icons.paypal} />
            </TouchableOpacity> */}

            <TouchableOpacity
              onPress={() => setPaymentMethod(false)}
              style={[
                styles.cardButtonView,
                {
                  backgroundColor: paymentMethod
                    ? 'transparent'
                    : theme.activeTextInputColor,
                  borderColor: paymentMethod
                    ? theme.borderBottomDefaultColor
                    : theme.whiteBackground,
                },
                // {backgroundColor: theme.activeTextInputColor},
              ]}>
              <Image
                style={[
                  styles.cardIconView,
                  {
                    tintColor: paymentMethod
                      ? theme.borderBottomDefaultColor
                      : theme.whiteBackground,
                  },
                ]}
                source={icons.checkoutCard}
              />
              <TextWrapper
                style={{
                  // justifyContent: 'center',
                  // alignItems: 'center',
                  // alignSelf: 'center',
                  marginTop: 2 * vh,
                  fontSize: 1.8 * vh,
                  // color: theme.borderBottomDefaultColor,
                  color: paymentMethod
                    ? theme.borderBottomDefaultColor
                    : theme.whiteBackground,
                }}>
                Cash on Delivery
              </TextWrapper>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setPaymentMethod(true)}
              style={[
                styles.cardPayButtonView,
                {
                  backgroundColor: paymentMethod
                    ? theme.activeTextInputColor
                    : 'transparent',
                  borderColor: paymentMethod
                    ? theme.whiteBackground
                    : theme.borderBottomDefaultColor,
                },
              ]}>
              <Image
                style={[
                  styles.cardIconView,
                  {
                    tintColor: paymentMethod
                      ? theme.whiteBackground
                      : theme.borderBottomDefaultColor,
                  },
                ]}
                source={icons.wallet}
              />
              <TextWrapper
                style={{
                  // justifyContent: 'center',
                  // alignItems: 'center',
                  // alignSelf: 'center',
                  marginTop: 2 * vh,
                  fontSize: 1.8 * vh,
                  // color: theme.borderBottomDefaultColor,
                  color: paymentMethod
                    ? theme.whiteBackground
                    : theme.borderBottomDefaultColor,
                }}>
                Card Pay
              </TextWrapper>
            </TouchableOpacity>
          </View>

          {paymentMethod && (
            <>
              <CheckoutInput
                title="Name on Card"
                value={cardHoldersName}
                onChangeText={v => setCardHoldersName(v)}
                placeholdText="Enter Card Holder's Name"
              />

              <View>
                <CardField
                  // postalCodeEnabled={true}
                  placeholder={{
                    number: '4242 4242 4242 4242',
                  }}
                  cardStyle={{
                    backgroundColor: Platform.OS === 'android' ? null : '#fff',
                    textColor: Platform.OS === 'android' ? null : '#000',
                  }}
                  style={{
                    width: '100%',
                    height: 50,
                    marginVertical: 30,
                  }}
                  onCardChange={cardDetails => {
                    setCard(cardDetails);
                    console.log('card details', cardDetails);
                  }}
                  onFocus={focusedField => {
                    // console.log('focusField', focusedField);
                  }}
                />
              </View>
              {/* <View style={styles.billingContainer}>
                <TouchableOpacity
                  onPress={handleChecked}
                  style={styles.checkedView}>
                  <Image
                    source={
                      checked ? icons.circleChecked : icons.circleUnchecked
                    }
                    style={styles.checkedStyle}
                  />
                </TouchableOpacity>

                <View style={styles.billingAlertView}>
                  <TextWrapper style={styles.billingAlertTextStyle}>
                    Save this card details
                  </TextWrapper>
                </View>
              </View> */}
            </>
          )}
          {/* <CheckoutInput
            credit={true}
            title="Card Number"
            value={card}
            onChangeText={v => setCard(v)}
            placeholdText="Enter Card Number"
          />
          <View style={styles.stateCountryView}>
            <CheckoutInput
              title="Expiry Date"
              placeholdText="09/20"
              customTextInputView={styles.customTextInputView}
              customTextInputStyle={styles.customTextInputStyle}
            />
            <CheckoutInput
              title="CVV"
              placeholdText="467"
              customTextInputView={styles.customTextInputView}
              customTextInputStyle={styles.customTextInputStyle}
            />
          </View> */}
        </View>
      );
    }

    if (step == 3) {
      return (
        <View style={styles.summaryView}>
          <TextWrapper style={styles.summaryTextStyle}>Summary</TextWrapper>
          {renderCartItemsList()}
          <View style={styles.mainCardDetailsView}>
            {/* <View style={styles.shippingAddressHeadingView}>
              <TextWrapper style={styles.shippingAddressHeadingTextStyle}>
                Shipping Price
              </TextWrapper>
              <TextWrapper style={styles.shippingCostTextStyle}>
                $10.00
              </TextWrapper>
            </View> */}

            <View style={styles.shippingAddressHeadingView}>
              <TextWrapper style={styles.shippingAddressHeadingTextStyle}>
                Shipping Address
              </TextWrapper>
              <Image
                source={icons.circleChecked}
                style={styles.shippingCheckedCircleStyle}
              />
            </View>

            <TextWrapper numberOfLines={2} style={styles.textDescriptionStyle}>
              {streetAddress1
                ? streetAddress1 + ',' + streetAddress2
                : 'No address added'}
            </TextWrapper>

            <TouchableOpacity
              onPress={handleChangeAddress}
              style={styles.changeButtonView}>
              <TextWrapper style={styles.changeTextStyle}>Change</TextWrapper>
            </TouchableOpacity>
          </View>
          <View style={styles.mainPaymentView}>
            <View style={styles.shippingAddressHeadingView}>
              <TextWrapper style={styles.shippingAddressHeadingTextStyle}>
                Payment
              </TextWrapper>
            </View>

            <View style={styles.paymentDetailsView}>
              <View style={styles.cardImageView}>
                <Image
                  style={styles.creditCardStyle}
                  source={icons.creditCard}
                />
              </View>
              <View style={styles.cardTextView}>
                <TextWrapper style={styles.masterCardTextStyle}>
                  Master Card
                </TextWrapper>
                <TextWrapper style={styles.cardNumberTextStyle}>
                  **** **** **** {card?.last4 ? card.last4 : "4242"}
                  {/* 4543 */}
                </TextWrapper>
              </View>
              <View style={styles.checkView}>
                <Image
                  source={icons.circleChecked}
                  style={styles.checkedStyle}
                />
              </View>
            </View>

            <TouchableOpacity
              onPress={handleChangeCardDetails}
              style={styles.changeButtonView}>
              <TextWrapper style={styles.changeTextStyle}>Change</TextWrapper>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  };

  const renderCartItem = ({ item }) => {
    return (
      <View style={styles.itemsView}>
        <View style={styles.miniItemView}>
          <Image
            source={{ uri: item.product_image }}
            style={styles.dressImageStyle}
          />
          <TextWrapper style={styles.dressNameStyle}>
            {item.product_name}
          </TextWrapper>
          <TextWrapper style={styles.amountTextStyle}>
            ${item.product_price}
          </TextWrapper>
        </View>
      </View>
    );
  };

  const renderCartItemsList = () => {
    return (
      <View style={styles.cartItemsListStyle}>
        <FlatList
          horizontal={true}
          data={cartItems}
          // data={products}
          renderItem={renderCartItem}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  };

  const renderNextButtons = () => {
    return (
      <View style={styles.buttonsView}>
        <SubmitButton
          onPress={goBack}
          textStyle={styles.textStykeBackButton}
          style={styles.backButtonStyle}
          title="BACK"
        />

        <SubmitButton
          onPress={goNext}
          style={styles.nextButtonStyle}
          title="Next"
        />
      </View>
    );
  };

  return (
    <ScrollWrapper
      avoidKeyboard={true}
      style={styles.scroll}
      contentContainerStyle={styles.content}>
      {/* {renderSearchHeader()} */}
      <SearchHeader tintColor={theme.defaultBackgroundColor} title="Checkout" />
      {renderSteps()}
      {renderBillingInformation()}
      {renderInputFields()}
      {renderNextButtons()}
    </ScrollWrapper>
  );
};
export default CheckoutScreen;
