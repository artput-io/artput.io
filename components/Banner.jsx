import styles from '../styles/Banner.module.css'
import Atropos from 'atropos/react';

export default function Banner() {
    return (
        <section className={styles.container}>
            <div className={styles.textBox}>
                <Atropos className={styles.banner3d}
                    highlight={false}
                >
                    <h1 className={styles.bannerTitle} data-atropos-offset="-10" >TRAGA A SUA EMPRESA <br/> <span data-atropos-offset="10" >PRO METAVERSO</span></h1>
                    <h4 className={styles.bannerSubtitle}data-atropos-offset="30" >a nova forma de usar a internet</h4>
                </Atropos>
            </div>
        </section>
    )
}