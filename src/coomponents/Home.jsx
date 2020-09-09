import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      {/* <img src="https://images-eu.ssl-images-amazon.com/images/G/02//> */}
      {/* https://images-na.ssl-images-amazon.com/images/G/01/IMDbTV/gateway/theoutpost/GW_DHERO_TheOutpost_3000x1200_EN-US_5538_v12x._CB407273330_.jpg */}
      {/* https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2020/TV/THBY_S2_02111_GWBleedingHero_3000x1200_PRE_Final_en-US_PVD5224._CB410800060_.jpg */}

      <img
        className="home__image"
        src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/MTc0Y2M5Y2Mt/MTc0Y2M5Y2Mt-ZTMzMTk5Yjct-w3000._CB406837549_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id="12"
          title="Echo Dot with clock (Sandstone) Bundle with Echo Auto"
          price={89.98}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51JoCOt2xRL._AC_SL1000_.jpg"
        />
        <Product
          id="23"
          title="AUKEY FHD Webcam, 1080p Live Streaming Camera with Stereo Microphone, Desktop or Laptop USB Webcam for Widescreen Video Calling and Recording"
          price={49.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/51NaTEP5xbL._AC_SL1500_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="34"
          title="Westinghouse WGen7500 Portable Generator with Remote Electric Start - 7500 Rated Watts & 9500 Peak Watts - Gas Powered - CARB Compliant - Transfer..."
          price={924.7}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81qINg8KeEL._AC_SL1500_.jpg"
        />
        <Product
          id="45"
          title="Skechers Men's Escape Plan Oxford"
          price={138.28}
          rating={4}
          image="https://m.media-amazon.com/images/I/91ZyhXdnk-L._AC_UL480_FMwebp_QL65_.jpg"
        />
        <Product
          id="56"
          title="Armani Exchange Hampton Stainless Steel Watch"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/81Yvt7PGUtL._AC_UL480_FMwebp_QL65_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="67"
          title="Dell UltraSharp U3415W 34-Inch Curved LED-Lit Monitor"
          price={614.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/71br6lyzhuL._AC_UY327_FMwebp_QL65_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
