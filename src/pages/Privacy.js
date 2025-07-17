import React from 'react';
import styled, { keyframes } from 'styled-components';
import { fadeIn, slideInUp } from 'react-animations';
import Footer from '../components/Footer';
import Header from '../components/Header';

// Animations
const fadeInAnimation = keyframes`${fadeIn}`;
const slideInUpAnimation = keyframes`${slideInUp}`;

// Styled Components
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
  margin-bottom: 1rem;
`;

const UpdatedDate = styled.p`
  text-align: center;
  font-size: 1rem;
  color: #555;
  font-weight: 500;
  margin-bottom: 2rem;
`;

const Section = styled.div`
  margin-top: 2rem;
  animation: 0.8s ${slideInUpAnimation};

  h2 {
    font-size: 1.6rem;
    color: #34495e;
    margin-bottom: 0.75rem;
    font-weight: 600;
  }

  p {
    font-size: 1.05rem;
    color: #333;
    line-height: 1.8;
    margin-bottom: 1.2rem;
  }
`;

const Privacy = () => {
  return (
    <>
     

      <Container>
        <Title>Privacy and Cookie Policy</Title>
        <UpdatedDate>Last updated: July, 2025</UpdatedDate>

        <Section>
          <p>
            This Vista Privacy and Cookie Notice <strong>("Privacy Notice")</strong> describes how Vista and its signature services, including VistaPrint, VistaCreate, 99designs by Vista, and Vista Corporate Solutions (collectively, <strong> "we", "our"</strong> or <strong>"us"</strong>), collects, uses, and shares your personal information when you use and access our websites and mobile sites <strong> ("Sites")</strong>, applications <strong> ("Apps")</strong>, services and other tools we offer.
          </p>
          <p>
          This Privacy Notice applies to all users of our Vista Services, including unregistered and registered consumer users, business users, and employee of a business users, designer contributors, customers and potential customers (collectively, “user”, “you” or “your”), and to all Vista Services that link to this Privacy Notice.
          </p>
          <p>
          Please keep in mind that this Privacy Notice does not apply to personal information collected by third-party websites and apps that may post links or advertisements on or otherwise be accessible from our Sites and Apps. We advise you to read the privacy notices of these third parties when you visit their websites or apps in order to understand how such third parties collect and use your personal information.
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
          <h2>NQA/Product Related Issues</h2>
          <p>
            Any issues with the Product will need to be highlighted to our customer care within 15 days of receiving your order. Vistaprint is entitled to deny any claims beyond this reasonable period.
          </p>
        </Section>

        <Section>
          <h2>Return Pickup</h2>
          <p>
            Once you raise any issue about the Product delivered to our customer care team, we will ensure a quick, easy, and seamless refund. You may be requested to return the Product in question as a prerequisite for processing refund. We will perform a simple quality check once we receive the Product back to our warehouse, before processing the refund.
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

export default Privacy;
