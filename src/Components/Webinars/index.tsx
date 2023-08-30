import { ProductsData } from "@/Constants";
import Button from "../Btn";
import CaruselApp from "../Carusel";
import Popular from "../Popular";
import s from "./stayle.module.scss";
import Carts from "../Cart";

const Webinars = () => {
  return (
    <div className={s.webinar}>
      <div className="container">
        <div className={s.webinar__wrapper}>
          <div className={s.webinar__lorem}>
            <p className={s.webinar__text}>CATEGORIES</p>
            <h2 className={s.webinar__heading}>
              <b>
                Best baby Webinars <br />
              </b>
              for all mothers
            </h2>
            <p className={s.webinar__title}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. <br /> Lorem Ipsum has been the industry standard dummy.
            </p>
            <Button
              bg
              hover
              body="Go To Category"
              icon={<i className="fa-solid fa-globe"></i>}
            />
          </div>
          <div className={s.webinar__carusel}>
            <CaruselApp>
              {ProductsData.map((e) => (
                <Carts
                  trueee={e.id}
                  image={e?.image?.src}
                  price={e.price}
                  text={e.text}
                  title={e.title}
                  key={e.id}
                />
              ))}
            </CaruselApp>
          </div>
        </div>
      </div>
      <Popular />
    </div>
  );
};

export default Webinars;
