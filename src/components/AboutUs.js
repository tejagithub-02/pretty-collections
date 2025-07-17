import React, { useState } from 'react';
import './AboutUs.css';
import logoBg from '../assets/logo.png';
import sareeImg from '../assets/saree.jpeg';
import blouseImg from '../assets/blouse.jpeg';
import gownImg from '../assets/gown.jpeg';
import kidswearImg from '../assets/kidswear.jpeg';
import patchworkImg from '../assets/patchwork.jpeg';

const AboutUs = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const cards = [
    { 
      img: sareeImg, 
      title: 'Saree Collections', 
      shortDesc: 'Explore silk, designer, cotton, bridal – draped perfection.',
      fullDesc: 'Our saree collection features over 200+ designs from traditional Kanjeevarams to modern georgettes. Each piece is handpicked for quality and craftsmanship. Special bridal collections available with custom blouse stitching services.',
      features: ['Silk & Cotton varieties', 'Bridal collections', 'Custom blouse stitching', 'Free draping guide'],
      delay: 0.1
    },
    { 
      img: blouseImg, 
      title: 'Custom Blouses', 
      shortDesc: 'Stitched elegance with handcrafted patchwork and embroidery.',
      fullDesc: 'Get perfectly tailored blouses with our expert measurements. Choose from 50+ embroidery designs or create your own. Our patchwork blouses are unique pieces of wearable art that complement any saree.',
      features: ['Perfect fit guarantee', '50+ embroidery designs', 'Patchwork specialists', '15-day delivery'],
      delay: 0.2
    },
    { 
      img: gownImg, 
      title: 'Designer Gowns', 
      shortDesc: 'Rental & custom gowns for shoots, birthdays, weddings.',
      fullDesc: 'From cocktail dresses to full-length ball gowns, our designer collection suits all occasions. Rental options available for one-time events. Custom gowns are made-to-measure with 3 fitting sessions included.',
      features: ['Rental options', 'Custom designs', '3 fitting sessions', 'Bridal collections'],
      delay: 0.3
    },
    { 
      img: kidswearImg, 
      title: 'Kids Traditional', 
      shortDesc: 'Ethnic and trendy wear for childrens special occasions.',
      fullDesc: 'Adorable traditional outfits for kids that combine comfort with style. Our collections include festival wear, birthday outfits, and flower girl dresses. All fabrics are hypoallergenic and skin-friendly.',
      features: ['Age 1-12 years', 'Hypoallergenic fabrics', 'Festival collections', 'Matching family sets'],
      delay: 0.4
    },
    { 
      img: patchworkImg, 
      title: 'Patchwork Craft', 
      shortDesc: 'Detailed patch designs that transform basic to bold.',
      fullDesc: 'Our artisans create stunning patchwork designs using traditional techniques. Each piece tells a story through its patterns. Custom patchwork available for sarees, dupattas, and home decor items.',
      features: ['Handcrafted pieces', 'Custom designs', 'Sarees & dupattas', 'Home decor options'],
      delay: 0.5
    }
  ];

  return (
    <section className="about-us-section" id="about-us">
      <div className="animated-bg">
        <div className="floating-bubbles">
          {[...Array(15)].map((_, i) => (
            <div 
              key={i} 
              className="bubble" 
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 30 + 10}px`,
                height: `${Math.random() * 30 + 10}px`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: Math.random() * 0.3 + 0.1
              }}
            />
          ))}
        </div>
        <div className="rotating-logo-container">
          <img src={logoBg} alt="Pretty Collections Logo" className="rotating-logo" />
        </div>
      </div>

      <div className="about-overlay">
        <div className="about-container">
          <div className="about-header">
            <h2 className="about-title">About Pretty Collections</h2>
            <p className="about-subtitle">Where Culture Meets Fashion</p>
            <p className="about-intro">
              Step into the world of Pretty Collections, where we celebrate elegance in every stitch. From bridal dreams to festive looks,
              we bring you curated outfits and accessories that make every moment special.
            </p>
          </div>

          <div className="about-card-grid">
            {cards.map((card, i) => (
              <div 
                className={`about-card ${hoveredCard === i ? 'hovered' : ''}`} 
                key={i}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{ animationDelay: `${card.delay}s` }}
              >
                <div className="card-image-container">
                  <div className="card-image">
                    <img src={card.img} alt={card.title} />
                  </div>
                  <div className="image-overlay"></div>
                </div>
                <div className="card-content">
                  <h3>{card.title}</h3>
                  <p className="short-desc">{card.shortDesc}</p>
                  
                  <div className="full-content">
                    <p className="full-desc">{card.fullDesc}</p>
                    <ul className="features-list">
                      {card.features.map((feature, idx) => (
                        <li key={idx}>
                          <span className="feature-icon">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;