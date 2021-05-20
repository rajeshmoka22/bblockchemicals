import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './home.css';
import image1 from '../../assets/images/CarouselImage1.jpg';
import image2 from '../../assets/images/CarouselImage2.jpg';
import image3 from '../../assets/images/CarouselImage3.jpg';
import pharmacist from '../../assets/images/Pharmacist.jpg';

function Home() {
  return (
    <React.Fragment>
      <Carousel slide={false}>
        <Carousel.Item>
          <img
            className='carousel-image'
            src={image1}
            alt="image for tablets"
          />
          <Carousel.Caption>
            <h3>Slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='carousel-image'
            src={image2}
            alt="image for tablets"
          />
          <Carousel.Caption>
            <h3>Slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='carousel-image'
            src={image3}
            alt="image for tablets"
          />
          <Carousel.Caption>
            <h3>Slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    <div className='company-info-container'>
      <div className='company-info-text'>
        <p>Welcome to</p>
        <h2>B Block Chemicals</h2>
        <p>
          B Block Chemicals is offering integrated catalog products and services in Pharmaceuticals, agrochemical and other related industries. B Block Chemicals provides higher end collaboration for the products and services, which enhance the capability and productivity performances of our Customers and Business Associates, in functions critical to their success.
        </p>
        <p>
          We stand to lead our Business operations, through innovation, creativity and progressiveness with methods, technologies and operating practices. While achieving excellence in our services, we believe that quality deliverance is imperative in every aspect of our Business Process for a 'Superior Customer Satisfaction'. We also follow various quality and knowledge based procedures and systems in our operations.
        </p>
        <p>
          To order customized screening decks and building blocks through a single purchasing system. Bench chemists can search our database of different compounds and make request quotes for our products.
        </p>
        {/* <p>
          For small biotech and academic groups, B Block Chemicals plays vital role as an in-house procurement department, sourcing thousands of compounds from around the world, with the benefit of lower pricing from volume discounts to our customers, so that they can concentrate on their work rather than sourcing the materials.
        </p> */}
      </div>
      <div className="d-flex justify-content-center">
        <img src={pharmacist} alt="pharmacist holding chemicals" />
      </div>
    </div>
    </React.Fragment>
  )
}

export default Home;