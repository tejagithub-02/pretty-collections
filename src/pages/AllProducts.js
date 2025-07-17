// AllProducts.jsx
import React from 'react';
import './AllProducts.css';
import Footer from '../components/Footer';


const allProducts = {
  "Marketing Materials": [
    "Beauty and Salon",
    "Tours and Travel"
  ],
  "Labels, Stickers & Packaging": [
    "Custom Car Stickers",
    "Custom Iron-on Labels",
    "Custom Shape Stickers",
    "Dome Stickers",
    "Floor Stickers - Social Distancing",
    "Foil Stickers",
    "Glow in the Dark Stickers",
    "Holographic Stickers"
  ],
  "Paper Bags": [
    "Custom Paper Bags",
    "Metallic Shopping Bags",
    "Multipurpose Slender Paper Pouches",
    "Promotional Paper Shopping Bags"
  ],
  "Corporate Gifts": [
    "Diaries",
    "Pens & Stationery",
    "Desk Accessories",
    "Keychains",
    "T-Shirts"
  ],
  "Engraved Keychains": [
    "Metal Keychains",
    "3 in 1 Keychains",
    "Name Keychains"
  ]
};

const AllProducts = () => {
  return (
    <>
    <div className="all-products-wrapper">
      <h2 className="all-products-title">All Products</h2>
      <div className="all-products-grid">
        {Object.entries(allProducts).map(([category, items]) => (
          <div key={category} className="all-products-column">
            <h4 className="category-heading">{category}</h4>
            <ul>
              {items.map((item, idx) => (
                <li key={idx}><a href="#">{item}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </>

  );

};

export default AllProducts;
