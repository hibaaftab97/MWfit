import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { generalImages, icons } from '../../../assets/images';
import ScrollWrapper from '../../../components/Containers/ScrollWrapper';
import TextWrapper from '../../../components/TextWrapper';
import SearchHeader from '../../../components/Headers/SearchHeader';
import SubmitButton from '../../../components/Buttons/SubmitButton';

import styles from './styles';
import theme from '../../../utils/theme';
import { vh } from '../../../units';

import CustomSlider from '../../../components/CustomSlider';

const FilterScreen = props => {
  const [ranges, setRanges] = useState();
  const renderCategories = () => {
    return (
      <View style={styles.touchableCategoriesRow}>
        <TouchableOpacity style={styles.touchableButtonView}>
          <TextWrapper
            style={[
              styles.touchableTextStyle,
              {
                color: theme.defaultAuthDescriptionColor,
                fontSize: 1.9 * vh,
              },
            ]}>
            Women
          </TextWrapper>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchableButtonView}>
          <TextWrapper
            style={[
              styles.touchableTextStyle,
              {
                color: theme.defaultAuthDescriptionColor,
                fontSize: 1.9 * vh,
              },
            ]}>
            Men
          </TextWrapper>
        </TouchableOpacity>
      </View>
    );
  };

  const handleTheChildCallBackToParent = values => {
    console.log(values, 'valuesHERECallBack');
    setRanges(values);
  };

  const renderContentView = () => {
    return (
      <View>
        <View style={styles.contentView}>
          <View style={styles.popularityView}>
            <TextWrapper style={styles.mainTextStyle}>Price</TextWrapper>
          </View>

          <View style={styles.dropView}>
            <Image style={styles.dropIconStyle} source={icons.drop} />
          </View>
        </View>

        <CustomSlider parentNeedsChildData={handleTheChildCallBackToParent} />
      </View>
    );
  };

  const renderSubmitButtons = () => {
    return (
      <View style={styles.buttonsView}>
        {/* <SubmitButton
          textStyle={styles.textStyle}
          title="Clear"
          style={styles.clearButtonView}
        /> */}

        <SubmitButton
          onPress={() =>
            props.navigation.navigate('SearchScreen', {
              ranges: ranges,
            })
          }
          title="Apply"
          style={styles.applyButtonView}
        />
      </View>
    );
  };

  return (
    <ScrollWrapper style={styles.scroll} contentContainerStyle={styles.content}>
      <SearchHeader tintColor={theme.defaultBackgroundColor} title="Filter" />
      {/* {renderCategories()} */}
      {renderContentView()}
      {renderSubmitButtons()}
    </ScrollWrapper>
  );
};
export default FilterScreen;
