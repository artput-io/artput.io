import styles from '../../styles/Banner.module.css'
import { Container } from 'react-bootstrap';
import {Animated} from "react-animated-css";

export default function Banner() {
    return (
        <Animated
            animationIn="slideInDown"
            animationDuration="10000"
        ><section className={styles.container} id="home-section">
                <Container className={styles.textBox}>

                    <h1 className={styles.bannerTitle} data-atropos-offset="-10"> A sua experiência no mundo das NFT's</h1>
                </Container>
            </section>
        </Animated>
    )
}