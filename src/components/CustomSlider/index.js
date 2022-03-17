import React, { useEffect } from 'react';

import { StyleSheet, View, Text } from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import CustomMarker from './CustomMarker';
import CustomLabel from './CustomLabel';
import { vh, vw } from '../../units/index';
import theme from '../../utils/theme';
import TextWrapper from '../TextWrapper';

export default function CustomSlider(props) {
  const [sliderOneChanging, setSliderOneChanging] = React.useState(false);
  const [sliderOneValue, setSliderOneValue] = React.useState([5]);
  const [multiSliderValue, setMultiSliderValue] = React.useState([10, 1000]);
  const [nonCollidingMultiSliderValue, setNonCollidingMultiSliderValue] =
    React.useState([0, 1000]);
  const sliderOneValuesChangeStart = () => setSliderOneChanging(true);

  const sliderOneValuesChange = values => setSliderOneValue(values);

  sliderOneValuesChangeFinish = () => setSliderOneChanging(false);

  multiSliderValuesChange = values => {
    console.log(values, 'values');
    setMultiSliderValue(values);
    const { parentNeedsChildData } = props; //Child here will give data to this parent callback
    parentNeedsChildData(multiSliderValue); //childComponent sends data to parent
  };

  nonCollidingMultiSliderValuesChange = values => {
    setNonCollidingMultiSliderValue(values);
  };

  useEffect(() => {
    if (props.values != null) {
      setMultiSliderValue(props.values);
    }
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.sliders}>
        <View style={styles.valuesView}>
          <TextWrapper style={styles.textStyle}>
            {multiSliderValue[0]} {'-'} {multiSliderValue[1]}
          </TextWrapper>
        </View>
        <MultiSlider
          values={[multiSliderValue[0], multiSliderValue[1]]}
          sliderLength={vw * 75}
          containerStyle={{ alignSelf: 'center' }}
          selectedStyle={{
            backgroundColor: theme.defaultBackgroundColor,
          }}
          unselectedStyle={{
            backgroundColor: '#DEDEDE',
          }}
          onValuesChange={multiSliderValuesChange}
          trackStyle={{
            height: 4,
          }}
          touchDimensions={{
            height: 10,
            width: 10,
            borderRadius: 20,
            slipDisplacement: 40,
          }}
          customMarker={CustomMarker}
          min={10}
          max={1000}
          step={1}
          allowOverlap
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  sliders: {
    width: 280,
  },
  text: {
    alignSelf: 'center',
    paddingVertical: 20,
  },

  valuesView: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    left: 5 * vw,
  },

  textStyle: {
    fontSize: 2 * vh,
    color: theme.activeTextInputColor,
  },
});
