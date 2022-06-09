import styles from '../../styles/Banner.module.css'
import { Container } from 'react-bootstrap';
import {Animated} from "react-animated-css";

export default function Banner() {
    return (
        <section className={styles.container} id="home-section">            
            <Container className={styles.textBox}>
                <Animated
                    animationIn="jello"
                >
                    <h1 className={styles.bannerTitle} data-atropos-offset="-10" > A sua experiência no mundo das NFT's</h1>
                </Animated>
            </Container>
        </section>
    )
}