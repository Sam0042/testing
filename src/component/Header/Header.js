import styles from './Header.module.css';

function Header(){
    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <section className={styles.header__left}>
                    <div className={styles.left__container}>
                        <h2 className={styles.left__title}>Sofa California</h2>
                        <p className={styles.left__paragraph}>
                            Lorem ipsum dolor sit amet consectetur adipisi
                            cing elit. Quae ullam cum explicabo esse. Vero dolor autem laboriosam? Sint repudiandae voluptates nostrum at magni voluptas quidem fuga provident ipsum libero quasi recusandae, voluptatum repellendus laboriosam, sunt quia? Cupiditate illo eos veniam dolore ducimus aut laborum 
                            impedit, tempora neque explicabo porro incidunt.
                        </p>
                        <button className={styles.left__button}>Beli</button>
                    </div>
               </section>
               <section className={styles.header__right}>
                   <div className={styles.right__container}>
                        <img className={styles.right__img} src="https://awsimages.detik.net.id/community/media/visual/2019/08/23/0c9547ff-48fe-430e-b52d-eadc20c50409.jpeg?w=700&q=90" alt="" />
                   </div>
               </section>
            </div>
        </div>
    )
}

export default Header;