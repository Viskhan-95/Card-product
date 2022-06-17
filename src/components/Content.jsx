import React, { useState } from 'react';
import styles from './styles.module.css';

const Content = () => {
    const [addingProductCard, setAddingProductCard] = useState(false);
    const [textAddProduct, setTextAddingProduct] = useState('Добавить в корзину');
    const [textDeleteProduct, setTextDeleteProduct] = useState('');
    const [showTextDetails, setShowTextDetails] = useState(false);

    const addProductCard = () => {
        setAddingProductCard(true);
        setTextAddingProduct('уже в корзине');
        setTextDeleteProduct('Удалить из корзины');
    }

    const deleteProductCard = () => {
        setAddingProductCard(true);
        setTextDeleteProduct('');
        setTextAddingProduct('Добавить в корзину');
    }

    const showDetails = () => {
        setShowTextDetails(true);
    }

    const closeDetails = () => {
        setShowTextDetails(false);
    }

    return (
        <div className={styles.container}>
            <div className={styles.content} >
                <div className={styles.sneaker}>
                    <h1>Nike Sneaker</h1>
                    <h1>$120</h1>
                </div>
                <div className={styles.details}>
                    {showTextDetails && <div className={styles.showText}>
                        <button onClick={closeDetails}>X</button>
                        <div className={styles.detailsText}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Dolor sunt voluptate harum beatae ipsa minus assumenda id quos 
                            inventore recusandae libero eligendi, 
                            sapiente perspiciatis nesciunt accusamus quas dolorum dicta eius!
                        </div>
                    </div>}
                    <button onClick={showDetails} className={styles.btn_details}>Детали</button>
                </div>
            </div>

            <div className={styles.text_block}>
                <div className={styles.text} >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Aspernatur id dolor, quam maiores provident eum, quaerat unde, 
                    placeat similique voluptatum cum?
                </div>
                <div className={styles.btns}>
                    <div className={styles.add} >
                        <button onClick={addProductCard}>{textAddProduct}</button>
                    </div>
                    {addingProductCard && <div className={styles.delete_prod}>
                        <button onClick={deleteProductCard}> {textDeleteProduct} </button>
                    </div>}
                </div>
            </div>
        </div>
    );
};

export default Content;