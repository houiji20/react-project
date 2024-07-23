import React from 'react';
import Card from '../components/Card';
import './Home.css'; // Optional: For any additional styles for the Home page

const Home = () => {
  const handleCardButtonClick = () => {
    alert('Card button clicked!');
  };

  return (
    <div className="home">
      <h1>Home</h1>
      <div className="card-container">
        <Card
          image="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg"
          title="Card Title 1"
          description="This is a description for card 1."
          buttonText="Learn More"
          onButtonClick={handleCardButtonClick}
        />
        <Card
          image="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
          title="Card Title 2"
          description="This is a description for card 2."
          buttonText="Learn More"
          onButtonClick={handleCardButtonClick}
        />
      </div>
    </div>
  );
};

export default Home;
