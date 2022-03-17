import React, { useCallback, useState } from 'react';
import { View, FlatList } from 'react-native';

import ScrollWrapper from '../../../components/Containers/ScrollWrapper';
import TextWrapper from '../../../components/TextWrapper';

import SearchHeader from '../../../components/Headers/SearchHeader';

import { useDispatch } from 'react-redux';

import { searchProducts, searchProductsWithFilters } from '../../../redux/actions/productsActions';

import styles from './styles';
import { useFocusEffect } from '@react-navigation/native';

import ProductsContainer from '../../../components/Containers/ProductsContainer';
import { vw } from '../../../units';
import theme from '../../../utils/theme';

const SearchScreen = props => {
  const dispatch = useDispatch();
  // console.log(props?.route?.params, 'propsSearchHERE');

  console.log(props?.route?.params?.ranges, 'newParams');

  const [searchedProduct, setSearchedProduct] = useState(
    props?.route?.params?.item,
  );

  const [minValue, setMinValue] = useState(props?.route?.params?.ranges ? props?.route?.params?.ranges[0] : 1);
  const [maxValue, setMaxValue] = useState(props?.route?.params?.ranges ? props?.route?.params?.ranges[1] : 1000);


  const [products, setProducts] = useState();

  useFocusEffect(
    useCallback(() => {
      if (props?.route?.params?.ranges) {
        console.log('filters')
        dispatch(searchProductsWithFilters(searchedProduct, minValue, maxValue)).then(
          response => {
            setProducts(response);
          },
        );
      } else {
        console.log('search products')
        dispatch(searchProducts(searchedProduct
          // minValue, 
          // maxValue
        )).then(
          response => {
            setProducts(response);
          },
        );
      }
    }, []),
  );

  console.log(products, 'productsWithSearch');

  const renderCategoriesRow = () => {
    return (
      <View style={styles.rowForCategories}>
        <View style={styles.categoriesTextView}>
          <TextWrapper style={styles.categoriesTextStyle}>Results</TextWrapper>
        </View>

        <View style={styles.viewAllTextButtonView}>
          <TextWrapper style={styles.viewAllTextButton}>
            {products?.length ? products?.length : 'No'} Items found
          </TextWrapper>
        </View>
      </View>
    );
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.productsContainerStyle}>
        <ProductsContainer data={item} />
      </View>
    );
  };

  const renderList = () => {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: 10 * vw,
        }}>
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={(item, index) => item.id}
          numColumns={2}
          style={styles.listView}
        />
      </View>
    );
  };

  return (
    <ScrollWrapper style={styles.scroll} contentContainerStyle={styles.content}>
      <SearchHeader
        onPress={() => props.navigation.navigate('FilterScreen')}
        filter={true}
        tintColor={theme.defaultBackgroundColor}
        title="Search"
      />
      {renderCategoriesRow()}
      {renderList()}
    </ScrollWrapper>
  );
};
export default SearchScreen;
