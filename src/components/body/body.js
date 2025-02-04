import React from 'react';
import { useState, useEffect } from 'react';
import './body.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const Body = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('/Products.json')
    .then((response) => response.json())
    .then((data) => setProducts(data))
    .catch((error) => console.error('Error fetching products:', error))
})


  return (
    <div>
      <div className="product-list">
        {products.map((product) => {
          const phoneNumber = '+963982747763';
          const defaultMessage = `I want to know more about ${product.name}`;
          const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

          return (
            <div key={product.id} className="product">
              <div className="image-container">
                <img src={product.image1} alt='laptop' className='image1' />
                <img src={product.image2} alt='laptop' className='image2' />
              </div>
              <h2>{product.name}</h2>
              <h5>({product.status})</h5>
              <p>{product.details}</p>
              <h3>{product.price}</h3>
              <a href={whatsappLink} className="whatsapp-button">Buy Now</a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
