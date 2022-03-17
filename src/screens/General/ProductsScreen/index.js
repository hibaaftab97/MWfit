import React, { useEffect, useState } from 'react';

import { FlatList, View } from 'react-native';

import ScrollWrapper from '../../../components/Containers/ScrollWrapper';

import SearchHeader from '../../../components/Headers/SearchHeader';

import styles from './styles';
import theme from '../../../utils/theme';

import ProductsContainer from '../../../components/Containers/ProductsContainer';

import { useProductsHook } from '../../../hooks/useProductsHook';
import { vh, vw } from '../../../units';
import { getProducts, getProductsByCategory } from '../../../redux/actions/productsActions';
import { useDispatch } from 'react-redux';

const ProductsScreen = props => {
  const [pageNo, setPageNo] = useState(1);
  const [products, setProducts] = useState([]);
  const [extraDataState, setExtraDataState] = useState([]);

  const [listProductsState, listProductsFunc] = useProductsHook();
  const [productsList, setProductsList] = useState();
  const dispatch = useDispatch();

  console.log(
    props?.route?.params?.categoryId,
    'ProductsScreenProductsScreen',
  );

  useEffect(() => {
    handleOnGetProducts()
  }, []);

  const handleOnGetProducts = () => {
    if (props?.route?.params?.categoryId) {
      console.log('ididid');
      dispatch(getProductsByCategory(props?.route?.params?.categoryId, pageNo)).then((response) => {
        console.log(response, 'responseProductsReponse')
        if (Array.isArray(response)) {
          console.log(response, 'responseresponseresponseresponse')
          const newProducts = [...products, ...response]

          setPageNo(pageNo + 1);
          setProducts(newProducts)

        }
      }).catch(e => {
        console.log(e, 'error');
      })
    } else {
      console.log('withoutidid')
      dispatch(getProducts(pageNo)).then((response) => {
        console.log(response, 'responseProductsReponse')
        if (Array.isArray(response)) {
          console.log(response, 'responseresponseresponseresponse')
          const newProducts = [...products, ...response]
          setPageNo(pageNo + 1);
          setProducts(newProducts)
        }
      }).catch(e => {
        console.log(e, 'error');
      })
    }
  };

  console.log(products, 'productsproductsproductsproducts')


  const renderProductItem = ({ item }) => {
    return (
      <View style={styles.containerStyle}>
        <ProductsContainer data={item} />
      </View>
    );
  };

  const listProducts = () => {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={products}
          renderItem={renderProductItem}
          initialNumToRender={10}
          numColumns={2}
          keyExtractor={(item, index) => item.id + index + Math.random()}
          style={styles.listView}
          initialNumToRender={10}
          onEndReached={() => handleOnGetProducts()}
          key={'hel'}
        />
      </View>
    );
  };

  return (
    <View style={styles.scroll} >
      <SearchHeader
        title={
          props?.route?.params?.categoryName
            ? props?.route?.params?.categoryName
            : 'Products'
        }
        tintColor={theme.defaultBackgroundColor}
      />
      {listProducts()}
    </View>
  );
};
export default ProductsScreen;
