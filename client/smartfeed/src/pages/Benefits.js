import React from 'react';
import './Benefits.css';
import truckImage from '../imgs/vec1.png';
import truckImage2 from '../imgs/vec2.png';

const Benefits = () => {
  return (
    <>
    <div className="benefits-container">
      <div className="image-section">
        <img src={truckImage} alt="Truck" />
      </div>
      <div className="text-section">
        <h2>
          <span className="highlight">Hassel Free Searching and Curated Content.</span>
        </h2>
        <div className="benefit-item">
          <p className='text'>SmartFeed eliminates the hassle of searching multiple sites by providing a centralized platform that aggregates news from a wide range of reputable sources. <br/><br/>This comprehensive approach saves you time and effort, ensuring you don't need to visit numerous websites to stay informed. Additionally, SmartFeed delivers curated content specially tailored to your preferences. <br/><br/>This means you receive a personalized news feed that is both diverse and relevant, making your news consumption experience more efficient and enjoyable!</p>
        </div>
       
      </div>
    </div>

    <div className="benefits-container">
      <div className="text-section">
        <h2>
          <span className="highlight">Bookmarking and Organization</span>
        </h2>
        <div className="benefit-item">
          <p className='text'>Allows you to save and organize articles for future reference, making it easy to keep track of important or interesting content.<br/><br/>This comprehensive approach saves you time and effort, ensuring you don't need to visit numerous websites to stay informed. Additionally, SmartFeed delivers curated content specially tailored to your preferences. <br/><br/>This means you receive a personalized news feed that is both diverse and relevant, making your news consumption experience more efficient and enjoyable!</p>
        </div>
       
      </div>
    <div className="image-section">
        <img src={truckImage2} alt="Truck" />
      </div>
      
    </div>

    </>
    
  );
};

export default Benefits;