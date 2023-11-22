import React from 'react';

import styles from './BenefitsBlock.module.scss';

import delivery from '../../assets/img/benefits/delivery.svg';
import money from '../../assets/img/benefits/money.svg';
import time from '../../assets/img/benefits/time.svg';
import seafood from '../../assets/img/benefits/seafood.svg';

const BenefitsBlock = () => {
  const benefits = [
    {
      image: delivery,
      text: 'Доставка от 30 минут',
      textChina: '/ 30 分钟内送达',
    },
    {
      image: money,
      text: 'Принимаем заказы от 2000 ₽',
      textChina: '/ 我们接受 2000 ₽',
    },
    {
      image: time,
      text: 'Доставка работает с 10:00-00:00',
      textChina: '/ 送货时间 10:00-00:00',
    },
    {
      image: seafood,
      text: 'Натуральные морепродукты',
      textChina: '/ 天然海鲜',
    },
  ];

  return (
    <div className="container">
      <ul className={styles.list}>
        {benefits.map((obj, index) => (
          <li className={styles.item} key={index}>
            <img src={obj.image} alt="доставка" />
            <div>
              {obj.text} <br /> <span className={styles.textChina}>{obj.textChina}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BenefitsBlock;
