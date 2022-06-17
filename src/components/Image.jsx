import React from 'react';
import styles from './styles.module.css'
import img from '../image/Nike.jpg';

const Image = () => {
    return (
        <div className={styles.img}>
            <img src={img} alt='photo nike' />
        </div>
    );
};

export default Image;