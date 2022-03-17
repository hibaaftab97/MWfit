import React from 'react';
import { View } from 'react-native';

import ScrollWrapper from '../../../components/Containers/ScrollWrapper';
import TextWrapper from '../../../components/TextWrapper';
import SearchHeader from '../../../components/Headers/SearchHeader';
import { WebView } from 'react-native-webview';

import styles from './styles';
import { vh, vw } from '../../../units';
import MainContainer from '../../../components/Containers/MainContainer';

const TermsConditionScreen = props => {
  const renderOrderAcceptedView = () => {
    return (
      <View style={styles.mainView}>
        <View style={styles.contentViewStyle}>

          <TextWrapper style={styles.descriptionContentView} numberOfLines={20}>
            This privacy policy sets out how “Armario Perfecto” uses and protects any information you give us when using this website. We are committed to making sure that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, you can be assured that it will only be used according to this privacy statement. We may change this policy from time to time by updating this page.
          </TextWrapper>

          <TextWrapper style={styles.textHeadingViewStyle}>What “Armario Perfecto” does not collect.</TextWrapper>

          <TextWrapper style={styles.descriptionContentView} numberOfLines={20}>
            We do not keep or retain any payment info associated with any credit or debit cards. We do not even have access to your payment methods. They are processed through a highly secure 3rd party processor that encrypts the data and keeps it secure.          </TextWrapper>

          <TextWrapper style={styles.textHeadingViewStyle}>What “Armario Perfecto” collects?</TextWrapper>


          <TextWrapper style={styles.descriptionContentView} numberOfLines={20}>
            We may collect the following information:
          </TextWrapper>

          <View style={{ flexDirection: 'row' }}>
            <TextWrapper>{'\u2022'}</TextWrapper>
            <TextWrapper numberOfLines={2} style={styles.bulletPointTextStyle}>Your name</TextWrapper>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <TextWrapper>{'\u2022'}</TextWrapper>
            <TextWrapper numberOfLines={2} style={styles.bulletPointTextStyle}>Your contact information including email address</TextWrapper>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <TextWrapper>{'\u2022'}</TextWrapper>
            <TextWrapper numberOfLines={2} style={styles.bulletPointTextStyle}>Your demographic information such as postcode, preferences and interests</TextWrapper>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <TextWrapper>{'\u2022'}</TextWrapper>
            <TextWrapper numberOfLines={2} style={styles.bulletPointTextStyle}>other information relevant to customer surveys and/or offers</TextWrapper>
          </View>

          <TextWrapper style={styles.descriptionContentView} numberOfLines={20}>
            Cookies: a cookie is a small file which asks permission to be placed on your computer’s hard drive. Once you agree, the file is added and the cookie helps analyze web traffic or lets you know when you visit a particular site. Cookies allow web applications to respond to you as an individual. The web application can tailor its operations to your needs, likes and dislikes by gathering and remembering information about your preferences.
            We use traffic log cookies to identify which pages are being used. This helps us analyze data about web page traffic and improve our website in order to tailor it to customer needs. We only use this information for statistical analysis purposes and then the data is removed from the system.
            Overall, cookies help us provide you with a better website, by enabling us to monitor which pages you find useful and which you do not. A cookie in no way gives us access to your computer or any information about you, other than the data you choose to share with us. You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. This may prevent you from taking full advantage of the website.
            We also use personally identifiable information that you provide to us and information about your order. This may be combined with other personally identifiable information (such as demographic information and past purchase history) available from our records and other sources. We also use Pixel Tags to collect additional information regarding your browsing experience. This information will be used to make our future marketing efforts more efficient and to provide you with a more relevant
            and timelier brand and shopping experience. This information may also be shared with our third-party service providers that assist us with our marketing efforts and with other marketers whose products or services we feel may be of interest to you.
          </TextWrapper>

          <TextWrapper style={styles.textHeadingViewStyle}>What “Armario Perfecto” does with the information?</TextWrapper>

          <TextWrapper style={styles.descriptionContentView} numberOfLines={20}>
            We require this information to understand your needs and provide you with a better service, and in particular for the following reasons:
          </TextWrapper>


          <TextWrapper style={styles.textHeadingViewStyle}>Internal Record Keeping.</TextWrapper>

          <TextWrapper style={styles.descriptionContentView} numberOfLines={50}>
            We may use the information to improve our products and services.
            We may periodically send promotional emails about new products, special offers or other information which we think you may find interesting using the email address which you have provided.
            From time to time, we may also use your information to contact you for market research purposes. We may contact you by email, phone, fax or mail. We may use the information to customize the website according to your interests.
          </TextWrapper>

          <TextWrapper style={styles.textHeadingViewStyle}>Security.</TextWrapper>

          <TextWrapper style={styles.descriptionContentView} numberOfLines={50}>
            We are committed to ensuring that your information is secure. In order to prevent unauthorized access or disclosure, we have put in place suitable physical, electronic and managerial procedures to safeguard and secure the information we collect online.
          </TextWrapper>

          <TextWrapper style={styles.textHeadingViewStyle}>Links to Other Websites.</TextWrapper>

          <TextWrapper style={styles.descriptionContentView} numberOfLines={50}>
            Our website may contain links to other websites of interest. However, once you have used these links to leave our site, you should note that we do not have any control over that other website. Therefore, we cannot be responsible for the protection and privacy of any information which you provide whilst visiting such sites and such sites are not governed by this privacy statement. You should exercise caution and look at the privacy statement applicable to the website in question.

            “Armario Perfecto” will not sell, distribute or lease your personal information to third parties unless we have your permission or are required by law to do so. We may use your personal information to send you promotional information based on direct marketing of “Armario Perfecto” products or other products we sell on our site. If you have previously agreed to us using your personal information for direct marketing purposes, you may change your mind at any time by emailing us.
          </TextWrapper>
        </View>
      </View>
    );
  };

  return (
    <ScrollWrapper style={styles.scroll} contentContainerStyle={styles.content}>
      <SearchHeader
        style={styles.headerStyle}
        type="drawer"
        title="Privacy Policy"
      />
      {renderOrderAcceptedView()}

    </ScrollWrapper>

  );
};
export default TermsConditionScreen;
