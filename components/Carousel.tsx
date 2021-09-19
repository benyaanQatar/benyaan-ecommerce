/* eslint-disable @next/next/no-img-element */
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBContainer,
  MDBView,
} from 'mdbreact';
import React from 'react';

const CarouselHome = () => {
  return (
    <MDBContainer className="slider-home-banner carousel">
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
        id="carousel1_indicator"
        slide
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100 img-fluid"
                src="images/demo/Banners/b1.jpg"
                alt="First slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100 img-fluid"
                src="images/demo/Banners/b2.jpg"
                alt="Second slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100 img-fluid"
                src="images/demo/Banners/b3.jpg"
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="4">
            <MDBView>
              <img
                className="d-block w-100 img-fluid"
                src="images/demo/Banners/b4.jpg"
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="5">
            <MDBView>
              <img
                className="d-block w-100 img-fluid"
                src="images/demo/Banners/b5.jpg"
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="6">
            <MDBView>
              <img
                className="d-block w-100 img-fluid"
                src="images/demo/Banners/b6.jpg"
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="7">
            <MDBView>
              <img
                className="d-block w-100 img-fluid"
                src="images/demo/Banners/b7.jpg"
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="8">
            <MDBView>
              <img
                className="d-block w-100 img-fluid"
                src="images/demo/Banners/b8.jpg"
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
};

export default CarouselHome;
