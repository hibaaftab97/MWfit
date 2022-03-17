import React, { useState } from 'react';
import { View, Dimensions, LayoutAnimation, ImageBackground } from 'react-native';
import { generalImages } from '../../../assets/images/index';
import MainContainer from '../../../components/Containers/MainContainer';
import ScrollWrapper from '../../../components/Containers/ScrollWrapper';
import TextWrapper from '../../../components/TextWrapper';
import SubmitButton from '../../../components/Buttons/SubmitButton';
import SliderContainer from '../../../components/Containers/SliderContainer';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import styles from './styles';
import { vh, vw } from '../../../units';
import { ScrollView } from 'react-native-gesture-handler';

const WelcomeScreen = props => {
  const data = [
    {
      id: 1,
      image: generalImages.welcome1,
    },

    {
      id: 2,
      image: generalImages.welcome2,
    },
  ];
  const windowWidth = Dimensions.get('window').width;

  const [activeSlide, setActiveSlide] = useState(0);
  const _renderItem = ({ item, index }) => {
    return (
      <View style={styles.sliderView}>
        <SliderContainer data={item} />
      </View>
    );
  };

  const pagination = () => {
    return (
      <Pagination
        dotsLength={data.length}
        activeDotIndex={activeSlide}
        containerStyle={styles.containerStylePagination}
        dotStyle={styles.dotStylePagination}
        inactiveDotStyle={styles.inactiveDotStylePagination}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  };

  const renderSlideBanner = () => {
    // LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
    return (
      <View style={styles.sliderStyle}>
        <Carousel
          data={data}
          renderItem={_renderItem}
          sliderWidth={windowWidth + 1}
          itemWidth={100 * vw}
          layout="default"
          onSnapToItem={index => setActiveSlide(index)}
        />
        {pagination()}
      </View>
    );
  };

  const renderButtons = () => {
    if (activeSlide == 0) {
      return (
        <View style={styles.mainButtonsView}>
          <TextWrapper style={styles.headingFirstTextStyle}>
            Looks Good, Feel Good
          </TextWrapper>

          <SubmitButton
            onPress={() => props.navigation.navigate('SignupScreen')}
            style={styles.submitFirstButtonView}
            title="Start Exploring"
          />
        </View>
      );
    }
    if (activeSlide == 1) {
      return (
        <View style={styles.mainButtonsView}>
          <TextWrapper style={styles.headingTextStyle}>
            Let's Get Started
          </TextWrapper>

          <SubmitButton
            onPress={() => props.navigation.navigate('SignupScreen')}
            style={styles.submitButtonView}
            title="Have An Account? Login"
          />
          <SubmitButton
            onPress={() => props.navigation.navigate('SignupScreen')}
            style={styles.submitAlternateButtonView}
            textStyle={styles.textStyleAlternate}
            title="Join Us, It's Free"
          />
        </View>
      );
    }
  };
  return (
    <MainContainer source={'none'}>
      {/* <ScrollWrapper> */}
      {renderSlideBanner()}
      {renderButtons()}
      {/* </ScrollWrapper> */}
    </MainContainer>
  );
};
export default WelcomeScreen;
