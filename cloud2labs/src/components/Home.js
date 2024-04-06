import React from 'react';
import VerticalCarousel from './VerticalCarousel'
function Home() {
  return (
    <div id="home" className="section">
      <div className='home-con'>
        <div className='home-con-1'>
          <h1 className='home_heading'>
          WHERE INNOVATION MEETS INTELLIGENCE IN CLOUD
          </h1>
          <p className='home_para'>
          Cloud2labs is a leading provider of innovative cloud solutions that empower businesses to thrive in the digital age. With our cutting-edge technologies and expert team, we deliver scalable and secure cloud services tailored to meet the unique needs of our clients. Whether you're a startup looking to launch your first application or an enterprise seeking to optimize your cloud infrastructure, Cloud2labs has the expertise and resources to drive your success. Contact us today to learn more about how we can help your business soar to new heights in the cloud.

          </p>
        </div>
        <div className='home-con-2'>
          <VerticalCarousel/>
        </div>
      </div>
    </div>
  );
}

export default Home;
