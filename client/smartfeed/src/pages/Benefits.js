import React from 'react';
import './Benefits.css';
import truckImage from '/Users/maulisharma/Desktop/Minor Project smartfeed/SmartFeed/client/smartfeed/src/paper.jpeg'; // Adjust the path to your image

const Benefits = () => {
  return (
    <div className="benefits-container">
      <div className="text-section">
        <h1>
          <span className="highlight">Our</span> benefits
        </h1>
        <div className="benefit-item">
          <h3>Hassel Free Searching and Curated Content</h3>
          <p>SmartFeed eliminates the hassle of searching multiple sites by providing a centralized platform that aggregates news from a wide range of reputable sources. This comprehensive approach saves you time and effort, ensuring you don't need to visit numerous websites to stay informed. Additionally, SmartFeed delivers curated content specially tailored to your preferences. Using advanced recommendation algorithms, the platform analyzes your reading habits and interests to present news articles that align with your unique tastes. This means you receive a personalized news feed that is both diverse and relevant, making your news consumption experience more efficient and enjoyable.</p>
        </div>
       
      </div>
      <div className="image-section">
        <img src={truckImage} alt="Truck" />
      </div>
    </div>

    
  );
};

export default Benefits;