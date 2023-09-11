import Carousel from "react-elastic-carousel";
import { Testimonalsdata } from "../../Constants";
import Image from "next/image";
import React from "react";
import s from "./stayle.module.scss";

const breakPoints = [
  { width: 550, itemsToShow: 1 },
  { width: 768, itemsToShow: 2 },
  { width: 1100, itemsToShow: 3 },
];

const CaruselTestimonls = () => {
  return (
    <>
      <div>
        <Carousel
          pagination={false}
          showArrows={false}
          breakPoints={breakPoints}
        >
          {Testimonalsdata.map((e, i) => (
            <div key={e.id} className={s.cards}>
              <Image src={e.image} width={300} height={300} alt={e.title} />
              <div>
                <h4 className={s.cards__title}>{e.title}</h4>
                <p className={s.cards__des}>{e.des}</p>
                <p className={s.cards__name}>{e.username}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default CaruselTestimonls;
