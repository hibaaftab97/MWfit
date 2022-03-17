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
            Welcome to “Armario Perfecto” If you continue to use this website, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern “Armario Perfecto” relationship with you in relation to this website. If you disagree with any part of these terms and conditions, please refrain from using our website. If you agree to these terms on behalf of an entity or third party on behalf of an entity, you warrant you have the authority to bind the entity to this agreement.

            The term “Armario Perfecto” ‘us’ or ‘we’ refer to the owner of the website. The term ‘you’ ‘Member’ or ‘user’ refers to the user of our website. The terms of service will start as soon as you receive a booking confirmation from us. This sets out the services you will receive from us. You or anyone acting on your behalf agree to these terms of service when you instruct us to carry out the service.
          </TextWrapper>

          <TextWrapper style={styles.textHeadingViewStyle}>Third Party.</TextWrapper>

          <TextWrapper style={styles.descriptionContentView} numberOfLines={20}>
            The use of our service is subject to the following terms of use:
            The content of the pages of this website is for your general information and use only. It is subject to change without notice.
            Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors, and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.
          </TextWrapper>

          <TextWrapper style={styles.textHeadingViewStyle}>Using “Armario Perfecto.”</TextWrapper>


          <TextWrapper style={styles.descriptionContentView} numberOfLines={20}>
            We are not responsible for any financial losses or any other damages caused whatsoever.
          </TextWrapper>

          <View style={{ flexDirection: 'row' }}>
            <TextWrapper>{'\u2022'}</TextWrapper>
            <TextWrapper numberOfLines={2} style={styles.bulletPointTextStyle}>Always agree to the website regulations</TextWrapper>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <TextWrapper>{'\u2022'}</TextWrapper>
            <TextWrapper numberOfLines={2} style={styles.bulletPointTextStyle}>Post anything that breaks our rules including posting inappropriate items</TextWrapper>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <TextWrapper>{'\u2022'}</TextWrapper>
            <TextWrapper numberOfLines={2} style={styles.bulletPointTextStyle}>Sell, rent or sub-license material from the website</TextWrapper>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <TextWrapper>{'\u2022'}</TextWrapper>
            <TextWrapper numberOfLines={2} style={styles.bulletPointTextStyle}>Post any false, incorrect or deliberately misleading information</TextWrapper>
          </View>

          <TextWrapper style={styles.descriptionContentView} numberOfLines={20}>
            By using our website, you agree you are 18 years old or over. If you are under 18 years of age please obtain the permission of your parent or guardian.
            “Armario Perfecto” grants you limited access and use to the website and users must not download, modify, or copy any part of our website including information and content. The user agrees not to collect or store any product information or resell, copy, distribute or sell any part of our website or software.
            To use our site and services you are required to create an account with “Armario Perfecto” and provide certain personal information such as name, email address, and other contact details.
            Any users found breaching our terms of service will have their account terminated with immediate effect.
            Your user content must not be illegal or unlawful, must not infringe any third party’s legal rights, and must not be capable of giving rise to legal action whether against you or us or a third party (in each case under any applicable law).
          </TextWrapper>

          <TextWrapper style={styles.textHeadingViewStyle}>Content.</TextWrapper>

          <TextWrapper style={styles.descriptionContentView} numberOfLines={20}>
            You are completely responsible for the material and content you submit to our website. We are not to be held liable for any content posted nor are we to be held responsible.
            We may monitor and record traffic to our site and collect the following information including but not limited to the IP address of your computer and the website which referred you to our website. We do this, so we can make ongoing improvements on our site based on what our members’ actions are.
            All content including but not limited to pictures, videos, and text are copyrighted by “Armario Perfecto” unless stated. You may not copy, reproduce, distribute, or store any material on our website unless given express written permission by us.
          </TextWrapper>


          <TextWrapper style={styles.textHeadingViewStyle}>Limitation of Liability.</TextWrapper>

          <TextWrapper style={styles.descriptionContentView} numberOfLines={50}>
            “Armario Perfecto” services and all information, materials, content, products and other services included on or otherwise made available to you through the “Armario Perfecto” services are provided by us on an ‘as is’ and ‘as available basis unless other specified.
            “Armario Perfecto” makes no representations or warranties of any kind, express or implied including but not limited to the content, materials, products, software and other services made available to you through “Armario Perfecto” unless otherwise specified in writing.
            We disclaim all warranties, express or implied including but not limited to an implied warranty of merchantability or fitness for particular purpose. We do not guarantee that any materials, information content, products, other services, or anything else made available to you are free of any viruses or any harmful components.
            “Armario Perfecto” or any of its affiliates will not be liable for any damages of any kind arising from the use of our services or from any material, products, content or other services made available to you.
            You hereby indemnify us and undertake to keep us indemnified against any losses, damages, costs, liabilities, and expenses (including without limitation legal expenses and any amounts paid by us to a third party in settlement of a claim or dispute on the advice of our legal advisers) incurred or suffered by us arising out of any breach by you of any provision of these terms and conditions; or arising out of any claim that you have breached any provision of these terms and conditions.
          </TextWrapper>

          <TextWrapper style={styles.textHeadingViewStyle}>Personal Information.</TextWrapper>

          <TextWrapper style={styles.descriptionContentView} numberOfLines={50}>
            We may collect and store your personal information for reasons such as improving our site and making the user experience better. We may use them for advertisement purposes. We will never sell, rent, or give your personal data to any third-party company without your consent.
            If we do, we will only collect personal identification information from users only if they themselves submit such information to us. Users can refuse to supply such information but it may stop them from using certain sites or accessing specific parts of our website.
            We are not to be held responsible for any breaches to our security caused by third party. Keeping your personal information is of the utmost importance to us however we are not to be held liable for any data breaches.
            This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance, and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.
            All trademarks reproduced in this website, which are not the property of, or licensed to the operator, are acknowledged on the website.
            If you opt to sign up to our newsletter, we may use your email address to send you information about our products or services. You do have the option to opt-out of our mailing list and you can ask for personal data to stop being recorded at any time.
            We reserve the right to disclose user information and personal information to law enforcement or authorities should we feel the need to.
            We may suspend your access to our service at any time for any or no reason at all.
            The user agrees to be bound by the “Armario Perfecto” privacy policy which is available here.
          </TextWrapper>

          <TextWrapper style={styles.textHeadingViewStyle}>Force Majeure.</TextWrapper>

          <TextWrapper style={styles.descriptionContentView} numberOfLines={50}>
            “Armario Perfecto” is not liable for any failure or delay in performance or its obligations which is due to the result of any act, event, terrorism act, acts of God, governmental regulations, war, riots, fire, pandemic, flood or anything else which is beyond our control.
          </TextWrapper>

          <TextWrapper style={styles.textHeadingViewStyle}>General.</TextWrapper>
          <TextWrapper style={styles.descriptionContentView} numberOfLines={50}>
            Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense.

            This website may also include links to other websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s). We have no responsibility for the content of the linked website(s).
          </TextWrapper>

          <TextWrapper style={styles.textHeadingViewStyle}>We do not accept any liability or responsibility for any delays caused by third parties.</TextWrapper>
        </View>
      </View>
    );
  };

  return (
    <ScrollWrapper style={styles.scroll} contentContainerStyle={styles.content}>
      <SearchHeader
        style={styles.headerStyle}
        type="drawer"
        title="Terms & Conditions"
      />
      {renderOrderAcceptedView()}

    </ScrollWrapper>

  );
};
export default TermsConditionScreen;
