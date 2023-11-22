import React from 'react';

import styles from './Menu.module.scss';

const Menu = () => {
  const categories = [
    { category: 'Новинки / 新项目' },
    { category: 'Основные блюда / 主要膳食' },
    { category: 'Супы / 汤类' },
    { category: 'Салаты / 沙拉' },
    { category: 'Рыба / 鱼类' },
    { category: 'Мясо / 肉类' },
    { category: 'Десерты / 甜品' },
    { category: 'Закуски  / 小吃 ' },
    { category: 'Напитки / 饮料' },
  ];

  return (
    <div className="container">
      <ul className={styles.list}>
        {categories.map((obj, index) => (
          <li className={styles.item} key={index}>
            <button className={styles.btn}>{obj.category}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
