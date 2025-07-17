import React from 'react';
import styled, { keyframes } from 'styled-components';
import { fadeIn, slideInUp } from 'react-animations';
import Footer from '../components/Footer';
import Header from '../components/Header';

// Animations
const fadeInAnimation = keyframes`${fadeIn}`;
const slideInUpAnimation = keyframes`${slideInUp}`;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  box-sizing: border-box;
  color: #2d2d2d;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  color: #2c3e50;
  animation: 1s ${fadeInAnimation};
`;

const Section = styled.div`
  margin-top: 2rem;
  animation: 1s ${slideInUpAnimation};

  h2 {
    font-size: 1.5rem;
    color: #34495e;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    color: #7f8c8d;
    line-height: 1.6;
    margin-bottom: 1rem;
  }
`;

const TermsPage = () => {
  return (
    <>
    
      <Container>
        <Title>General Terms & Conditions</Title>

        <Section>
          <h2>Acceptance of General Terms & Conditions</h2>
          <p>
            Thank you for visiting www.vistaprint.in (“Site”). Please read these General Terms and Conditions (“Terms”) carefully. In these Terms, the term "you", “your” refers to the user or viewer of the Site and the terms “VistaPrint”, “our”, “us”, “we” refers to Cimpress India Private Limited, a company incorporated under the laws of India and includes its affiliates. These Terms govern your access and use of this Site, which is hosted by Cimpress India Private Limited, a company incorporated under the provisions of the Companies Act, 1956 with its registered office at ‘C Block’ Voltas Premises, T.B. Kadam Marg, Chinchpokli, Mumbai-400033.
          </p>
          <p>
            By accessing and/or using this Site, you confirm that you are competent to contract under the relevant local laws and that you agree to be bound by these Terms and to any additional guidelines, restrictions, or rules that may be posted in connection with specific sections or services of this Site. All such additional posted guidelines, restrictions, or rules are hereby incorporated by reference into these Terms. VistaPrint reserves the right to make changes to the Site and/or update these Terms at its discretion at any time without prior notice. Any change or modification to the Terms will be effective from the date of such update on the Site. Your continued use of the Site following the modifications to the Terms constitutes your acceptance of the modified Terms.
          </p>
          <p>
            You further agree that we may provide all legal communications and notices to you electronically by posting them on our Site or, at our election, by sending an e-mail to the e-mail address provided by you to us when you registered on our Site. You may withdraw your consent to receive communications from us electronically by contacting customer care. However, if you withdraw your consent to receive our communications electronically, you must discontinue your use of your account.
          </p>
        </Section>

        <Section>
          <h2>Eligibility to Use</h2>
          <p>
            Use of the Site is available only to such persons who can legally contract under Indian Contract Act, 1872. Persons who are "incompetent to contract" within the meaning of the Indian Contract Act, 1872, including minors, un-discharged insolvents etc. shall not be eligible to use the Site.
          </p>
          <p>
            Any minor desirous to use or transact on the Site, is required to conduct such transaction only through their legal guardian or parents.
          </p>
          <p>
            By accepting the Terms or using or transacting on the Site, you irrevocably declare and undertake that you are of legal age i.e., 18 years or older, of sound mind, and capable of entering a binding contract and such usage shall be deemed to form a contract between the Site and such User to the extent permissible under applicable laws.
          </p>
        </Section>

        <Section>
          <h2>NQA/Product Related Issues:</h2>
          <p>
          Any issues with the Product will need to be highlighted to our customer care within 15 days of receiving your order. Vistaprint is entitled to deny any claims beyond this reasonable period.
          </p>
        
        </Section>

        <Section>
          <h2>Return Pickup</h2>
          <p>
          Once you raise any issue about the Product delivered to our customer care team, we will ensure a quick, easy and seamless refund. You may be requested to return the Product in question as a prerequisite for processing refund. We will perform a simple quality check once we receive the Product back to our warehouse, before processing the refund.
          </p>
          <p>
          We make three attempts to pick up the item, if the item is not picked up in the third attempt, Pickup request will be marked as failed. You can initiate a new request, if item meets the criteria and is within the specified return/exchange period. For more details, please call our customer care.
          </p>
        
        </Section>
      
       
      </Container>
      <Footer />
    </>
  );
};

export default TermsPage;