import styles from './Navbar.module.css';

function Navbar(){
    return(
        <div className={styles.container}>  
            <nav className={styles.navbar}>
                <h2 className={styles.navbar__brand}>HUTA</h2>
                <ul className={styles.navbar__list}>
                    <li className={styles.navbar__item}>Newest</li>
                    <li className={styles.navbar__item}>Genres</li>
                    <li className={styles.navbar__item}>Region</li>
                    <li className={styles.navbar__item}>About</li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;