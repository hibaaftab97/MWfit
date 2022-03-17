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
    aboutUsFunc();
  }, []);

  console.log(aboutUsState, 'aboutUsFunc');
  const renderContent = () => {
    return (
      <View style={styles.contentView}>
        <View style={styles.contentViewStyle}>
          <TextWrapper style={styles.descriptionContentView} numberOfLines={10}>
            {aboutUsState}
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
