import React from 'react';
import { View } from 'react-native';
import theme from '../../utils/theme';

import TextWrapper from '../TextWrapper';
import SubmitButton from '../../components/Buttons/SubmitButton';

import styles from './styles';

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
const ViewOrderCard = props => {
  let tempDate = new Date(props?.data?.date_created);

  return (
    <View
      key={props?.index}
      style={[
        styles.mainScreenView,
        { backgroundColor: theme.defaultTextColor },
      ]}>
      <View style={styles.cardView}>
        <View >
          <TextWrapper
            style={[styles.subjectTextStyle, { color: theme.whiteBackground }]}>
            Order Number
          </TextWrapper>
          <TextWrapper style={styles.valueTextStyle}>
            #{props?.data?.id}
          </TextWrapper>

          <TextWrapper
            style={[
              styles.subjectWithSpaceTextStyle,
              { color: theme.whiteBackground },
            ]}>
            Status
          </TextWrapper>
          <TextWrapper style={styles.valueTextStyle}>
            {props?.data?.status}
          </TextWrapper>

          <TextWrapper
            style={[
              styles.subjectWithSpaceTextStyle,
              { color: theme.whiteBackground },
            ]}>
            Total Price
          </TextWrapper>
          <TextWrapper style={styles.valueTextStyle}>
            {/* {props?.data?.currency} {Math.floor(props?.data?.total).toFixed(2)}{' '} */}
            {props?.data?.total}{' '}
            For {props?.data?.line_items.length} Items
          </TextWrapper>
        </View>

        <View>
          <TextWrapper
            style={[styles.subjectTextStyle, { color: theme.whiteBackground }]}>
            Order Date
          </TextWrapper>
          <TextWrapper style={styles.valueTextStyle}>
            {months[tempDate.getMonth()]} {tempDate.getDate()},{' '}
            {tempDate.getFullYear()}
          </TextWrapper>
        </View>
      </View>

      <View style={styles.buttonView}>
        <SubmitButton
          textStyle={styles.textStyle}
          style={styles.buttonStyle}
          onPress={props.onPress}
          title="VIEW ORDER"
        />
      </View>
    </View>
  );
};

export default ViewOrderCard;
