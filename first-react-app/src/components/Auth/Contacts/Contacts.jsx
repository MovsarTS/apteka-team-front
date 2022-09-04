import React, { useEffect } from 'react';
import styles from '../Contacts/contacts.module.css';
import Icon1 from '../Contacts/img/Icon1.png';
import Icon2 from '../Contacts/img/Icon2.png';
import Icon3 from '../Contacts/img/Icon3.png';
import Maps_mult from '../../Auth/Contacts/img/Maps_mult.png';
import Aos from 'aos'

const Contacts = () => {

    useEffect(() => {
        Aos.init({duration: 2000});
    }, [])

    return (
        <div className={styles.maps_and_inf}>
            <div className={styles.inform}>
                <div className={styles.inform_icon1}>
                    <div><img className={styles.inform_img} src={Icon1} alt="" /></div>
                    <div className={styles.inform_icon_text}><span className={styles.span_text1}>График работы: 10:00 - 22:00</span></div>
                </div>
                <div className={styles.inform_icon2}>
                    <div><img className={styles.inform_img} src={Icon2} alt="" /></div>
                    <div className={styles.inform_icon_text}><span className={styles.span_text}>Консультация от специалиста</span></div>
                </div>
                <div className={styles.inform_icon3}>
                    <div><img className={styles.inform_img} src={Icon3} alt="" /></div>
                    <div className={styles.inform_icon_text3}><span className={styles.span_text}>Большой выбор товаров</span></div>
                </div>
            </div>
            <div className={styles.maps}>
                <div className={styles.maps_this}>
                    <div className={styles.maps_mult}>
                        <div className={styles.maps_mult_a}>
                            <img data-aos='zoom-in' src={Maps_mult} alt="" />
                        </div>
                    </div>
                    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A5afe904d7ef6e953f635fb861820c3b6b68f39a8861138e3577926f1ff939aff&amp;source=constructor" width="98.5%" height="400px" frameborder="0"></iframe>
                </div>
            </div>
        </div>
    );
};

export default Contacts;