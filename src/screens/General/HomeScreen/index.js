import React, { useState, useCallback, useEffect } from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  LayoutAnimation,
  ImageBackground,
} from 'react-native';
import ScrollWrapper from '../../../components/Containers/ScrollWrapper';
import TextWrapper from '../../../components/TextWrapper';
import { generalImages, icons } from '../../../assets/images';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { vh, vw } from '../../../units';
import HomeSlider from '../../../components/Containers/HomeSlider';
import WishlistContainer from '../../../components/Containers/WishlistContainer';
import { DrawerActions, useFocusEffect } from '@react-navigation/native';

import { useSelector } from 'react-redux';

import styles from './styles';
import { FlatList } from 'react-native-gesture-handler';

import { useProductsHook } from '../../../hooks/useProductsHook';
import { useProductsCategoriesHook } from '../../../hooks/useProductsCategoriesHook';
import { useHomeDataHook } from '../../../hooks/useHomeDataHook';
import { useFetchProfileHook } from '../../../hooks/useFetchProfileHook';
import { useAddToCartHook } from '../../../hooks/useAddToCartHook';
import theme from '../../../utils/theme';

import LinearGradient from 'react-native-linear-gradient';
import MainContainer from '../../../components/Containers/MainContainer';

const HomeScreen = props => {
  const user = useSelector(state => state.authReducer?.user);
  const cartReducer = useSelector(state => state.cartReducer);

  const [listProducts, listProductsFunc] = useProductsHook();
  const [listProductsCategoriesState, listProductsCategoriesFunc] =
    useProductsCategoriesHook();
  const [homeDataState, homeDataFunc] = useHomeDataHook();
  const [profileState, profileFunc] = useFetchProfileHook();
  const [cartState, addToCartFunc] = useAddToCartHook();


  const slider = [
    {
      id: 1,
      image: generalImages.product,
      description: '100% NATURAL',
      shortdes: "Products"
    },

    {
      id: 2,
      image: generalImages.product,
      description: '100% NATURAL',
      shortdes: "Products"
    },
  ];

  const recommendedData = [
    {
      id: 1,
      image: generalImages.prod1,
      price: '19.99',
      name: 'White Top',

    },

    {
      id: 2,
      image: generalImages.prod1,
      name: 'White Top',
      price: '19.99',

    },
    {
      id: 2,
      image: generalImages.prod1,
      name: 'White Top',
      price: '19.99',

    },
    {
      id: 2,
      image: generalImages.prod1,
      name: 'White Top',
      price: '19.99',

    },
    {
      id: 2,
      image: generalImages.prod1,
      name: 'White Top',
      price: '19.99',

    },
  ];

  useEffect(() => {
    listProductsFunc();
    listProductsCategoriesFunc();
    profileFunc(user);
  }, []);

  const handleAddToCart = item => {
    const data = {
      itemId: item?.id,
      itemName: item?.name,
      itemPrice: item?.price,
      itemQuantity: 1,
      itemImage: item?.images[0]?.src,
    };
    addToCartFunc(data);
  };

  const handleListProducts = () => {
    console.log('handleListProducts', listProducts);
    if (listProducts?.length < 3) {
      return listProducts;
    } else {
      const listOfProducts = listProducts?.slice(0, 3);
      return listOfProducts;
    }
  };

  const windowWidth = Dimensions.get('window').width;

  const [activeSlide, setActiveSlide] = useState(1);

  const renderCategoriesRow = () => {
    return (
      <View style={styles.rowForMainCategories}>
        <View style={styles.categoriesTextView}>
          <TextWrapper style={styles.categoriesTextStyle}>
            Categories
          </TextWrapper>
        </View>

        <TouchableOpacity
          onPress={() => props.navigation.navigate('CatgoriesStack')}
          style={styles.viewAllTextButtonView}>
          <TextWrapper style={styles.viewAllTextButton}>View All</TextWrapper>
        </TouchableOpacity>
      </View>
    );
  };

  const renderCategories = ({ item }) => {
    console.log(item, 'categoriesITEM');
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
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
        }
        style={[
          styles.touchableButtonView,
        ]}>
        <LinearGradient
          colors={['rgba(0,0,0,0.01)', 'rgba(0,0,0,0.8)']}
          style={styles.linearGradient}>
          <Image
            source={handleCategoriesImages()}
            style={styles.displayIconStyle}
          />
          <TextWrapper
            style={[
              styles.textStyle,
              {
                color:
                  item?.image == null
                    ? theme.whiteBackground
                    : theme.whiteBackground,
              },
            ]}>
            {item.name}
          </TextWrapper>
        </LinearGradient>
      </TouchableOpacity>
    );
  };

  const renderListCategories = () => {
    return (
      <View
        style={{
          height: 20 * vh,
          width: 100 * vw,
          bottom: 12 * vh,
          marginLeft: 15 * vw,
          marginHorizontal: 8 * vw,
        }}>
        <FlatList
          data={listProductsCategoriesState}
          renderItem={renderCategories}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => item.id + index + Math.random()}
        />
      </View>
    );
  };

  const renderRecommendedProducts = () => {
    return (
      <View style={styles.rowForArivalCategories}>
        <View style={styles.categoriesTextView}>
          <TextWrapper style={styles.categoriesTextStyle}>
            Our Products
          </TextWrapper>
        </View>

        <TouchableOpacity
          onPress={() => props.navigation.navigate('ProductsScreen')}
          style={styles.viewAllTextButtonView}>
          <TextWrapper style={styles.viewAllTextButton}>View All</TextWrapper>
        </TouchableOpacity>
      </View>
    );
  };

  const _renderItem = ({ item, index }) => {
    
    return (
      <View style={styles.sliderView}>
        <HomeSlider
          onPress={() => props.navigation.navigate('CatgoriesStack')}
          data={item}
        />
       
      </View>
    );
  };

  const pagination = () => {
    return (
      <Pagination
        dotsLength={slider?.length}
        activeDotIndex={activeSlide}
        containerStyle={styles.containerStylePagination}
        dotStyle={styles.dotStylePagination}
        // style={{backgroundColor:'red'}}
        inactiveDotStyle={styles.inactiveDotStylePagination}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  };

  const renderSlideBanner = () => {
    return (
      <View style={{ height: 50 * vh }}>
        <Carousel
          // data={homeDataState} //comment beta
          data={slider}
style={{backgroundColor:'red'}}
          renderItem={_renderItem}
          sliderWidth={windowWidth + 1}
          itemWidth={100 * vw}
          layout="default"
          onSnapToItem={index => setActiveSlide(index)}
          // keyExtractor={(item, index) => item.images + Math.random()}
          keyExtractor={(item, index) => item.id + index + Math.random()}
          loop={true}
          autoplay={true}
        />
        {pagination()}
      </View>
    );
  };
  const renderHeader = () => {
    return (
      <View style={styles.mainHeaderContainer}>
        <TouchableOpacity
          onPress={() =>
            props.navigation.dispatch(DrawerActions.toggleDrawer())
          }>
          <Image style={styles.drawerIconStyle} source={icons.drawer} />
        </TouchableOpacity>
        <TextWrapper style={styles.welcomeTextStyle}>Welcome</TextWrapper>

        <View style={styles.headerContainer}>
          <TextWrapper style={styles.clothingStoreTextStyle}>
            MW Fit LLC
          </TextWrapper>

          <View style={styles.buttonsView}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('TypeSearchScreen')}
              style={styles.headerIconButton}>
              <Image source={icons.search} style={styles.searchIconStyle} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => props.navigation.navigate('BasketScreen')}
              style={styles.headerIconButton}>
              <Image source={icons.cart} style={styles.cartIconStyle} />
              {
                cartReducer?.cartItems?.length > 0 ? <View style={styles.cartBubbleView}>
                  <TextWrapper style={styles.cartBubbleIconStyle}>{cartReducer?.cartItems?.length}</TextWrapper>
                </View> : null
              }

            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => props.navigation.navigate('FilterScreen')}
              style={styles.headerIconButton}>
              <Image source={icons.filter} style={styles.filterIconStyle} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  // const renderRecommended = ({ item }) => { //beta comment
  //   const handleProductImage = () => {
  //     if (item.images[0] == null) {
  //       return generalImages.placeholderImage;
  //     } else {
  //       return { uri: item.images[0].src };
  //     }
  //   };
  //   return (
  //     <View style={styles.mainProductView}>
  //       <TouchableOpacity
  //         style={{
  //           width: 30 * vw,
  //         }}
  //         onPress={() =>
  //           props.navigation.navigate('ProductDetailsScreen', {
  //             params: item.id,
  //           })
  //         }>
  //         <Image
  //           source={handleProductImage()}
  //           style={styles.productImageStyle}
  //         />
  //       </TouchableOpacity>

  //       <View style={styles.cartView}>
  //         <View style={styles.cartTextView}>
  //           <TextWrapper style={styles.cartTextStyle}>{item?.name}</TextWrapper>
  //         </View>
  //         <TouchableOpacity
  //           onPress={() => handleAddToCart(item)}
  //           style={styles.cartGreenView}>
  //           <Image
  //             source={icons.cartGreen}
  //             style={[
  //               styles.cartGreenStyle,
  //               { tintColor: theme.defaultBackgroundColor },
  //             ]}
  //           />
  //         </TouchableOpacity>
  //       </View>

  //       <WishlistContainer data={item} />
  //     </View>
  //   );
  // };

  const renderRecommended = ({ item }) => {
    const handleProductImage = () => {
      if (item.images[0] == null) {
        return generalImages.placeholderImage;
      } else {
        return { uri: item.images[0].src };
      }
    };
    return (
      <View style={styles.mainProductView}>

        <TouchableOpacity
          style={{
            width: 30 * vw,
            // backgroundColor:'#000000'
          }}
          onPress={() =>
            props.navigation.navigate('ProductDetailsScreen', {
              params: item.id,
            })
          }
        >
          <Image
            source={handleProductImage()}
            style={styles.productImageStyle}
          />
        </TouchableOpacity>

        <View style={styles.cartView}>
          <View style={styles.cartTextView}>
            <TextWrapper style={styles.cartTextStyle}>{item?.name}</TextWrapper>
          </View>
          <TouchableOpacity
            onPress={() => handleAddToCart(item)}
            style={styles.cartGreenView}>
            <Image
              source={icons.cartGreen}
              style={[
                styles.cartGreenStyle,
                { tintColor: theme.defaultBackgroundColor },
              ]}
            />
          </TouchableOpacity>
        </View>

        <WishlistContainer data={item} />
      </View>
    );
  };

  const renderRecommendedProductsList = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    return (
      <View style={styles.recommendedProductsView}>
        <FlatList
          data={handleListProducts()} //beta comment
          renderItem={renderRecommended}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => item.id + index + Math.random()}
        />
      </View>
    );
  };

  const renderMostPurchasedProducts = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    return (
      <View style={styles.purchasedProductsView}>
        <FlatList
          data={handleListProducts()} //beta comment
          // data={recommendedData}
          renderItem={renderRecommended}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => item.id + index + Math.random()}
        />
      </View>
    );
  };

  return (
    <ScrollWrapper style={styles.scroll} contentContainerStyle={styles.content}>
      {renderHeader()}
      {renderSlideBanner()}
      {/* {renderCategoriesRow()}
      {renderListCategories()} */}
      {renderRecommendedProducts()}
      {renderRecommendedProductsList()}
      {renderMostPurchasedProducts()}
    </ScrollWrapper>

  );
};
export default HomeScreen;
