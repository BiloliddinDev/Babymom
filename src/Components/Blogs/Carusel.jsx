import "swiper/css";
import "swiper/css/pagination";
import Button from "../Btn";
import Carousel from "react-elastic-carousel";
import Image from "next/image";
import React from "react";
import s from "./stayle.module.scss";
import { Blogs } from "@/Constants";

const breakPoints = [
  { width: 550, itemsToShow: 1 },
  { width: 768, itemsToShow: 2 },
  { width: 1100, itemsToShow: 3 },
];

const CaruselBlog = () => {
  return (
    <>
      <div>
        <Carousel
          pagination={false}
          showArrows={false}
          breakPoints={breakPoints}
        >
          {Blogs.map((e) => (
            <div key={e.id} className={s.cards}>
              <p className={s.cards__text}>{e.data}</p>
              <Image
                alt={e.title}
                width={373}
                height={300}
                className={s.cards__img}
                src={e.image}
              />
              <div className={s.cards__wrapper}>
                <h4 className={s.cards__heading}>{e.title}</h4>
                <p className={s.cards__title}>{e.des}</p>
                <Button body="read more" />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default CaruselBlog;
