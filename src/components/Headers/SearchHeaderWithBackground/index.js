import React from 'react';
import { ImageBackground, View, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import { generalImages, icons } from '../../../assets/images';
import { vh, vw } from '../../../units';
import theme from '../../../utils/theme';
import TextWrapper from '../../TextWrapper';
import { DrawerActions, useNavigation } from '@react-navigation/native';

const SearchHeaderWithBackground = props => {
  const navigation = useNavigation();
  const renderHeader = () => {
    if (props.type === 'drawer') {
      return (
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          style={styles.rightArrowIconView}>
          <Image source={icons.drawer} style={styles.leftArrowIconStyle} />
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.rightArrowIconView}>
          <Image source={icons.leftArrow} style={styles.leftArrowIconStyle} />
        </TouchableOpacity>
      );
    }
  };
  return (
    <View>
      <ImageBackground
        source={
          props.backgroundImage ? props.backgroundImage : generalImages.aboutus
        }
        style={styles.searchView}
        imageStyle={{
          borderBottomLeftRadius: 15 * vw,
          borderBottomRightRadius: 15 * vw,
        }}>
        <View style={styles.rowContainer}>
          {renderHeader()}
          <TextWrapper style={styles.searchTextStyle}>About Us</TextWrapper>

          <View style={styles.searchIconsView}>
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

        <View style={styles.productNameView}>
          <TextWrapper style={styles.productNameTextStyle}>
            {props.name}
          </TextWrapper>
          <TextWrapper style={styles.productPriceTextStyle}>
            {props.price}
          </TextWrapper>
        </View>
      </ImageBackground>
    </View>
  );
};

export default SearchHeaderWithBackground;
