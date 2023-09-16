// import React from 'react';
import { BikeRent } from "../bike-rent/BikeRent";
import Banner from "./Banner";
const Home = () => {
  return (
    <div>
      <div>
        <div>
          <img
            style={{
              height: "100vh",
              left: "471px",
              position: "absolute",
              top: "0",
              zIndex: "1000",
              width: "838px",
            }}
            alt="Group"
            src="https://cdn.animaapp.com/projects/650583aa310891ded91818c1/releases/6505842226ab18e0ca06cbfe/img/group-5@2x.png"
          />
          {/* <img
            style={{
              height: "80px",
              left: "685px",
              position: "absolute",
              top: "323px",
              width: "80px",
            }}
            alt="Star four"
            src="https://cdn.animaapp.com/projects/650583aa310891ded91818c1/releases/6505842226ab18e0ca06cbfe/img/starfour-4@2x.png"
          /> */}
        </div>
        <Banner />
        {/* <BikeRent></BikeRent> */}
      </div>
    </div>
  );
};

export default Home;
