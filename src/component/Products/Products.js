import styles from './Products.module.css';

function Products(){
    return(
        <div className={styles.container}>
            <div className={styles.product__container}>
                <section className={styles.product__left}>
                    <div className={styles.left__container}>
                        <img className={styles.left__img} src="https://static.bmdstatic.com/pk/product/large/5d1476e2c3bf8.jpg" alt="" />
                        <h3 className={styles.left__title}>Meja belajar</h3>
                        <p className={styles.left__paragraph}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, molestiae!
                        </p>
                        <button className={styles.left__button}>Beli</button>
                    </div>
                </section>
                <section className={styles.product__left}>
                    <div className={styles.left__container}>
                        <img className={styles.left__img} src="https://static.bmdstatic.com/pk/product/large/5d1476e2c3bf8.jpg" alt="" />
                        <h3 className={styles.left__title}>Meja belajar</h3>
                        <p className={styles.left__paragraph}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, molestiae!
                        </p>
                        <button className={styles.left__button}>Beli</button>
                    </div>
                </section>
                <section className={styles.product__left}>
                    <div className={styles.left__container}>
                        <img className={styles.left__img} src="https://static.bmdstatic.com/pk/product/large/5d1476e2c3bf8.jpg" alt="" />
                        <h3 className={styles.left__title}>Meja belajar</h3>
                        <p className={styles.left__paragraph}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, molestiae!
                        </p>
                        <button className={styles.left__button}>Beli</button>
                    </div>
                </section>
                <section className={styles.product__left}>
                    <div className={styles.left__container}>
                        <img className={styles.left__img} src="https://static.bmdstatic.com/pk/product/large/5d1476e2c3bf8.jpg" alt="" />
                        <h3 className={styles.left__title}>Meja belajar</h3>
                        <p className={styles.left__paragraph}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, molestiae!
                        </p>
                        <button className={styles.left__button}>Beli</button>
                    </div>
                </section>
            </div>
        </div>
    )
}
export default Products;
