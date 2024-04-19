
import React from 'react';
import './founder.css';


const FoundersPage = () => {
  const founders = [
    {
        name: 'Karan Singla',
        photo: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
        phone: '+91 +91 84275 29709',
        details: 'He is the founder of a successful manufacturing company specializing in cycle parts and tableware. His entrepreneurial spirit and leadership have propelled the company to prominence in the industry.',
      },
      // {
      //   name: 'Satpal Singla',
      //   photo: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
      //   phone: '+91 12345-12345',
      //   details: 'He is the founder of a successful manufacturing company specializing in cycle parts and tableware. His entrepreneurial spirit and leadership have propelled the company to prominence in the industry.',
      // },
      // {
      //   name: 'Rakesh Singla',
      //   photo: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
      //   phone: '+91 12345-12345',
      //   details: 'He is the founder of a successful manufacturing company specializing in cycle parts and tableware. His entrepreneurial spirit and leadership have propelled the company to prominence in the industry.',
      // },
      // {
      //   name: 'Rajesh Singla',
      //   photo: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
      //   phone: '+91 12345-12345',
      //   details: 'He is the founder of a successful manufacturing company specializing in cycle parts and tableware. His entrepreneurial spirit and leadership have propelled the company to prominence in the industry.',
      // },
  ];

  return (
    <div className="founders-page">
      <h1>Our Founders</h1>
      <div className="founders-container">
        {founders.map((founder, index) => (
            <>
            <div className='founder'>
                <div className='founder-photo'>
                    <img src={founder["photo"]}></img>
                </div>
                <h3>{founder["name"]}</h3>
                <p>{founder["details"]}</p>
                <p>Call: {founder["phone"]}</p>
            </div>
            </>
        ))}
      </div>
    </div>
  );
};

export default FoundersPage;