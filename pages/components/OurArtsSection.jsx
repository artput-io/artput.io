import styles from '../../styles/OurArtsSection.module.css'
import 'swiper/css/autoplay'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'

import {FreeMode, Navigation} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Container } from 'react-bootstrap'

const OurArtsSection = () => (
    <section className={styles.container} id="arts-section">
        <h1 className={styles.title}>NOSSAS ARTES</h1>
        <Swiper
            modules={[FreeMode, Navigation]}
            slidesPerView={1} 
            spaceBetween={10}
            autoplay={true}
            loop={false}
            freeMode={false}
            navigation
            className={styles.slider}
        >
            <SwiperSlide className={styles.slide} id={styles.firstSlide}>
            </SwiperSlide>
            <SwiperSlide className={styles.slide} id={styles.secondSlide}>
                
            </SwiperSlide>            
        </Swiper>
        <Container className={styles.textBoxx}>
            <p className={styles.textBox}>
                Desenvolvidas pelo artista pelo artista Jamie, nossas artes são feitas reflexos da combinação de design e programação, garantido a singularidade de cada obra
            </p>
        </Container>
        
    </section>
)

export default OurArtsSection;