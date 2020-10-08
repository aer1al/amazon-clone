import React from "react";
import "./Home.css";
import banner from "./images/bg.jpg";
import Product from "./Product";

function Home() {
  return (
    <>
      <div className="home">
        <div className="home__container">
          {/* BANNER */}
          <img src={banner} alt="" className="banner__img" />

          {/* PRODUCT CARDS */}
          <div className="cards__row">
            <Product
              title="Echo Buds | Take Alexa with you"
              imageURL="https://images-eu.ssl-images-amazon.com/images/G/02/kindle/journeys/NTg4MTg2YTQt/NTg4MTg2YTQt-MWU4YWY5YzEt-w758._SY608_CB403745487_.jpg"
            />
            <Product
              title="Mens mid-season sale"
              imageURL="https://images-eu.ssl-images-amazon.com/images/G/02/kindle/journeys/NTg4MTg2YTQt/NTg4MTg2YTQt-MWU4YWY5YzEt-w758._SY608_CB403745487_.jpg"
            />
            <Product
              title="Echo Buds | Take Alexa with you"
              imageURL="https://images-eu.ssl-images-amazon.com/images/G/02/kindle/journeys/NTg4MTg2YTQt/NTg4MTg2YTQt-MWU4YWY5YzEt-w758._SY608_CB403745487_.jpg"
            />
            <Product
              title="Echo Buds | Take Alexa with you"
              imageURL="https://images-eu.ssl-images-amazon.com/images/G/02/kindle/journeys/NTg4MTg2YTQt/NTg4MTg2YTQt-MWU4YWY5YzEt-w758._SY608_CB403745487_.jpg"
            />
          </div>
          <div className="cards__row">
            <Product
              title="Echo Buds | Take Alexa with you"
              imageURL="https://images-eu.ssl-images-amazon.com/images/G/02/kindle/journeys/NTg4MTg2YTQt/NTg4MTg2YTQt-MWU4YWY5YzEt-w758._SY608_CB403745487_.jpg"
            />
            <Product
              title="Echo Buds | Take Alexa with you"
              imageURL="https://images-eu.ssl-images-amazon.com/images/G/02/kindle/journeys/NTg4MTg2YTQt/NTg4MTg2YTQt-MWU4YWY5YzEt-w758._SY608_CB403745487_.jpg"
            />
            <Product
              title="Echo Buds | Take Alexa with you"
              imageURL="https://images-eu.ssl-images-amazon.com/images/G/02/kindle/journeys/NTg4MTg2YTQt/NTg4MTg2YTQt-MWU4YWY5YzEt-w758._SY608_CB403745487_.jpg"
            />
            <Product
              title="Echo Buds | Take Alexa with you"
              imageURL="https://images-eu.ssl-images-amazon.com/images/G/02/kindle/journeys/NTg4MTg2YTQt/NTg4MTg2YTQt-MWU4YWY5YzEt-w758._SY608_CB403745487_.jpg"
            />
          </div>
          <div className="cards__row">
            <Product
              title="Echo Buds | Take Alexa with you"
              imageURL="https://images-eu.ssl-images-amazon.com/images/G/02/kindle/journeys/NTg4MTg2YTQt/NTg4MTg2YTQt-MWU4YWY5YzEt-w758._SY608_CB403745487_.jpg"
            />
            <Product
              title="Echo Buds | Take Alexa with you"
              imageURL="https://images-eu.ssl-images-amazon.com/images/G/02/kindle/journeys/NTg4MTg2YTQt/NTg4MTg2YTQt-MWU4YWY5YzEt-w758._SY608_CB403745487_.jpg"
            />
            <Product
              title="Echo Buds | Take Alexa with you"
              imageURL="https://images-eu.ssl-images-amazon.com/images/G/02/kindle/journeys/NTg4MTg2YTQt/NTg4MTg2YTQt-MWU4YWY5YzEt-w758._SY608_CB403745487_.jpg"
            />
          </div>
          <div className="cards__row">
            <Product
              title="Echo Buds | Take Alexa with you"
              imageURL="https://images-eu.ssl-images-amazon.com/images/G/02/kindle/journeys/NTg4MTg2YTQt/NTg4MTg2YTQt-MWU4YWY5YzEt-w758._SY608_CB403745487_.jpg"
            />
            <Product
              title="Echo Buds | Take Alexa with you"
              imageURL="https://images-eu.ssl-images-amazon.com/images/G/02/kindle/journeys/NTg4MTg2YTQt/NTg4MTg2YTQt-MWU4YWY5YzEt-w758._SY608_CB403745487_.jpg"
            />
            <Product
              title="Echo Buds | Take Alexa with you"
              imageURL="https://images-eu.ssl-images-amazon.com/images/G/02/kindle/journeys/NTg4MTg2YTQt/NTg4MTg2YTQt-MWU4YWY5YzEt-w758._SY608_CB403745487_.jpg"
            />
            <Product
              title="Echo Buds | Take Alexa with you"
              imageURL="https://images-eu.ssl-images-amazon.com/images/G/02/kindle/journeys/NTg4MTg2YTQt/NTg4MTg2YTQt-MWU4YWY5YzEt-w758._SY608_CB403745487_.jpg"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
