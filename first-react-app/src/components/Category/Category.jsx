import React from 'react';
import styles from './category.module.css'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategory } from '../../feauters/categorySlice';

const Category = () => {
    const cats = useSelector(state => state.categorySlice.category);
    const dispatch = useDispatch();

    useEffect(() => {
        Aos.init({ duration: 2000 })
        dispatch(fetchCategory())
    }, [dispatch]);

    return (
        <div className={styles.main}>
            {cats.map((cat) => {
                return <Link className={styles.lin} to={`/category/${cat._id}`}>
                <div data-aos='zoom-in' className={styles.catCard}>
                    <div className={styles.catImg}>
                        <img src={`http://localhost:3030/images/${cat.image}`} alt='p' />
                    </div>
                    <div className={styles.catText}>
                        <h3>{cat.name}</h3>
                        <p>Выберите препарат который вам необходим</p>
                    </div>
                </div>
            </Link>
            })}
        </div>
    );
};

export default Category;