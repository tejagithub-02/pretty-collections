import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp, FiMail, FiPhone } from 'react-icons/fi';
import styled, { keyframes } from 'styled-components';
import { fadeIn, slideInUp, bounceInDown } from 'react-animations';
import Footer from '../components/Footer'; // ✅ Add your Footer

// ✅ FAQ List
const faqList = [
  {
    question: "Is there any support for Bulk Orders?",
    answer: "Yes, we offer discounts and dedicated support for bulk orders. Contact us via email for assistance."
  },
  {
    question: "Can I change my order?",
    answer: "You can change your order within 1 hour of placing it. After that, changes may not be possible."
  },
  {
    question: "Can I cancel my order?",
    answer: "Yes, but only within 1 hour after placing it. Please contact support immediately."
  },
  {
    question: "Where’s my order?",
    answer: "Track your order using the tracking link sent to your email or check in 'My Orders' on our website."
  },
  {
    question: "What are your shipping speeds?",
    answer: "Standard shipping takes 5–7 business days. Express options are available at checkout."
  },
  {
    question: "What if I’m not happy with my purchase?",
    answer: "We offer 100% satisfaction guarantee. Contact our support for refund or replacement."
  },
  {
    question: "My order hasn’t arrived, what can I do?",
    answer: "If your order is delayed beyond the estimated date, contact support for assistance."
  },
  {
    question: "Where are my designs saved?",
    answer: "They are saved in your account under 'My Projects'. You need to be logged in to view them."
  },
];

// Animations
const fadeInAnimation = keyframes`${fadeIn}`;
const slideInUpAnimation = keyframes`${slideInUp}`;
const bounceInDownAnimation = keyframes`${bounceInDown}`;

// Styled Components
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  animation: 1s ${fadeInAnimation};

  h1 {
    font-size: 2.5rem;
    color: #2c3e50;
    margin-bottom: 1rem;
    font-weight: 700;
  }

  p {
    color: #7f8c8d;
    font-size: 1.1rem;
  }
`;

const SearchBox = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  position: relative;
  animation: 1s ${slideInUpAnimation};

  input {
    width: 100%;
    padding: 1rem 1.5rem;
    border: 2px solid #dfe6e9;
    border-radius: 50px;
    font-size: 1rem;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);

    &:focus {
      outline: none;
      border-color: #3498db;
      box-shadow: 0 4px 12px rgba(52, 152, 219, 0.2);
    }
  }

  button {
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;
    color: #7f8c8d;
  }
`;

const FaqGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-bottom: 3rem;
`;

const FaqCard = styled.div`
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  border: 1px solid #ecf0f1;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const FaqTitle = styled.div`
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-weight: 600;
  color: #2c3e50;
  transition: all 0.3s ease;

  &:hover {
    color: #3498db;
  }

  svg {
    transition: transform 0.3s ease;
  }
`;

const FaqAnswer = styled.div`
  padding: 0 1.5rem;
  max-height: 0;
  overflow: hidden;
  transition: all 0.4s ease;
  color: #7f8c8d;
  line-height: 1.6;

  &.open {
    padding-bottom: 1.5rem;
    max-height: 500px;
  }
`;

const ContactSection = styled.div`
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  border-radius: 15px;
  padding: 2rem;
  animation: 1s ${bounceInDownAnimation};
`;

const ContactHeader = styled.h2`
  text-align: center;
  color: #2c3e50;
  margin-bottom: 2rem;
  font-size: 2rem;
`;

const ContactCard = styled.div`
  background: white;
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const ContactCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  strong {
    font-size: 1.2rem;
    color: #2c3e50;
  }
`;

const Badge = styled.span`
  background: #2ecc71;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: bold;
`;

const ContactPhone = styled.p`
  font-size: 1.5rem;
  color: #3498db;
  font-weight: bold;
  margin: 0.5rem 0;
`;

const EmailButton = styled.a`
  display: inline-flex;
  align-items: center;
  background: #3498db;
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  margin-top: 1rem;
  transition: all 0.3s ease;

  svg {
    margin-right: 0.5rem;
  }

  &:hover {
    background: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(52, 152, 219, 0.4);
  }
`;

// ✅ Main Component
const FaqPage = () => {
  const [search, setSearch] = useState('');
  const [openIndex, setOpenIndex] = useState(null);

  const filteredFaqs = faqList.filter(faq =>
    faq.question.toLowerCase().includes(search.toLowerCase())
  );

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Container>
        <Header>
          <h1>How can we help you?</h1>
          <p>Find answers to common questions or contact our support team</p>
        </Header>

        <SearchBox>
          <input
            type="text"
            placeholder="Search for questions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button>🔍</button>
        </SearchBox>

        <FaqGrid>
          {filteredFaqs.map((faq, index) => (
            <FaqCard key={index}>
              <FaqTitle onClick={() => toggleAnswer(index)}>
                {faq.question}
                {openIndex === index ? <FiChevronUp /> : <FiChevronDown />}
              </FaqTitle>
              <FaqAnswer className={openIndex === index ? 'open' : ''}>
                {faq.answer}
              </FaqAnswer>
            </FaqCard>
          ))}
        </FaqGrid>

        <ContactSection>
          <ContactHeader>Need more help?</ContactHeader>

          <ContactCard>
            <ContactCardHeader>
              <strong>Phone Support</strong>
              <Badge>Fastest</Badge>
            </ContactCardHeader>
            <p>Speak directly with our customer service team:</p>
            <ContactPhone>
              <FiPhone style={{ marginRight: '10px' }} />
              02522-669393
            </ContactPhone>
            <p>Mon. – Sat. 10:00 AM – 7:00 PM</p>
          </ContactCard>

          <ContactCard>
            <ContactCardHeader>
              <strong>Email Support</strong>
            </ContactCardHeader>
            <p>Our customer service specialists respond to emails Monday – Saturday.</p>
            <p>Email: <strong>customerservice@vistaprint.in</strong></p>
            <EmailButton href="mailto:customerservice@vistaprint.in">
              <FiMail /> Email us
            </EmailButton>
          </ContactCard>
        </ContactSection>
      </Container>

      <Footer />
    </>
  );
};

export default FaqPage;
