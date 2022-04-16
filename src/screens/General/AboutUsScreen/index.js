import React, { useEffect } from 'react';
import { View } from 'react-native';

import TextWrapper from '../../../components/TextWrapper';

import styles from './styles';

import SearchHeaderWithBackground from '../../../components/Headers/SearchHeaderWithBackground';
import MainContainer from '../../../components/Containers/MainContainer';

import { useAboutUsHook } from '../../../hooks/useAboutUsHook';

const AboutUsScreen = props => {
  const [aboutUsState, aboutUsFunc] = useAboutUsHook();
  useEffect(() => {
    // aboutUsFunc();
  }, []);

  console.log(aboutUsState, 'aboutUsFunc');
  const renderContent = () => {
    return (
      <View style={styles.contentView}>
        <View style={styles.contentViewStyle}>
          <TextWrapper style={styles.descriptionContentView} numberOfLines={10}>
          I started my journey with the tejecote root July 2018. I was overweight and extremely depressed. My friend told me her friend knew of a weight loss supplement that she wanted to try and I asked if she would get me one as well. To my extreme surprise, I was able to lose 20 lbs in 3 months and 45 lbs in total since then. I started sharing my journey on YouTube because I knew there were other’s who could benefit like I did. Then, through networking was offered to become a distributor. I love hearing success stories from my clients and am so happy it has helped other’s on their weight loss journey.


          </TextWrapper>
        </View>
      </View>
    );
  };

  return (
    <MainContainer>
      <SearchHeaderWithBackground type='drawer' />
      {renderContent()}
    </MainContainer>
  );
};
export default AboutUsScreen;
