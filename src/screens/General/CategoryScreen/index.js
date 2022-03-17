import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  ImageBackground,
} from 'react-native';
import { generalImages, icons } from '../../../assets/images';

import ScrollWrapper from '../../../components/Containers/ScrollWrapper';
import TextWrapper from '../../../components/TextWrapper';

import styles from './styles';
import { FlatList } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

import SearchHeader from '../../../components/Headers/SearchHeader';
import { getProductsCategories } from '../../../redux/actions/productsActions';
import theme from '../../../utils/theme';

import { useDispatch } from 'react-redux';

const CategoryScreen = props => {
  const dispatch = useDispatch();
  const [pageNo, setPageNo] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    handleOnGetCategories();
  }, []);

  const handleOnGetCategories = () => {
    console.log('handleOnGetCategories categories: ', categories);
    dispatch(getProductsCategories(pageNo)).then((response) => {
      console.log('handleOnGetCategories reponse: ', response);
      if (Array.isArray(response)) {
        const newCategories = [...categories]
        response.map((val) => {
          newCategories.push(val)
        })
        setPageNo(pageNo + 1);
        console.log('handleOnGetCategories updated categories: ', newCategories);
        setCategories(newCategories) //categories.concat(response)
      }
    }).catch(e => {
      console.log(e, 'error');
    })
  };

  console.log(categories, 'categories');

  const renderCategoriesView = ({ item }) => {
    const handleCategoriesImages = () => {
      if (item?.image == null) {
        return generalImages.placeholderImage;
      } else {
        return { uri: item?.image?.src };
      }
    };
    return (
      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate('ProductsScreen', {
            categoryId: item?.id,
            categoryName: item.name,
          })
        }>
        <ImageBackground
          source={handleCategoriesImages()}
          // source={generalImages.categoryBackground2}
          imageStyle={{}}
          style={styles.imageBackgroundStyle}>
          <LinearGradient
            colors={['rgba(0,0,0,0.01)', 'rgba(0,0,0,0.8)']}
            style={styles.linearGradient}>
            <View style={styles.sliderDescriptionView}>
              <View style={styles.sliderTextView}>
                <TextWrapper style={styles.sliderTextStyle} numberOfLines={2}>
                  {item.name}
                </TextWrapper>
              </View>
            </View>
          </LinearGradient>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  const renderCategoriesList = () => {

    return (
      <View style={styles.flatListView}>
        <FlatList
          data={categories}
          initialNumToRender={10}
          renderItem={renderCategoriesView}
          onEndReached={() => handleOnGetCategories()}
          // onEndReached={() => console.log('OnEndReach')}
          // onEndReachedThreshold={0.1}
          keyExtractor={(item, index) => item.id + index + Math.random()}
        />
      </View>
    );
  };

  return (
    // <ScrollWrapper style={styles.scroll} contentContainerStyle={styles.content}>
    <View style={{ flex: 1, alignItems: 'center' }}>
      <SearchHeader tintColor={theme.defaultBackgroundColor} title="Category" />
      {renderCategoriesList()}
    </View>
    // {/* </ScrollWrapper> */ }
  );
};
export default CategoryScreen;
