import React from 'react';
import Card from '../components/Card'; // Import the Card component
import './Services.css'; // Import the CSS file for styling

const Services = () => {
  const services = [
    { title: 'Web Development', description: 'We provide modern and responsive web development services.' },
    { title: 'Graphic Design', description: 'Our design team creates stunning and visually appealing graphics.' },
    { title: 'SEO Optimization', description: 'Improve your site’s visibility on search engines with our SEO services.' },
  ];

  return (
    <div className="services">
      <h1>Our Services</h1>
      <p>Welcome to the Services page. Here we offer a range of services to help you succeed.</p>
      <div className="services-list">
        {services.map((service, index) => (
          <Card key={index} title={service.title} description={service.description} />
        ))}
      </div>
    </div>
  );
};

export default Services;
