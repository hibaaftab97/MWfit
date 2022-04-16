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
          When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor’s IP address and browser user agent string to help spam detection.

An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available here: https://automattic.com/privacy/. After approval of your comment, your profile picture is visible to the public in the context of your comment.
          </TextWrapper>

          <TextWrapper 
          noOflines={3}
          style={styles.textHeadingViewStyle}>To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.
</TextWrapper>

          <TextWrapper style={styles.descriptionContentView} numberOfLines={20}>
          Several types of goods are exempt from being returned. Perishable goods such as food, flowers, newspapers or magazines cannot be returned. We also do not accept products that are intimate or sanitary goods, hazardous materials, or flammable liquids or gases.
 </TextWrapper>

          <TextWrapper style={styles.textHeadingViewStyle}>Additional non-returnable items:
</TextWrapper>


          <TextWrapper style={styles.descriptionContentView} numberOfLines={20}>
          Gift cards
Downloadable software products
Some health and personal care items
To complete your return, we require a receipt or proof of purchase.
          </TextWrapper>

        

          <TextWrapper style={styles.descriptionContentView} numberOfLines={20}>
            Cookies: If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.

If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.

When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select “Remember Me”, your login will persist for two weeks. If you log out of your account, the login cookies will be removed.

If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day.
          </TextWrapper>

          <TextWrapper style={styles.textHeadingViewStyle}>What “MW FIT” does with the information?</TextWrapper>

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
          If you request a password reset, your IP address will be included in the reset email.
          </TextWrapper>

          <TextWrapper style={styles.textHeadingViewStyle}>Links to Other Websites.</TextWrapper>

          <TextWrapper style={styles.descriptionContentView} numberOfLines={50}>
            Our website may contain links to other websites of interest. However, once you have used these links to leave our site, you should note that we do not have any control over that other website. Therefore, we cannot be responsible for the protection and privacy of any information which you provide whilst visiting such sites and such sites are not governed by this privacy statement. You should exercise caution and look at the privacy statement applicable to the website in question.

            “MW FIT” will not sell, distribute or lease your personal information to third parties unless we have your permission or are required by law to do so. We may use your personal information to send you promotional information based on direct marketing of “MW FIT” products or other products we sell on our site. If you have previously agreed to us using your personal information for direct marketing purposes, you may change your mind at any time by emailing us.
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
