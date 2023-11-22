import React from 'react';

import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <nav>
      <ul className={styles.list}>
        <li>
          <a href="#" className={styles.link}>
            МЕНЮ
            <span className={styles.linkChina}>菜单</span>
          </a>
        </li>
        <li>
          <a href="#" className={styles.link}>
            О РЕСТОРАНЕ
            <span className={styles.linkChina}>关于该餐厅 </span>
          </a>
        </li>
        <li>
          <a href="#" className={styles.link}>
            ДОСТАВКА
            <span className={styles.linkChina}>送货 </span>
          </a>
        </li>
        <li>
          <a href="#" className={styles.link}>
            ИНФОРМАЦИЯ
            <span className={styles.linkChina}>信息</span>
          </a>
        </li>
        <li>
          <a href="#" className={styles.link}>
            КОНТАКТЫ
            <span className={styles.linkChina}>联系我们</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
