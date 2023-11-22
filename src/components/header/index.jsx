import React from 'react';

import Navbar from '../Navbar';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import SwiperNavButtons from '../SwiperNavButtons';

//Images
import logo from '../../assets/img/icons/logo.svg';
import user from '../../assets/img/icons/user.svg';
import cart from '../../assets/img/icons/cart.svg';

//Styles
import styles from './Header.module.scss';

//Swiper css
import 'swiper/css';
import 'swiper/css/pagination';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <a className={styles.address} href="#">
            ул. Верхние Поля, дв56с4, Москва
          </a>
          <p className={styles.time}>с 9:00-03:00</p>
        </div>
        <Navbar />
        <div className={styles.box}>
          <a className={styles.phone} href="tel:+79541238507">
            +7 954 123-85-07
          </a>
          <div className={styles.actions}>
            <a className={styles.actionsLink} href="#">
              <img src={user} width={19} height={23} alt="личный кабинет" />
            </a>
            <button className={styles.actionsLink}>
              <img src={cart} width={25} height={22} alt="корзина" />
              <span className={styles.count}>5</span>
            </button>
          </div>
        </div>
      </div>
      <Swiper
        className={styles.swiper}
        modules={[Navigation, Pagination]}
        loop={true}
        autoplay={true}
        navigation={{}}
        pagination={{}}>
        <SwiperSlide
          className={styles.slide}
          style={{ backgroundImage: `url(${require('../../assets/img/slider/bg-1.jpg')})` }}>
          <div className={styles.info}>
            <img className={styles.logo} src={logo} alt="логотип" />
            <div className={styles.boxInfo}>
              <p className={styles.text}>с 27 июля - 13 августа</p>
              <h1 className={styles.title}>
                ФЕСТИВАЛЬ КИТАЙСКОЙ ЕДЫ <br />
              </h1>
              <h2 className={styles.titleChina}>中国美食节</h2>
            </div>
            <div className={styles.buttons}>
              <button className={styles.button}>
                Забронировать <br /> стол
                <span className={styles.line}></span>
                <span className={styles.buttonChina}>预订座位</span>
              </button>
              <button className={styles.button}>
                <span className={styles.buttonChina}>食品配送</span>
                <span className={styles.line}></span>
                ДОСТАВКА ЕДЫ <br /> НА ДОМ
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className={styles.slide}
          style={{ backgroundImage: `url(${require('../../assets/img/slider/bg-2.jpg')})` }}>
          <div className={styles.info}>
            <img className={styles.logo} src={logo} alt="логотип" />
            <div className={styles.boxInfo}>
              <p className={styles.text}>с 27 июля - 13 августа</p>
              <h1 className={styles.title}>
                ФЕСТИВАЛЬ КИТАЙСКОЙ ЕДЫ <br />
              </h1>
              <h2 className={styles.titleChina}>中国美食节</h2>
            </div>
            <div className={styles.buttons}>
              <button className={styles.button}>
                Забронировать <br /> стол
                <span className={styles.line}></span>
                <span className={styles.buttonChina}>预订座位</span>
              </button>
              <button className={styles.button}>
                <span className={styles.buttonChina}>食品配送</span>
                <span className={styles.line}></span>
                ДОСТАВКА ЕДЫ <br /> НА ДОМ
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className={styles.slide}
          style={{ backgroundImage: `url(${require('../../assets/img/slider/bg-3.jpg')})` }}>
          <div className={styles.info}>
            <img className={styles.logo} src={logo} alt="логотип" />
            <div className={styles.boxInfo}>
              <p className={styles.text}>скидки до 25%</p>
              <h1 className={styles.title}>ПОПРОБУЙТЕ НОВОЕ МЕНЮ</h1>
              <h2 className={styles.titleChina}>尝试新的夏季菜单</h2>
            </div>
            <div className={styles.buttons}>
              <button className={styles.button}>
                Забронировать <br /> стол
                <span className={styles.line}></span>
                <span className={styles.buttonChina}>预订座位</span>
              </button>
              <button className={styles.button}>
                <span className={styles.buttonChina}>食品配送</span>
                <span className={styles.line}></span>
                ДОСТАВКА ЕДЫ <br /> НА ДОМ
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className={styles.slide}
          style={{ backgroundImage: `url(${require('../../assets/img/slider/bg-4.jpg')})` }}>
          <div className={styles.info}>
            <img className={styles.logo} src={logo} alt="логотип" />
            <div className={styles.boxInfo}>
              <p className={styles.text}>ДОБРО ПОЖАЛОВАТЬ В</p>
              <h1 className={styles.title}>РЕСТОРАН КИТАЙСКОЙ КУХНИ</h1>
              <h2 className={styles.titleChina}>欢迎光临 中国餐厅</h2>
            </div>
            <div className={styles.buttons}>
              <button className={styles.button}>
                Забронировать <br /> стол
                <span className={styles.line}></span>
                <span className={styles.buttonChina}>预订座位</span>
              </button>
              <button className={styles.button}>
                <span className={styles.buttonChina}>食品配送</span>
                <span className={styles.line}></span>
                ДОСТАВКА ЕДЫ <br /> НА ДОМ
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperNavButtons />
      </Swiper>
    </header>
  );
};

export default Header;
