import styles from '../../styles/Banner.module.css'
import Atropos from 'atropos/react';
import { Container } from 'react-bootstrap';

export default function Banner() {
    return (
        <section className={styles.container} id="home-section">            
            <Container className={styles.textBox}>
                <h1 className={styles.bannerTitle} data-atropos-offset="-10" > A SUA EXPERIÊNCIA NO MUNDO DAS NFT's</h1>
            </Container>
        </section>
    )
}