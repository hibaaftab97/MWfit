import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import TextWrapper from '../../../components/TextWrapper';
import styles from './styles';
import {generalImages, icons} from '../../../assets/images';
import theme from '../../../utils/theme';
import {DrawerActions, useNavigation} from '@react-navigation/native';

const SearchHeader = props => {
  const navigation = useNavigation();
  const renderHeaderButton = () => {
    if (props.type === 'drawer') {
      return (
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          style={styles.drawerButtonView}>
          <Image source={icons.drawer} style={styles.drawerIconStyle} />
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.drawerButtonView}>
          <Image
            source={icons.leftArrow}
            style={[
              styles.drawerIconStyle,
              {
                tintColor: props?.tintColor
                  ? props?.tintColor
                  : theme.whiteBackground,
              },
            ]}
          />
        </TouchableOpacity>
      );
    }
  };
  return (
    <View style={styles.searchView}>
      {renderHeaderButton()}
      <TextWrapper
        numberOfLines={2}
        style={[styles.searchTextStyle, props.style]}>
        {props.title}
      </TextWrapper>

      <View style={styles.searchIconsView}>
        <TouchableOpacity
          onPress={props.onPress}
          style={styles.searchIconButtonView}>
          {props.filter ? (
            <Image style={styles.searchIconStyle} source={icons.filter} />
          ) : null}
          {/* <Image style={styles.searchIconStyle} source={icons.search} /> */}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchHeader;
