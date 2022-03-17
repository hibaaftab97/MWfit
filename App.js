import React from 'react';
import {Platform, StatusBar, StyleSheet, UIManager, View} from 'react-native';
import Navigator from './src/navigation/index';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/src/integration/react';
import {store, persistor} from './src/redux/store';
import Loader from './src/components/Loader';
import theme from './src/utils/theme';
import {StripeProvider} from '@stripe/stripe-react-native';
import CheckoutScreen from './src/screens/General/CheckoutScreen';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const App = props => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <View style={styles.container}>
          <StatusBar
            // barStyle="light-content"
            backgroundColor={theme.defaultBackgroundColor}
            translucent={true}
          />
          <Loader />
          <StripeProvider
            publishableKey="pk_live_51JN0KgHv8j4ydkf4TLdkINrbFsZdO6R0g2Znso8MenDscIiKPkhlOfMAFA0c3SjDsuX0hBq9kl8vZfNYQPHnJlUk00GyHiB1OF"
            urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
            merchantIdentifier="merchant.ArmarioPerfecto" // required for Apple Pay
          >
            <Navigator />
          </StripeProvider>
          {/* <CheckoutScreen /> */}
        </View>
      </PersistGate>
    </Provider>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
