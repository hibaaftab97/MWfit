import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  LayoutAnimation,
  ImageBackground
} from 'react-native';
import { generalImages, icons } from '../../../assets/images';

import ScrollWrapper from '../../../components/Containers/ScrollWrapper';
import TextWrapper from '../../../components/TextWrapper';

import CheckoutInput from '../../../components/TextInputs/CheckoutInput';
import styles from './styles';

import SubmitButton from '../../../components/Buttons/SubmitButton'
import theme from '../../../utils/theme';
import { vw } from '../../../units';

const EditCardsScreen = props => {
  const [checked, setChecked] = useState(true)
  const renderSearchHeader = () => {
    return (
      <View style={styles.searchView}>
        <TextWrapper style={styles.searchTextStyle}>Edit Cards</TextWrapper>

        <View style={styles.searchIconsView}>
          <TouchableOpacity style={styles.searchIconButtonView}>
            <Image style={styles.searchIconStyle} source={icons.search} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const handleChecked = () => {
    setChecked(!checked);
  }

  const renderCardPicture = () => {
    return (
      <ImageBackground imageStyle={{ borderRadius: 5 * vw }} source={generalImages.cardView} style={styles.cardViewStyle}>
        <View style={styles.cardCodeView}>
          <TextWrapper style={styles.codeTextStyle}>4560         5474         3224         4543</TextWrapper>
        </View>


        <View style={styles.cardHoldersDetailsView}>
          <View style={styles.cardHoldersNameView}>
            <TextWrapper style={styles.cardHoldersNameTextStyle}>Card Holder</TextWrapper>
            <TextWrapper style={styles.cardsNameTextStyle}>Jameson Dunn</TextWrapper>
          </View>

          <View style={styles.cardExpirtyView}>
            <TextWrapper style={styles.cardExpiryTextStyle}>Expiry</TextWrapper>
            <TextWrapper style={styles.cardExpirtyDateText}>09 - 20</TextWrapper>
          </View>
        </View>
      </ImageBackground>
    )
  }

  const renderInputFields = () => {
    return (
      <View>
        {renderCardPicture()}

        <CheckoutInput title='Name on Card' value='Jameson Dunn' placeholdText="Enter Card Holder's Name" />
        <CheckoutInput credit={true} title='Card Number' value='4560   5644   3224   4543' placeholdText='Enter Card Number' />
        <View style={styles.stateCountryView}>
          <CheckoutInput title='Expiry Date' placeholdText='09/20' value='09 / 20' customTextInputView={styles.customTextInputView} customTextInputStyle={styles.customTextInputStyle} />
          <CheckoutInput title='CVV' placeholdText='467' value='467' customTextInputView={styles.customTextInputView} customTextInputStyle={styles.customTextInputStyle} />
        </View>

        <View style={styles.billingContainer}>
          <TouchableOpacity onPress={handleChecked} style={styles.checkedView}>
            <Image source={checked ? icons.circleChecked : icons.circleUnchecked} style={styles.checkedStyle} />
          </TouchableOpacity>

          <View style={styles.billingAlertView}>
            <TextWrapper style={styles.billingAlertTextStyle}>Save this card details</TextWrapper>
          </View>
        </View>
      </View>
    )
  }

  const renderNextButtons = () => {
    return (
      <View style={styles.buttonsView}>
        <SubmitButton textStyle={styles.textStykeBackButton} style={styles.backButtonStyle} title='CANCEL' />

        <SubmitButton style={styles.nextButtonStyle} title='Save' />

      </View>
    )
  }



  return (
    <ScrollWrapper style={styles.scroll} contentContainerStyle={styles.content}>
      {renderSearchHeader()}
      {renderInputFields()}
      {renderNextButtons()}
    </ScrollWrapper>
  );
};
export default EditCardsScreen;
