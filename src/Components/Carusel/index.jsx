import Carousel from "react-elastic-carousel";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1100, itemsToShow: 4 },
];

import React from "react";

const CaruselApp = ({ children }) => {
  return (
    <>
      <div>
        <Carousel
          pagination={false}
          showArrows={false}
          breakPoints={breakPoints}
        >
          {children}
        </Carousel>
      </div>
    </>
  );
};

export default CaruselApp;
