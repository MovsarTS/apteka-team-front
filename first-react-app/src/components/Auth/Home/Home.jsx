import React from 'react';
import Doctor from '../Home/img/Doctor.jpg';
import styles from '../Home/home.module.css';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div className={styles.home}>
            <div className={styles.info_blok}>
                <div className={styles.info_text}>
                    <p className={styles.info_text_p1}>Всё, что нужно для здоровья</p>
                    <p className={styles.info_text_p2}>Интернет-Аптека: заказать лекарства онлайн с доставкой в ближайший пункт выдачи</p>
                </div>
                <div className={styles.info_buttons}>
                    <div className={styles.info_btn1}>
                    <Link to="/category"><button>Купить лекарства</button></Link>
                    </div>
                    <div className={styles.info_btn2}>
                    <Link to="/contacts"><button>Посмотреть адрес</button></Link>
                    </div>
                </div>
            </div>
            
            <div className={styles.img_block}>
                <img src={Doctor} alt="" />
            </div>
            
        </div>
    );
};

export default Home;